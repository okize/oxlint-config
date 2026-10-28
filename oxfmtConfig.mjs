import { defineConfig } from 'oxfmt';

export const oxfmtConfig = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  singleAttributePerLine: true,
  sortImports: {
    groups: [
      'type-builtin',
      'type-external',
      ['type-internal', 'type-parent', 'type-sibling', 'type-index'],
      'value-builtin',
      'value-external',
      'value-internal',
      'value-index',
      ['value-parent', 'value-sibling'],
      'unknown',
    ],
    newlinesBetween: false,
  },
  ignorePatterns: ['node_modules/**', '.yarn/**'],
  sortPackageJson: false,
};

// oxlint-disable-next-line import-x/no-default-export
export default defineConfig(oxfmtConfig);
