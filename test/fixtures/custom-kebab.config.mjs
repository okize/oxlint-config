// Throwaway config exercising the `kebab` transform option of match-exported.
import { defineConfig } from 'oxlint';
import { customRules } from '../../rules/customRules.mjs';

export default defineConfig({
  jsPlugins: customRules.jsPlugins,
  rules: { 'custom/match-exported': ['error', { transform: 'kebab' }] },
});
