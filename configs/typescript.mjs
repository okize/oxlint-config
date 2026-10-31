import { defineConfig } from 'oxlint';
import { barrelFilesRules } from '../rules/barrel-files.mjs';
import { baseRules } from '../rules/base.mjs';
import { importRules } from '../rules/import.mjs';
import { promiseRules } from '../rules/promise.mjs';
import { typescriptRules } from '../rules/typescript.mjs';
import { unicornRules } from '../rules/unicorn.mjs';

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
  jsPlugins: [...(importRules.jsPlugins || []), ...(barrelFilesRules.jsPlugins || [])],
  rules: {
    ...baseRules.rules,
    ...importRules.rules,
    ...promiseRules.rules,
    ...typescriptRules.rules,
    ...barrelFilesRules.rules,
    ...unicornRules.rules,
  },
});
