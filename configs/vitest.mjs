import { defineConfig } from 'oxlint';
import { vitestRules } from '../rules/vitest.mjs';

export default defineConfig({
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.vitest.ts',
        '**/*.vitest.tsx',
        '**/*.vitest.js',
        '**/*.vitest.jsx',
      ],
      plugins: vitestRules.plugins,
      jsPlugins: vitestRules.jsPlugins,
      rules: vitestRules.rules,
    },
  ],
});
