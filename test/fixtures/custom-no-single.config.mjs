// Throwaway config that disables the single-named-export check
// (`matchSingleNamedExport: false`) while leaving default-export matching on.
// Exercises the escape hatch.
import { defineConfig } from 'oxlint';
import { customRules } from '../../rules/customRules.mjs';

export default defineConfig({
  jsPlugins: customRules.jsPlugins,
  rules: { 'custom/match-exported': ['error', { matchSingleNamedExport: false }] },
});
