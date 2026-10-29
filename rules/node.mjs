import { resolvePlugin } from '../resolve-plugin.mjs';

// Native oxlint node rules + eslint-plugin-n via jsPlugins for rules
// without native equivalents.
export const nodeRules = {
  plugins: ['node'],
  jsPlugins: [{ name: 'n', specifier: resolvePlugin('eslint-plugin-n') }],
  rules: {
    // Require return statements after callbacks
    // https://oxc.rs/docs/guide/usage/linter/rules/node/callback-return.html
    'node/callback-return': 'error',

    // Require error handling in callbacks
    // https://oxc.rs/docs/guide/usage/linter/rules/node/handle-callback-err.html
    'node/handle-callback-err': 'error',

    // Disallow the assignment to exports
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-exports-assign.html
    'node/no-exports-assign': 'error',

    // Disallow new operators with calls to require
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-new-require.html
    'node/no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-path-concat.html
    'node/no-path-concat': 'error',

    // Disallow the use of process.env
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-process-env.html
    // Decision: too opinionated for general use; individual projects can enable this rule if desired
    'node/no-process-env': 'off',

    // Require require() to be called in the top-level module scope
    // https://oxc.rs/docs/guide/usage/linter/rules/node/global-require.html
    'node/global-require': 'error',

    // Disallow require calls to be mixed with regular variable declarations
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-mixed-requires.html
    'node/no-mixed-requires': 'error',

    // Disallow synchronous methods
    // https://oxc.rs/docs/guide/usage/linter/rules/node/no-sync.html
    // Decision: too restrictive for general use
    'node/no-sync': 'off',

    //eslint-plugin-n rules via jsPlugins

    // Disallow deprecated APIs
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md
    'n/no-deprecated-api': 'error',

    // Disallow bin files that npm ignores
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md
    'n/no-unpublished-bin': 'error',

    // Disallow import declarations which import private modules
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md
    'n/no-unpublished-import': 'error',

    // Disallow require() expressions which import private modules
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md
    'n/no-unpublished-require': 'error',

    // Disallow unsupported ECMAScript built-ins on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md
    'n/no-unsupported-features/es-builtins': 'error',

    // Disallow unsupported ECMAScript syntax on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
    'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],

    // Disallow unsupported Node.js built-in APIs on the specified version
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md
    'n/no-unsupported-features/node-builtins': 'error',

    // Make process.exit() expressions the same code path as throw
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md
    'n/process-exit-as-throw': 'error',

    // Disallow top-level await
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-top-level-await.md
    'n/no-top-level-await': ['error', { ignoreBin: true }],

    // Require return statements after callbacks
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md
    // Decision: handled by native node/callback-return
    'n/callback-return': 'off',

    // Enforce either module.exports or exports
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md
    'n/exports-style': 'error',

    // Require require() to be called in the top-level module scope
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md
    // Decision: handled by native node/global-require
    'n/global-require': 'off',

    // Disallow require calls to be mixed with regular variable declarations
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md
    // Decision: handled by native node/no-mixed-requires
    'n/no-mixed-requires': 'off',

    // Restrict usage of specified node imports
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md
    'n/no-restricted-import': 'error',

    // Restrict usage of specified node requires
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md
    'n/no-restricted-require': 'error',

    // Enforce the use of the global Buffer
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md
    'n/prefer-global/buffer': 'error',

    // Enforce the use of the global console
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/console.md
    'n/prefer-global/console': 'error',

    // Enforce the use of the global process
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md
    'n/prefer-global/process': 'error',

    // Enforce the use of the global TextDecoder
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-decoder.md
    'n/prefer-global/text-decoder': 'error',

    // Enforce the use of the global TextEncoder
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-encoder.md
    'n/prefer-global/text-encoder': 'error',

    // Enforce the use of the global URLSearchParams
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md
    'n/prefer-global/url-search-params': 'error',

    // Enforce the use of the global URL
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url.md
    'n/prefer-global/url': 'error',

    // Enforce using the promises API of dns
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/dns.md
    'n/prefer-promises/dns': 'error',

    // Enforce using the promises API of fs
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md
    'n/prefer-promises/fs': 'error',

    // Require correct usage of hashbang
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
    'n/hashbang': 'error',

    // Enforce using the node: protocol when importing Node.js builtins
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md
    'n/prefer-node-protocol': 'error',

    // Require error handling in callbacks
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md
    // Decision: handled by native node/handle-callback-err
    'n/handle-callback-err': 'off',

    // Disallow the assignment to exports
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md
    // Decision: handled by native node/no-exports-assign
    'n/no-exports-assign': 'off',

    // Disallow new operators with calls to require
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md
    // Decision: handled by native node/no-new-require
    'n/no-new-require': 'off',

    // Disallow string concatenation with __dirname and __filename
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md
    // Decision: handled by native node/no-path-concat
    'n/no-path-concat': 'off',

    // Enforce file extensions in import declarations
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md
    // Decision: handled by native import/extensions and import-x-js config
    'n/file-extension-in-import': 'off',

    // Disallow string callbacks in setTimeout/setInterval
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md
    'n/no-callback-literal': 'error',

    // Disallow import declarations which import extraneous modules
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md
    // Decision: handled by knip
    'n/no-extraneous-import': 'off',

    // Disallow require() expressions which import extraneous modules
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md
    // Decision: handled by knip
    'n/no-extraneous-require': 'off',

    // Disallow import declarations which import non-existent modules
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
    // Decision: requires resolver configuration unavailable in oxlint jsPlugin runtime
    'n/no-missing-import': 'off',

    // Disallow require() expressions which import non-existent modules
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md
    // Decision: requires resolver configuration unavailable in oxlint jsPlugin runtime
    'n/no-missing-require': 'off',

    // Disallow the use of process.env
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md
    // Decision: too restrictive for general use
    'n/no-process-env': 'off',

    // Disallow the use of process.exit()
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md
    'n/no-process-exit': 'error',

    // Disallow synchronous methods
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md
    // Decision: handled by native node/no-sync
    'n/no-sync': 'off',

    // Enforce the use of the global crypto
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/crypto.md
    'n/prefer-global/crypto': 'error',

    // Enforce the use of the global timers
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/timers.md
    'n/prefer-global/timers': 'error',

    // Disallow hiding core modules
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-hide-core-modules.md
    // Decision: deprecated rule
    'n/no-hide-core-modules': 'off',

    // Require correct usage of hashbang (alias)
    // https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/shebang.md
    // Decision: handled by n/hashbang (shebang is a deprecated alias)
    'n/shebang': 'off',
  },
};
