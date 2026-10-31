# @okize/oxlint-config

My Oxlint configurations. This is a shared config package for [oxlint](https://oxc.rs/docs/guide/usage/linter), a fast TypeScript/Javascript linter.

## Philosophy & Principles

- **Always Error, Never Warn:** Warnings become background noise that developers tune out. A rule should either flag a real problem or stay silent.
- **Strict, Consistent Code Style:** Where there's more than one way to do something, this configuration picks the strictest and most uniform option, favoring modern syntax and established best practices.
- **Fast:** Known performance-heavy rules are skipped.
- **Don't get in the way:** Rules that involve style preferences are intentionally disabled as this is best left to a formatter like `oxfmt`. Whenever possible, rules that can auto-fix are chosen to minimize friction and save developer time.

## How to install

```bash
yarn add -D @okize/oxlint-config oxlint oxlint-tsgolint eslint
```

> **Why `eslint`?** This package uses oxlint's [jsPlugins](https://oxc.rs/docs/guide/usage/linter/js-plugins) feature to run ESLint plugins (e.g. `eslint-plugin-import-x`, `@eslint-react/eslint-plugin`, `eslint-plugin-testing-library`, etc.) natively inside oxlint. These plugins import utilities from the `eslint` package at runtime, so it must be installed even though you won't run `eslint` directly.
>
> **Note:** jsPlugins do not support rules that rely on TypeScript type information. Any type-aware rules in this config use native oxlint rules instead.

### Type-aware linting

The `typescriptConfig` enables [type-aware linting](https://oxc.rs/docs/guide/usage/linter/type-aware), which requires the `oxlint-tsgolint` package:

```bash
yarn add -D oxlint-tsgolint
```

`oxlint-tsgolint` is a separate Go-based tool that builds your TypeScript program using `typescript-go` and runs type-aware rules (e.g. detecting unhandled promises, unsafe assignments). Without it installed, type-aware rules will not run.

_Note: this will likely be unnecessary in the future when Typescript v7 is released._

## Quick start

Create an `oxlint.config.ts` in your project root:

**TypeScript & React project** (most common):

```ts
import { defineConfig } from 'oxlint';
import { typescriptConfig, reactConfig } from '@okize/oxlint-config';

export default defineConfig({
  extends: [typescriptConfig, reactConfig],
});
```

**JavaScript-only project:**

```ts
import { defineConfig } from 'oxlint';
import { javascriptConfig } from '@okize/oxlint-config';

export default defineConfig({
  extends: [javascriptConfig],
});
```

## Available configs

### Base configs

| Export             | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| `javascriptConfig` | Base config for any JS project (base + import + promise + barrel-files rules) |
| `typescriptConfig` | TypeScript projects (includes all JavaScript rules + TypeScript rules)        |

### Feature configs

Feature configs wrap their rules in `overrides` with default file patterns, so they scope correctly when extended at the top level.

| Export                   | Default file patterns                     | Description                           |
| ------------------------ | ----------------------------------------- | ------------------------------------- |
| `reactConfig`            | all files (global)                        | React component + accessibility rules |
| `styledComponentsConfig` | all files (global)                        | Styled Components accessibility rules |
| `nodeConfig`             | `**/*.{mts,mjs,cjs}`                      | Node.js-specific rules                |
| `vitestConfig`           | `**/*.{test,vitest}.{ts,tsx,js,jsx}`      | Vitest testing rules                  |
| `testingLibraryConfig`   | `**/*.{test,vitest}.{ts,tsx,js,jsx}`      | Testing Library + jest-dom rules      |
| `playwrightConfig`       | `**/*.spec.{ts,tsx,js}`, `**/e2e/**/*.ts` | Playwright E2E testing rules          |
| `storybookConfig`        | `**/*.stories.{ts,tsx,js,jsx}`            | Storybook story conventions           |

**Composing configs:**

```ts
import { defineConfig } from 'oxlint';
import {
  typescriptConfig,
  reactConfig,
  styledComponentsConfig,
  vitestConfig,
  testingLibraryConfig,
  storybookConfig,
  nodeConfig,
} from '@okize/oxlint-config';

export default defineConfig({
  extends: [
    typescriptConfig,
    reactConfig,
    styledComponentsConfig,
    vitestConfig,
    testingLibraryConfig,
    storybookConfig,
    nodeConfig,
  ],
});
```

## Overriding rules

Add a `rules` section — your rules take precedence over the shared configs:

```ts
export default defineConfig({
  extends: [typescriptConfig, reactConfig],
  rules: {
    'typescript/no-explicit-any': 'off',
    'react/no-clone-element': 'off',
  },
});
```

File-specific overrides use `overrides`. Note that `extends` is not supported inside `overrides` — use rule imports for those:

```ts
import { defineConfig } from 'oxlint';
import { typescriptConfig, vitestRules } from '@okize/oxlint-config';

export default defineConfig({
  extends: [typescriptConfig],
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.vitest.ts'],
      plugins: vitestRules.plugins,
      jsPlugins: vitestRules.jsPlugins,
      rules: {
        ...vitestRules.rules,
        // project-specific overrides
        'jest/expect-expect': ['error', { assertFunctionNames: ['expect', 'expectValid'] }],
      },
    },
  ],
});
```

## Running oxlint

```json
{
  "scripts": {
    "lint:oxlint": "oxlint -c oxlint.config.ts ."
  }
}
```

## Formatting with oxfmt

This package also ships okize's shared [oxfmt](https://oxc.rs/docs/guide/usage/formatter) config as `oxfmtConfig`, exported from the `@okize/oxlint-config/oxfmtConfig` subpath. It is only tangentially related to linting, so `oxfmt` is an **optional** peer dependency — install it only if you use the formatter:

```bash
yarn add -D oxfmt
```

Create an `oxfmt.config.mts` in your project root. Spread `oxfmtConfig` and override any field; use `satisfies OxfmtConfig` for type checking:

```ts
import type { OxfmtConfig } from 'oxfmt';
import { defineConfig } from 'oxfmt';
import { oxfmtConfig } from '@okize/oxlint-config/oxfmtConfig';

// oxlint-disable-next-line import-x/no-default-export
export default defineConfig({
  ...oxfmtConfig,
  printWidth: 120,
  ignorePatterns: [...oxfmtConfig.ignorePatterns, 'dist/**'],
} satisfies OxfmtConfig);
```

Every field is overrideable. Because `oxfmtConfig` is a plain object, spread it and replace whichever keys you need — nested keys such as `sortImports` and `ignorePatterns` are replaced wholesale, so reference the base value (as above) when you only want to extend it.

To use the config as-is with no overrides, point oxfmt at the package's default export directly:

```ts
// oxfmt.config.mts
export { default } from '@okize/oxlint-config/oxfmtConfig';
```

Add a script to run it:

```json
{
  "scripts": {
    "format": "oxfmt .",
    "format:ci": "oxfmt --check ."
  }
}
```

## Guidelines for adding new rules

1. Preference given for autofixable rules
2. Should not contradict existing rules
3. Person/team adding new rules handles upgrading consumers and fixing violations
4. Rules should always be set to `error`, never `warn`
5. Add short description of rule and link to rule documentation in code comments
6. Never delete a rule — set it to `off` with a comment explaining why

### Why some rules are ESLint-only

oxlint's jsPlugins feature can load ESLint plugins that export a standard `{ rules }` object. This works for packages like `eslint-plugin-import-x`, `eslint-plugin-storybook`, etc.

Several categories of rules cannot use this approach:

1. **Core ESLint rules** (e.g. `no-restricted-globals`, `camelcase`, `object-shorthand`). These are built into the `eslint` package, not exported as a plugin with a `{ rules }` object. `@eslint/js` only exports configs, not rules. There is no standalone ESLint plugin that re-exports core rules in the format oxlint's jsPlugins expect.

2. **Rules requiring ESLint parser services** (e.g. `@eslint-react/*`, `@typescript-eslint/*`). These call `getParserServices()` from `@typescript-eslint/utils` internally, which requires ESLint's parser infrastructure. oxlint's jsPlugin runner does not provide this.

3. **Rules requiring module resolution** (e.g. `import-x/no-unresolved`, `import-x/extensions`, `import-x/no-rename-default`). In ESLint, these rules use `eslint-import-resolver-typescript` to resolve TypeScript path aliases, barrel re-exports, and extensionless imports. The resolver is configured via ESLint's `settings['import-x/resolver']` — but oxlint's jsPlugin runner does not pass ESLint settings to plugins. Without a resolver, these rules can't find modules and produce thousands of false positives on every import.

4. **Old-style ESLint plugins** (e.g. `eslint-plugin-filenames`). These export rules as plain functions instead of objects with a `create` method, which oxlint's jsPlugin runner — requiring the modern `{ meta, create }` format — cannot load. The package is also abandoned. Where a rule from such a plugin is worth keeping, it is reimplemented in our own custom local jsPlugin (`custom`) under [`plugins/custom.mjs`](./plugins/custom.mjs).
   - `custom/match-exported` is a faithful port of `eslint-plugin-filenames`' `match-exported`, enabled in `javascriptConfig` + `typescriptConfig`, matching eslint-config. (Its rule ID is namespaced `custom/` rather than `filenames/` to signal it is our own rule, not the upstream plugin.) The upstream `match-regex` and `no-index` rules are not ported — eslint-config disables both.
