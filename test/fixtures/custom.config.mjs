// Throwaway config for the match-exported behavior test. Loads only the
// custom jsPlugin with default options (exact match, no transform).
import { defineConfig } from 'oxlint';
import { customRules } from '../../rules/customRules.mjs';

export default defineConfig({
  jsPlugins: customRules.jsPlugins,
  rules: customRules.rules,
});
