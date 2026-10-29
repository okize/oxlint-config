import { resolvePlugin } from '../resolve-plugin.mjs';

// All storybook rules loaded via jsPlugins (no native oxlint support).
export const storybookRules = {
  jsPlugins: [resolvePlugin('eslint-plugin-storybook')],
  rules: {
    // Interactions should be awaited
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/await-interactions.md
    'eslint-plugin-storybook/await-interactions': 'error',

    // Pass a context when invoking play function of another story
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/context-in-play-function.md
    'eslint-plugin-storybook/context-in-play-function': 'error',

    // The component property should be set
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/csf-component.md
    'eslint-plugin-storybook/csf-component': 'error',

    // Story files should have a default export
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/default-exports.md
    'eslint-plugin-storybook/default-exports': 'error',

    // Deprecated hierarchy separator in title property
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/hierarchy-separator.md
    'eslint-plugin-storybook/hierarchy-separator': 'error',

    // Meta should only have inline properties
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/meta-inline-properties.md
    'eslint-plugin-storybook/meta-inline-properties': 'error',

    // Meta should use satisfies operator for type safety
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/meta-satisfies-type.md
    'eslint-plugin-storybook/meta-satisfies-type': 'error',

    // A story should not have a redundant name property
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-redundant-story-name.md
    'eslint-plugin-storybook/no-redundant-story-name': 'error',

    // storiesOf is deprecated and should not be used
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-stories-of.md
    'eslint-plugin-storybook/no-stories-of': 'error',

    // Do not step out of the Storybook renderer package
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-renderer-packages.md
    'eslint-plugin-storybook/no-renderer-packages': 'error',

    // Disallow title property in meta (forces CSF3 auto-generated titles)
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-title-property-in-meta.md
    // Decision: explicit titles are a legitimate pattern
    'eslint-plugin-storybook/no-title-property-in-meta': 'off',

    // No uninstalled addons
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-uninstalled-addons.md
    'eslint-plugin-storybook/no-uninstalled-addons': 'error',

    // Stories should use PascalCase
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/prefer-pascal-case.md
    'eslint-plugin-storybook/prefer-pascal-case': 'error',

    // A story file must contain at least one story export
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/story-exports.md
    'eslint-plugin-storybook/story-exports': 'error',

    // Use @storybook/expect instead of plain expect
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-expect.md
    'eslint-plugin-storybook/use-storybook-expect': 'error',

    // Use @storybook/testing-library instead of plain testing-library
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-testing-library.md
    'eslint-plugin-storybook/use-storybook-testing-library': 'error',
  },
};
