import { defineConfig } from 'oxlint';
import { nodeRules } from '../rules/node.mjs';

export default defineConfig({
  overrides: [
    {
      files: ['**/*.mts', '**/*.mjs', '**/*.cjs'],
      plugins: nodeRules.plugins,
      jsPlugins: nodeRules.jsPlugins,
      rules: nodeRules.rules,
    },
  ],
});
