import { resolvePlugin } from '../resolve-plugin.mjs';

// Native oxlint import rules + eslint-plugin-import-x via jsPlugins for rules
// without native equivalents.
export const importRules = {
  plugins: ['import'],
  jsPlugins: [{ name: 'import-x-js', specifier: resolvePlugin('eslint-plugin-import-x') }],
  rules: {
    // Ensure named imports coupled with named exports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/named.html
    // note: oxlint import plugin uses "default" and "namespace" for resolution checks
    'import/default': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/import/namespace.html
    'import/namespace': 'error',

    // Forbid cyclical dependencies between modules
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html
    'import/no-cycle': ['error', { maxDepth: 2 }],

    // Disallow duplicate imports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-duplicates.html
    'import/no-duplicates': 'error',

    // Forbid default exports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-default-export.html
    'import/no-default-export': 'error',

    // Forbid a module from importing itself
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-self-import.html
    'import/no-self-import': 'error',

    // Forbid import of modules using absolute paths
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-absolute-path.html
    'import/no-absolute-path': 'error',

    // Forbid empty named import blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-empty-named-blocks.html
    'import/no-empty-named-blocks': 'error',

    // Do not allow a default import name to match a named export
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default.html
    'import/no-named-as-default': 'error',

    // Warn on accessing default export property names that are also named exports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default-member.html
    'import/no-named-as-default-member': 'error',

    // Prevent importing the default as if it were named
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-default.html
    'import/no-named-default': 'error',

    // Forbid mutable exports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-mutable-exports.html
    'import/no-mutable-exports': 'error',

    // Reports if a module's default export is unnamed
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-anonymous-default-export.html
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],

    // Disallow non-import statements appearing before import statements
    // https://oxc.rs/docs/guide/usage/linter/rules/import/first.html
    'import/first': 'error',

    // Disallow require()
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-commonjs.html
    'import/no-commonjs': 'error',

    // Disallow AMD require/define
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-amd.html
    'import/no-amd': 'error',

    // Forbid require() calls with expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-dynamic-require.html
    'import/no-dynamic-require': 'error',

    // Forbid Webpack loader syntax in imports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html
    'import/no-webpack-loader-syntax': 'error',

    // Ensure consistent use of file extension within the import path
    // https://oxc.rs/docs/guide/usage/linter/rules/import/extensions.html
    'import/extensions': 'error',

    // Enforce consistent type specifier style (inline vs top-level)
    // https://oxc.rs/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    // Disallow invalid exports, e.g. multiple defaults
    // https://oxc.rs/docs/guide/usage/linter/rules/import/export.html
    // Decision: too opinionated for general use
    'import/export': 'error',

    // Require exports to be placed at the end of the file
    // https://oxc.rs/docs/guide/usage/linter/rules/import/exports-last.html
    // Decision: conflicts with `import/first`, which is enabled
    'import/exports-last': 'off',

    // Prefer named exports to be grouped together in a single export declaration
    // https://oxc.rs/docs/guide/usage/linter/rules/import/group-exports.html
    // Decision: too opinionated for general use
    'import/group-exports': 'off',

    // Enforce a maximum number of dependencies per module
    // https://oxc.rs/docs/guide/usage/linter/rules/import/max-dependencies.html
    // Decision: too opinionated for general use
    'import/max-dependencies': 'off',

    // Require a newline after the last import/require in a group
    // https://oxc.rs/docs/guide/usage/linter/rules/import/newline-after-import.html
    'import/newline-after-import': 'error',

    // Ensure named imports coupled with named exports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/named.html
    // Decision: handled by TypeScript
    'import/named': 'off',

    // Forbid named exports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-export.html
    // Decision: conflicts with no-default-export which is enabled
    'import/no-named-export': 'off',

    // Disallow namespace (a.k.a. "wildcard" *) imports
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-namespace.html
    // Decision: too opinionated for general use
    'import/no-namespace': 'off',

    // Disallow Node.js builtin modules
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-nodejs-modules.html
    // Decision: not applicable to this project
    'import/no-nodejs-modules': 'off',

    // Forbid importing modules from parent directories
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-relative-parent-imports.html
    // Decision: too opinionated for general use
    'import/no-relative-parent-imports': 'off',

    // Forbid unassigned imports (side-effect imports)
    // https://oxc.rs/docs/guide/usage/linter/rules/import/no-unassigned-import.html
    // Decision: too opinionated for general use
    'import/no-unassigned-import': 'off',

    // Report potentially ambiguous parse goal
    // https://oxc.rs/docs/guide/usage/linter/rules/import/unambiguous.html
    // Decision: too opinionated for general use
    'import/unambiguous': 'off',

    // Require modules with a single export to use a default export
    // https://oxc.rs/docs/guide/usage/linter/rules/import/prefer-default-export.html
    // Decision: conflicts with no-default-export, which is enabled
    'import/prefer-default-export': 'off',

    //rules via jsPlugins (eslint-plugin-import-x)

    // Ensure imports point to files/modules that can be resolved
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
    // NOTE: disabled — requires eslint-import-resolver-typescript to resolve TS paths.
    // oxlint's jsPlugin runner does not pass ESLint settings to plugins, so the resolver
    // config never reaches the plugin.
    // Decision: requires resolver configuration unavailable in oxlint jsPlugin runtime
    'import-x-js/no-unresolved': 'off',

    // Disallow invalid exports, e.g. multiple defaults
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
    'import-x-js/export': 'error',

    // Forbid the use of extraneous packages
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
    // Decision: this is better handled by knip
    'import-x-js/no-extraneous-dependencies': 'off',

    // Reports if a default export is renamed during import
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-rename-default.md
    // NOTE: disabled — parser errors on TS modules without eslint-import-resolver-typescript.
    // Decision: requires resolver configuration unavailable in oxlint jsPlugin runtime
    'import-x-js/no-rename-default': 'off',

    // Ensure consistent use of file extension within the import path
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
    // NOTE: disabled — cannot determine file existence without eslint-import-resolver-typescript.
    // Decision: requires resolver configuration unavailable in oxlint jsPlugin runtime
    'import-x-js/extensions': 'off',

    // Ensure absolute imports are above relative imports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
    // Decision: handled by oxfmt's import sorting (https://oxc.rs/docs/guide/usage/formatter/sorting.html)
    'import-x-js/order': 'off',

    // Require a newline after the last import/require in a group
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
    // Decision: handled by native import/newline-after-import
    'import-x-js/newline-after-import': 'off',

    // Ensures that there are no useless path segments
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
    'import-x-js/no-useless-path-segments': ['error', { commonjs: true }],

    // Reports the use of import declarations with CommonJS exports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
    'import-x-js/no-import-module-exports': ['error', { exceptions: [] }],

    // Use this rule to prevent importing packages through relative paths
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
    'import-x-js/no-relative-packages': 'error',

    // Ensure named imports coupled with named exports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md
    // Decision: requires resolver configuration unavailable in oxlint jsPlugin runtime
    'import-x-js/named': 'off',

    // Ensure default import coupled with default export
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
    // Decision: handled by native import/default
    'import-x-js/default': 'off',

    // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
    // Decision: handled by native import/namespace
    'import-x-js/namespace': 'off',

    // Disallow namespace (a.k.a. "wildcard" *) imports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md
    // Decision: too restrictive for general use
    'import-x-js/no-namespace': 'off',

    // Forbid mutable exports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
    // Decision: handled by native import/no-mutable-exports
    'import-x-js/no-mutable-exports': 'off',

    // Restrict which files can be imported in a given folder
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md
    // Decision: project-specific, not configured by default
    'import-x-js/no-restricted-paths': 'off',

    // Prevent importing the submodules of other modules
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md
    // Decision: project-specific, not configured by default
    'import-x-js/no-internal-modules': 'off',

    // Prefer named exports to be grouped together in a single export declaration
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
    // Decision: too restrictive for general use
    'import-x-js/group-exports': 'off',

    // Forbid importing modules from parent directories
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md
    // Decision: too restrictive for general use
    'import-x-js/no-relative-parent-imports': 'off',

    // Enforce consistent type import style
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
    // Decision: handled by TypeScript config
    'import-x-js/consistent-type-specifier-style': 'off',

    // Forbid a module from importing itself
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
    // Decision: handled by native import/no-self-import
    'import-x-js/no-self-import': 'off',

    // Forbid cyclical dependencies between modules
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
    // Decision: handled by native import/no-cycle
    'import-x-js/no-cycle': 'off',

    // Prevent importing the default as if it were named
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
    // Decision: handled by native import/no-named-default
    'import-x-js/no-named-default': 'off',

    // Do not allow a default import name to match a named export
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
    // Decision: handled by native import/no-named-as-default
    'import-x-js/no-named-as-default': 'off',

    // Warn on accessing default export property names that are also named exports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
    // Decision: handled by native import/no-named-as-default-member
    'import-x-js/no-named-as-default-member': 'off',

    // Reports if a module's default export is unnamed
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
    // Decision: handled by native import/no-anonymous-default-export
    'import-x-js/no-anonymous-default-export': 'off',

    // Reports modules without any exports, or with unused exports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
    // Decision: requires resolver configuration unavailable in oxlint jsPlugin runtime
    'import-x-js/no-unused-modules': 'off',

    // Disallow require()
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md
    // Decision: handled by native import/no-commonjs
    'import-x-js/no-commonjs': 'off',

    // Disallow AMD require/define
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
    // Decision: handled by native import/no-amd
    'import-x-js/no-amd': 'off',

    // Disallow duplicate imports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
    // Decision: handled by native import/no-duplicates
    'import-x-js/no-duplicates': 'off',

    // Disallow non-import statements appearing before import statements
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
    // Decision: handled by native import/first
    'import-x-js/first': 'off',

    // Enforce a maximum number of dependencies per module
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md
    // Decision: too restrictive for general use
    'import-x-js/max-dependencies': 'off',

    // Forbid import of modules using absolute paths
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
    // Decision: handled by native import/no-absolute-path
    'import-x-js/no-absolute-path': 'off',

    // Disallow Node.js builtin modules
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md
    // Decision: too restrictive for general use
    'import-x-js/no-nodejs-modules': 'off',

    // Forbid Webpack loader syntax in imports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
    // Decision: handled by native import/no-webpack-loader-syntax
    'import-x-js/no-webpack-loader-syntax': 'off',

    // Require modules with a single export to use a default export
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
    // Decision: handled by native import/prefer-default-export
    'import-x-js/prefer-default-export': 'off',

    // Prefer namespace (wildcard *) imports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-namespace-import.md
    // Decision: too restrictive for general use
    'import-x-js/prefer-namespace-import': 'off',

    // Forbid default exports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
    // Decision: handled by native import/no-default-export
    'import-x-js/no-default-export': 'off',

    // Forbid named exports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md
    // Decision: conflicts with no-default-export which is enabled
    'import-x-js/no-named-export': 'off',

    // Forbid require() calls with expressions
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
    // Decision: handled by native import/no-dynamic-require
    'import-x-js/no-dynamic-require': 'off',

    // Report potentially ambiguous parse goal
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md
    // Decision: not useful with ESM
    'import-x-js/unambiguous': 'off',

    // Forbid unassigned imports (side-effect imports)
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md
    // Decision: too restrictive — CSS imports, polyfills, etc. are valid
    'import-x-js/no-unassigned-import': 'off',

    // Enforce a leading comment with the webpackChunkName for dynamic imports
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md
    // Decision: webpack-specific, not applicable
    'import-x-js/dynamic-import-chunkname': 'off',

    // Forbid empty named import blocks
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
    // Decision: handled by native import/no-empty-named-blocks
    'import-x-js/no-empty-named-blocks': 'off',

    // Require exports to be placed at the end of the file
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
    // Decision: too restrictive for general use
    'import-x-js/exports-last': 'off',

    // Report imported names marked as @deprecated
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
    // Decision: requires resolver configuration unavailable in oxlint jsPlugin runtime
    'import-x-js/no-deprecated': 'off',

    // Disallow non-import statements appearing before import statements (alias)
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/imports-first.md
    // Decision: deprecated alias for first, handled by native import/first
    'import-x-js/imports-first': 'off',
  },
};
