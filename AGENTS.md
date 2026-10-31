# CLAUDE.md

## Philosophy

- **Always error, never warn.** Warnings become background noise. A rule either flags a real problem or stays silent.
- **Strict, consistent code style.** Where there's more than one way to do something, pick the strictest and most uniform option, favoring modern syntax and established best practices.
- **Fast.** Skip known performance-heavy rules.
- **Don't get in the way.** Style preference rules are disabled — formatting is left to a formatter. Prefer rules that auto-fix to minimize friction.

## Rules for working in this repo

### Rule coverage (native and jsPlugin)

Every rule of every enabled plugin — native oxlint plugins and jsPlugins alike — must be explicitly configured in the corresponding rule file. Unconfigured native rules run at oxlint's default `warn` severity, which violates the no-warnings policy. Unconfigured jsPlugin rules do not run, but they are unaccounted-for decisions, and new rules added by a plugin upgrade would never surface.

- Every rule must be set to `error` or `off`. Never `warn`.
- Every rule set to `off` must have a `// Decision: <reason>` comment above it explaining why it is disabled. Example: `// Decision: too strict for general use` or `// Decision: handled by native vitest/valid-title`.
- When adding a new native plugin to a rule file, run `npx oxlint --rules | grep PLUGIN` to get the full rule list and configure every one.
- When upgrading the `oxlint` dependency or any jsPlugin package, run `npx vitest run test/validate-rules.test.mjs` to detect new unconfigured rules and configured rules the plugin no longer ships (renames/removals).
- When adding a new native oxlint rule, check whether a jsPlugin rule in the same file covers the same behavior. If so, set the jsPlugin rule to `off` with `// Decision: handled by native <plugin/rule-name>`.
- When a jsPlugin exposes the same rule object under more than one name (e.g. @eslint-react's `x-*` names alias the unprefixed rules), configure exactly one of the names and omit the rest. The coverage test groups rules by object identity and fails when a group has zero configured names (unaccounted-for rule) or more than one (each enabled name reports every violation again).

### jsPlugins specifiers

Declare every npm-package jsPlugin through `resolvePlugin()` (from `resolve-plugin.mjs`), never as a bare package name. oxlint resolves bare specifiers from the consumer's config location; when a consumer's dependency tree nests this package's dependencies (e.g. its typescript major differs from ours), bare specifiers fail with "Failed to load JS plugin". `resolvePlugin` returns an absolute path resolved from within this package, which loads in both this repo and any consumer layout.

Do not add an explicit `name` alias starting with `eslint-plugin-` — oxlint rejects those. A bare path entry keeps the full package name (e.g. `eslint-plugin-storybook/...`) working as a rule prefix.

The resolver is a workaround for oxlint only accepting string specifiers. If [oxc-project/oxc#23944](https://github.com/oxc-project/oxc/issues/23944) (plugin registration by imported object, as in ESLint flat config) ships, migrate to direct plugin imports and delete `resolve-plugin.mjs`.

### typescript dependency

The `typescript` dependency exists to give the ESLint-compat plugin chain (@eslint-react → @typescript-eslint → ts-api-utils) the TypeScript JS compiler API. TypeScript 7+ is a native binary with no JS API (`require('typescript')` returns a version-only stub, and plugin loading crashes on `ts.TypeFlags`), so this dependency must stay on the newest 6.x line. TypeScript 7.0 ships no API at all; per the [TS 7.0 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/), 7.1 will introduce a new API, and the plugin chain must then release versions built against it before this dependency can move to 7.x. Consumers may be on typescript 7 — that is fine; their install nests a 6.x copy under this package.

### vitest only — no jest

This project uses vitest. The `jest` plugin is not enabled. Do not add `jest/*` rules. All test-related lint rules go through the `vitest` plugin (native oxlint rules) and `vitest-js` jsPlugin (`@vitest/eslint-plugin`).

### Validation

Run `npx vitest run` before considering any change complete. The test suite checks:

- All rules use `error` or `off` severity (never `warn`)
- All native oxlint rules for enabled plugins are explicitly configured
- All configs are accepted by oxlint without parse errors
- All rule/config files are exported from `index.mjs` and `package.json`
