import { defineConfig } from 'oxlint';
import { storybookRules } from '../rules/storybook.mjs';

export default defineConfig({
  overrides: [
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.stories.js', '**/*.stories.jsx'],
      jsPlugins: [...(storybookRules.jsPlugins || [])],
      rules: {
        ...storybookRules.rules,
      },
    },
  ],
});
