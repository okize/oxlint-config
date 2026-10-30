import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const validTopLevelKeys = new Set([
  'categories',
  'env',
  'extends',
  'globals',
  'ignorePatterns',
  'jsPlugins',
  'options',
  'overrides',
  'plugins',
  'rules',
  'settings',
]);

const configFiles = readdirSync(resolve(root, 'configs')).filter((file) => file.endsWith('.mjs'));

describe('config file schema', () => {
  it.each(configFiles)('configs/%s has only valid top-level keys', async (file) => {
    const mod = await import(resolve(root, 'configs', file));
    const keys = Object.keys(mod.default);
    keys.forEach((key) => {
      expect(validTopLevelKeys).toContain(key);
    });
  });
});

describe('index.d.mts matches index.mjs exports', () => {
  it('every runtime export has a type declaration', async () => {
    const mod = await import(resolve(root, 'index.mjs'));
    const runtimeExports = Object.keys(mod).sort();

    const dts = readFileSync(resolve(root, 'index.d.mts'), 'utf8');
    const declaredExports = [...dts.matchAll(/export declare const (\w+)/g)]
      .map((m) => m[1])
      .sort();

    expect(declaredExports).toEqual(runtimeExports);
  });
});

describe('oxlint accepts configs', () => {
  // On config rejection oxlint prints a parse-failure message (e.g. when a
  // jsPlugin fails to load) to stdout, so both streams must be checked
  // regardless of exit code — an assertion on stderr alone passes vacuously.
  // A non-zero exit with a clean output just means lint errors were found on
  // the source tree — that's still config acceptance.
  //
  // The needles are assembled at runtime: oxlint's graphical formatter renders
  // source lines around diagnostics, and this file is part of the linted tree,
  // so a literal needle in this source would appear in oxlint's output and
  // match the assertion against it.
  const configParseFailure = ['Failed', 'to', 'parse'].join(' ');
  const jsPluginLoadFailure = ['Failed', 'to', 'load', 'JS', 'plugin'].join(' ');
  // An enabled jsPlugin rule that throws at lint time (e.g. a rule the plugin
  // exports but does not actually support) prints this per file instead of
  // failing the config load.
  const jsPluginRuntimeFailure = ['Error', 'running', 'JS', 'plugin'].join(' ');

  it.each(configFiles)('configs/%s is accepted by oxlint', { timeout: 60_000 }, (file) => {
    const configPath = resolve(root, 'configs', file);
    const result = spawnSync('npx', ['oxlint', '-c', configPath, '.'], {
      cwd: root,
      encoding: 'utf8',
    });
    const output = String(result.stdout) + String(result.stderr);
    expect(output).not.toContain(configParseFailure);
    expect(output).not.toContain(jsPluginLoadFailure);
    expect(output).not.toContain(jsPluginRuntimeFailure);
  });
});

describe('jsPlugins specifiers are absolute paths', () => {
  // Bare package names (e.g. 'eslint-plugin-storybook') are resolved by oxlint
  // from the consumer's root, not from this package. When a consumer's dependency
  // tree nests this package's plugins (e.g. its typescript version differs from
  // the consumer's), bare specifiers fail to resolve. Every specifier must be an
  // absolute path resolved from within this package (see resolve-plugin.mjs).
  it.each(configFiles)('configs/%s jsPlugins use absolute existing paths', async (file) => {
    const mod = await import(resolve(root, 'configs', file));
    const jsPlugins = [
      ...(mod.default.jsPlugins ?? []),
      ...(mod.default.overrides ?? []).flatMap((override) => override.jsPlugins ?? []),
    ];
    for (const entry of jsPlugins) {
      const specifier = typeof entry === 'string' ? entry : entry.specifier;
      expect(
        isAbsolute(specifier),
        `jsPlugin specifier "${specifier}" in configs/${file} should be an absolute path`,
      ).toBe(true);
      expect(existsSync(specifier), `jsPlugin path "${specifier}" should exist`).toBe(true);
    }
  });
});
