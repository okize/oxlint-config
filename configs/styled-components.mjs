import { defineConfig } from 'oxlint';
import { styledComponentsRules } from '../rules/styled-components.mjs';

export default defineConfig({
  jsPlugins: styledComponentsRules.jsPlugins,
  rules: styledComponentsRules.rules,
});
