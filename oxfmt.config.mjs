import { defineConfig } from 'oxfmt';
import { oxfmtConfig } from './oxfmtConfig.mjs';

// Dogfood the config this package ships, adding repo-only ignores.
// Wired up via `oxfmt -c oxfmt.config.mjs` in the format scripts.
// oxlint-disable-next-line import-x/no-default-export
export default defineConfig({
  ...oxfmtConfig,
  ignorePatterns: [...oxfmtConfig.ignorePatterns, 'package.json', '.changeset/**'],
});
