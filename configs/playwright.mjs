import { defineConfig } from 'oxlint';
import { playwrightRules } from '../rules/playwrightRules.mjs';

export default defineConfig({
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/e2e/**/*.ts'],
      jsPlugins: playwrightRules.jsPlugins,
      rules: playwrightRules.rules,
    },
  ],
});
