// Throwaway config exercising the `matchCallExpression` and `replacePattern`
// keys of the options object.
import { defineConfig } from 'oxlint';
import { customRules } from '../../rules/customRules.mjs';

export default defineConfig({
  jsPlugins: customRules.jsPlugins,
  rules: {
    'custom/match-exported': ['error', { matchCallExpression: true, replacePattern: '\\.styles$' }],
  },
});
