import { defineConfig } from 'oxlint';
import { reactA11yRules } from '../rules/react-a11y.mjs';
import { reactRules } from '../rules/react.mjs';

export default defineConfig({
  plugins: [...reactRules.plugins, ...reactA11yRules.plugins],
  jsPlugins: [...(reactRules.jsPlugins || [])],
  rules: {
    ...reactRules.rules,
    ...reactA11yRules.rules,
  },
});
