import { defineConfig } from 'oxlint';
import { baseRules } from '../rules/baseRules.mjs';
import { customRules } from '../rules/customRules.mjs';
import { importRules } from '../rules/importRules.mjs';
import { promiseRules } from '../rules/promiseRules.mjs';
import { typescriptRules } from '../rules/typescriptRules.mjs';
import { unicornRules } from '../rules/unicornRules.mjs';

export default defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
  },
  plugins: [
    ...baseRules.plugins,
    ...importRules.plugins,
    ...promiseRules.plugins,
    ...typescriptRules.plugins,
  ],
  jsPlugins: [...(importRules.jsPlugins || []), ...(customRules.jsPlugins || [])],
  rules: {
    ...baseRules.rules,
    ...importRules.rules,
    ...promiseRules.rules,
    ...typescriptRules.rules,
    ...customRules.rules,
    ...unicornRules.rules,
  },
});
