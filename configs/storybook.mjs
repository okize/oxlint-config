import { defineConfig } from 'oxlint';
import { customRules } from '../rules/customRules.mjs';
import { storybookRules } from '../rules/storybookRules.mjs';

export default defineConfig({
  overrides: [
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.stories.js', '**/*.stories.jsx'],
      jsPlugins: [...(storybookRules.jsPlugins || []), ...(customRules.jsPlugins || [])],
      rules: {
        ...storybookRules.rules,
        // Decision: stories always default-export an object named `meta`, so
        // the filename can never match the exported name.
        'custom/match-exported': 'off',
      },
    },
  ],
});
