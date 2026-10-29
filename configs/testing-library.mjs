import { defineConfig } from 'oxlint';
import { testingLibraryRules } from '../rules/testing-library.mjs';

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
      jsPlugins: testingLibraryRules.jsPlugins,
      rules: testingLibraryRules.rules,
    },
  ],
});
