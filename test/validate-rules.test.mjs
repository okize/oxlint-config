import { execSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const getSeverity = (value) => [].concat(value)[0];

// Rule files use named exports; grab the first exported value.
const getRuleExport = (mod) => Object.values(mod)[0];

const ruleFiles = readdirSync(resolve(root, 'rules')).filter((file) => file.endsWith('.mjs'));
const configFiles = readdirSync(resolve(root, 'configs')).filter((file) => file.endsWith('.mjs'));

describe('all rules use error severity (not warn)', () => {
  it.each(ruleFiles)('rules/%s uses only "error" or "off" (never "warn")', async (file) => {
    const mod = await import(resolve(root, 'rules', file));
    const ruleExport = getRuleExport(mod);
    Object.values(ruleExport.rules).forEach((value) => {
      expect(['error', 'off']).toContain(getSeverity(value));
    });
  });
});

describe('package.json exports cover all files', () => {
  const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
  const exportTargets = new Set(
    Object.values(pkg.exports).flatMap((v) => (typeof v === 'string' ? [v] : Object.values(v))),
  );

  it.each(ruleFiles)('rules/%s has a package.json export', (file) => {
    expect(exportTargets).toContain(`./rules/${file}`);
  });

  it.each(configFiles)('configs/%s has a package.json export', (file) => {
    expect(exportTargets).toContain(`./configs/${file}`);
  });
});

describe('peerDependency minimums match devDependency versions', () => {
  // If we configure rules from a new oxlint version while the peer minimum is
  // stale, consumers on an older version see "unknown rule" errors at lint
  // time. Same risk applies to oxlint-tsgolint and any future peer/dev pair.
  const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
  const peerDeps = pkg.peerDependencies ?? {};
  const devDeps = pkg.devDependencies ?? {};

  // Extract the first X.Y.Z(-prerelease)? from a range like "^1.67.0", ">= 1.67.0", "~1.0.0", or bare.
  const minVersion = (range) => range.match(/\d+\.\d+\.\d+(?:[-.\w]+)?/)?.[0];

  const sharedPackages = Object.keys(peerDeps).filter((name) => name in devDeps);

  it.each(sharedPackages)('peer "%s" minimum matches devDependency version', (name) => {
    const peer = minVersion(peerDeps[name]);
    const dev = minVersion(devDeps[name]);
    expect(
      peer,
      `peerDependencies["${name}"] is "${peerDeps[name]}" but devDependencies["${name}"] is "${devDeps[name]}". Bump the peer minimum to ">= ${dev}" so consumers don't lint with an older oxlint that lacks rules we now configure.`,
    ).toBe(dev);
  });
});

describe('all native oxlint rules for enabled plugins are explicitly configured', () => {
  // Parse `oxlint --rules` once and build a map: plugin -> Set<ruleName>
  const rulesOutput = execSync('npx oxlint --rules', { encoding: 'utf8' });
  const oxlintRulesByPlugin = new Map();
  for (const line of rulesOutput.split('\n')) {
    // Format: | rule-name | plugin_source | Default | Enabled? | Fixable? |
    const match = line.match(/^\|\s+(\S+)\s+\|\s+(\S+)\s+\|/);
    if (!match) continue;
    const [, ruleName, pluginSource] = match;
    if (ruleName === 'Rule' || ruleName.startsWith('-')) continue;
    if (!oxlintRulesByPlugin.has(pluginSource)) {
      oxlintRulesByPlugin.set(pluginSource, new Set());
    }
    oxlintRulesByPlugin.get(pluginSource).add(ruleName);
  }

  // Normalize plugin name: config uses hyphens (jsx-a11y), oxlint uses underscores (jsx_a11y)
  const normalizePlugin = (name) => name.replace(/-/g, '_');

  // Build test cases: [file, plugin] pairs where plugin is non-empty
  const testCases = [];
  for (const file of ruleFiles) {
    // Synchronously read and extract plugins array via regex to avoid top-level await
    const source = readFileSync(resolve(root, 'rules', file), 'utf8');
    const pluginsMatch = source.match(/plugins:\s*\[([^\]]*)\]/);
    if (!pluginsMatch) continue;
    const plugins = pluginsMatch[1]
      .split(',')
      .map((s) => s.trim().replace(/['"]/g, ''))
      .filter(Boolean);
    if (plugins.length === 0) continue;
    for (const plugin of plugins) {
      testCases.push([file, plugin]);
    }
  }

  it.each(testCases)(
    'rules/%s covers all native oxlint rules for plugin "%s"',
    async (file, plugin) => {
      const mod = await import(resolve(root, 'rules', file));
      const ruleExport = getRuleExport(mod);
      const configuredRuleNames = new Set(Object.keys(ruleExport.rules));

      const normalizedPlugin = normalizePlugin(plugin);
      const nativeRules = oxlintRulesByPlugin.get(normalizedPlugin);
      if (!nativeRules) return; // plugin not found in oxlint (should not happen)

      const missing = [];
      for (const ruleName of nativeRules) {
        // Rules in config use "plugin/rule-name" or "plugin_name/rule-name"
        const prefixedHyphen = `${plugin}/${ruleName}`;
        const prefixedUnderscore = `${normalizedPlugin}/${ruleName}`;
        if (
          !configuredRuleNames.has(prefixedHyphen) &&
          !configuredRuleNames.has(prefixedUnderscore)
        ) {
          missing.push(`${plugin}/${ruleName}`);
        }
      }

      expect(missing, `Missing rules in rules/${file}:\n  ${missing.join('\n  ')}`).toEqual([]);
    },
  );
});

describe('all jsPlugin rules are explicitly configured', () => {
  // Unconfigured jsPlugin rules do not run (unlike native rules, which default
  // to warn), so nothing breaks silently — but an unconfigured rule is an
  // unaccounted-for decision, and new rules added by a plugin upgrade would
  // never surface. Every rule of every declared jsPlugin must be explicitly
  // "error" or "off", and every configured rule must still exist in the
  // plugin (catches renames/removals on upgrade).
  //
  // Alias handling: some plugins expose the same rule object under multiple
  // names (e.g. @eslint-react's x-* names alias the unprefixed rules). Rules
  // are grouped by object identity, and each group must have exactly one
  // configured name — zero is an unaccounted-for rule, two or more reports
  // every violation once per enabled name.

  // Rule prefix for a jsPlugin entry: object entries use their explicit
  // `name`; bare-path entries into node_modules keep the full package name
  // (scoped-aware); local plugin files use the plugin's meta.name.
  const entryPrefix = (entry, pluginMod) => {
    if (typeof entry === 'object') return entry.name;
    const nmMatch = entry.match(/node_modules\/((?:@[^/]+\/)?[^/]+)/g);
    if (nmMatch) {
      return nmMatch[nmMatch.length - 1].replace('node_modules/', '');
    }
    return pluginMod.meta?.name;
  };

  it.each(ruleFiles)('rules/%s configures every rule of its jsPlugins', async (file) => {
    const mod = await import(resolve(root, 'rules', file));
    const ruleExport = getRuleExport(mod);
    const configuredRuleNames = Object.keys(ruleExport.rules);

    for (const entry of ruleExport.jsPlugins ?? []) {
      const specifier = typeof entry === 'object' ? entry.specifier : entry;
      const pluginImport = await import(specifier);
      const pluginMod = pluginImport.default ?? pluginImport;
      const prefix = entryPrefix(entry, pluginMod);
      expect(prefix, `Could not determine rule prefix for jsPlugin "${specifier}"`).toBeTruthy();

      const pluginRules = Object.keys(pluginMod.rules ?? {});
      expect(
        pluginRules.length,
        `jsPlugin "${prefix}" in rules/${file} exposes no rules`,
      ).toBeGreaterThan(0);

      const configured = new Set(
        configuredRuleNames
          .filter((name) => name.startsWith(`${prefix}/`))
          .map((name) => name.slice(prefix.length + 1)),
      );

      // Group alias names sharing a rule object; see the describe comment.
      const aliasGroups = new Map();
      for (const [name, rule] of Object.entries(pluginMod.rules)) {
        const names = aliasGroups.get(rule) ?? [];
        names.push(name);
        aliasGroups.set(rule, names);
      }

      // Soft assertions so a rename (one missing + one stale entry) reports
      // both halves in a single run.
      const missing = [];
      const duplicates = [];
      for (const names of aliasGroups.values()) {
        const configuredNames = names.filter((name) => configured.has(name));
        if (configuredNames.length === 0) missing.push(names.join(' / '));
        if (configuredNames.length > 1) duplicates.push(configuredNames.join(' + '));
      }
      expect
        .soft(
          missing,
          `Unconfigured "${prefix}" rules in rules/${file} — set one name per rule to "error" or "off" with a Decision comment:\n  ${missing.map((name) => `${prefix}/${name}`).join('\n  ')}`,
        )
        .toEqual([]);
      expect
        .soft(
          duplicates,
          `Alias names of the same "${prefix}" rule configured more than once in rules/${file} — keep exactly one name per rule:\n  ${duplicates.map((name) => `${prefix}/${name}`).join('\n  ')}`,
        )
        .toEqual([]);

      const stale = [...configured].filter((name) => !pluginRules.includes(name));
      expect
        .soft(
          stale,
          `Configured "${prefix}" rules in rules/${file} that no longer exist in the plugin:\n  ${stale.map((name) => `${prefix}/${name}`).join('\n  ')}`,
        )
        .toEqual([]);
    }
  });
});

describe('no plugin in a rule file has every rule set to "off"', () => {
  // A plugin entry whose every rule is "off" is a signal that the plugin is
  // unused (typically because native oxlint coverage has replaced it) and
  // should be removed from the file's plugins/jsPlugins list along with its
  // now-dead rule entries.

  // Match: `<key>: [ ... ]` (top-level array; `?` makes ] non-greedy)
  const parsePluginList = (source, key) => {
    const match = source.match(new RegExp(`\\b${key}:\\s*\\[([\\s\\S]*?)\\]`));
    if (!match) return [];

    // Depth-aware split by top-level commas (entries may be object literals)
    const entries = [];
    let depth = 0;
    let current = '';
    for (const ch of match[1]) {
      if (ch === '{' || ch === '[') depth += 1;
      else if (ch === '}' || ch === ']') depth -= 1;
      if (ch === ',' && depth === 0) {
        entries.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
    if (current.trim()) entries.push(current);

    return entries
      .map((entry) => {
        const trimmed = entry.trim();
        if (!trimmed) return null;
        // Object entry: { name: 'foo', specifier: '...' }
        if (trimmed.startsWith('{')) {
          const nameMatch = trimmed.match(/name:\s*['"]([^'"]+)['"]/);
          return nameMatch ? nameMatch[1] : null;
        }
        // String entry: 'foo'
        const strMatch = trimmed.match(/['"]([^'"]+)['"]/);
        return strMatch ? strMatch[1] : null;
      })
      .filter(Boolean);
  };

  const normalize = (name) => name.replace(/-/g, '_');

  const testCases = [];
  for (const file of ruleFiles) {
    const source = readFileSync(resolve(root, 'rules', file), 'utf8');
    const plugins = [
      ...parsePluginList(source, 'plugins'),
      ...parsePluginList(source, 'jsPlugins'),
    ];
    for (const plugin of plugins) {
      testCases.push([file, plugin]);
    }
  }

  it.each(testCases)(
    'rules/%s has at least one non-"off" rule for plugin "%s"',
    async (file, plugin) => {
      const mod = await import(resolve(root, 'rules', file));
      const ruleExport = getRuleExport(mod);
      const prefixes = [`${plugin}/`, `${normalize(plugin)}/`];
      const pluginRules = Object.entries(ruleExport.rules).filter(([name]) =>
        prefixes.some((p) => name.startsWith(p)),
      );
      if (pluginRules.length === 0) return;

      const allOff = pluginRules.every(([, value]) => getSeverity(value) === 'off');
      expect(
        allOff,
        `All "${plugin}" rules in rules/${file} are set to "off" — plugin appears unused, consider removing it from plugins/jsPlugins and deleting these rule entries.`,
      ).toBe(false);
    },
  );
});

describe('index.mjs exports all rule files', () => {
  it('every rule file is re-exported from index.mjs', async () => {
    const indexMod = await import(resolve(root, 'index.mjs'));
    const indexSource = readFileSync(resolve(root, 'index.mjs'), 'utf8');

    for (const file of ruleFiles) {
      expect(indexSource).toContain(`./rules/${file}`);
    }
  });
});
