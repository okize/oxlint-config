import { defineConfig } from 'oxlint';
import { styledComponentsRules } from '../rules/styledComponentsRules.mjs';

export default defineConfig({
  jsPlugins: styledComponentsRules.jsPlugins,
  rules: styledComponentsRules.rules,
});
