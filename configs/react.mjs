import { defineConfig } from 'oxlint';
import { reactA11yRules } from '../rules/reactA11yRules.mjs';
import { reactRules } from '../rules/reactRules.mjs';

export default defineConfig({
  plugins: [...reactRules.plugins, ...reactA11yRules.plugins],
  jsPlugins: [...(reactRules.jsPlugins || [])],
  rules: {
    ...reactRules.rules,
    ...reactA11yRules.rules,
  },
});
