import { fileURLToPath } from 'node:url';

// `customRules` configures this package's custom local jsPlugin (plugins/custom.mjs),
// which holds rules that have no native oxlint or loadable-ESLint-plugin
// equivalent. The plugin path is resolved to an absolute path so it loads both
// in this repo and from a consumer's node_modules.
//
// `custom/match-exported` began as a port of `match-exported` from the abandoned
// eslint-plugin-filenames (it ships its rules in a legacy format oxlint cannot
// load). It also checks a file's lone named export, and its options are one
// object instead of upstream's positional options — see plugins/custom.mjs.
// The upstream `match-regex` and `no-index` rules are intentionally not
// implemented — @wistia/eslint-config disables both.
const customPlugin = fileURLToPath(new URL('../plugins/custom.mjs', import.meta.url));

export const customRules = {
  jsPlugins: [customPlugin],
  rules: {
    // Match Exported Values
    // https://github.com/selaux/eslint-plugin-filenames#matching-exported-values-match-exported
    'custom/match-exported': 'error',
  },
};
