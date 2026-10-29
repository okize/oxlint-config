import { resolvePlugin } from '../resolve-plugin.mjs';

// All barrel-files rules loaded via jsPlugins (no native oxlint support).
// see: https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7/
export const barrelFilesRules = {
  jsPlugins: [resolvePlugin('eslint-plugin-barrel-files')],
  rules: {
    // Avoid barrel files
    // https://github.com/thepassle/eslint-plugin-barrel-files/blob/main/docs/rules/avoid-barrel-files.md
    // Decision: too opinionated for general use
    'eslint-plugin-barrel-files/avoid-barrel-files': 'off',

    // Avoid importing barrel files
    // https://github.com/thepassle/eslint-plugin-barrel-files/blob/main/docs/rules/avoid-importing-barrel-files.md
    // Decision: too opinionated for general use
    'eslint-plugin-barrel-files/avoid-importing-barrel-files': 'off',

    // Avoid namespace imports from barrel files
    // https://github.com/thepassle/eslint-plugin-barrel-files/blob/main/docs/rules/avoid-namespace-import.md
    'eslint-plugin-barrel-files/avoid-namespace-import': 'error',

    // Avoid re-export all from barrel files
    // https://github.com/thepassle/eslint-plugin-barrel-files/blob/main/docs/rules/avoid-re-export-all.md
    'eslint-plugin-barrel-files/avoid-re-export-all': 'error',
  },
};
