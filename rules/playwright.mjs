import { resolvePlugin } from '../resolve-plugin.mjs';

// All playwright rules loaded via jsPlugins (no native oxlint support).
export const playwrightRules = {
  jsPlugins: [resolvePlugin('eslint-plugin-playwright')],
  rules: {
    // Disallow focused tests
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-focused-test.md
    'eslint-plugin-playwright/no-focused-test': 'error',

    // Enforce having expectation in test body
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/expect-expect.md
    'eslint-plugin-playwright/expect-expect': 'error',

    // Enforce awaiting Playwright-specific methods
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/missing-playwright-await.md
    'eslint-plugin-playwright/missing-playwright-await': 'error',

    // Enforce maximum depth of nested describe blocks
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/max-nested-describe.md
    'eslint-plugin-playwright/max-nested-describe': 'error',

    // Disallow conditional expects
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-conditional-expect.md
    'eslint-plugin-playwright/no-conditional-expect': 'error',

    // Disallow conditional tests
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-conditional-in-test.md
    'eslint-plugin-playwright/no-conditional-in-test': 'error',

    // Disallow commented out tests
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-commented-out-tests.md
    'eslint-plugin-playwright/no-commented-out-tests': 'error',

    // Disallow duplicate hooks
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-duplicate-hooks.md
    'eslint-plugin-playwright/no-duplicate-hooks': 'error',

    // Disallow usage of ElementHandle
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-element-handle.md
    'eslint-plugin-playwright/no-element-handle': 'error',

    // Disallow usage of page.$eval and page.$$eval
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-eval.md
    'eslint-plugin-playwright/no-eval': 'error',

    // Disallow force option usage
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-force-option.md
    'eslint-plugin-playwright/no-force-option': 'error',

    // Disallow getByTitle locator
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-get-by-title.md
    'eslint-plugin-playwright/no-get-by-title': 'error',

    // Disallow nested steps
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-nested-step.md
    'eslint-plugin-playwright/no-nested-step': 'error',

    // Disallow networkidle option
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-networkidle.md
    'eslint-plugin-playwright/no-networkidle': 'error',

    // Disallow page.pause()
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-page-pause.md
    'eslint-plugin-playwright/no-page-pause': 'error',

    // Disallow raw locators
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-raw-locators.md
    'eslint-plugin-playwright/no-raw-locators': 'error',

    // Disallow standalone expects
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-standalone-expect.md
    'eslint-plugin-playwright/no-standalone-expect': 'error',

    // Disallow unsafe references in event handlers
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-unsafe-references.md
    'eslint-plugin-playwright/no-unsafe-references': 'error',

    // Disallow unused locators
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-unused-locators.md
    'eslint-plugin-playwright/no-unused-locators': 'error',

    // Disallow useless awaits
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-useless-await.md
    'eslint-plugin-playwright/no-useless-await': 'error',

    // Disallow useless not assertions
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-useless-not.md
    'eslint-plugin-playwright/no-useless-not': 'error',

    // Disallow waitForNavigation
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-navigation.md
    'eslint-plugin-playwright/no-wait-for-navigation': 'error',

    // Disallow waitForSelector
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-selector.md
    'eslint-plugin-playwright/no-wait-for-selector': 'error',

    // Disallow waitForTimeout
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-timeout.md
    'eslint-plugin-playwright/no-wait-for-timeout': 'error',

    // Prefer native locators
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-native-locators.md
    'eslint-plugin-playwright/prefer-native-locators': 'error',

    // Prefer web-first assertions
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-web-first-assertions.md
    'eslint-plugin-playwright/prefer-web-first-assertions': 'error',

    // Require setup and teardown to be within a hook
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-hook.md
    'eslint-plugin-playwright/require-hook': 'error',

    // Enforce valid describe callback
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-describe-callback.md
    'eslint-plugin-playwright/valid-describe-callback': 'error',

    // Enforce valid expect usage
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-expect.md
    'eslint-plugin-playwright/valid-expect': 'error',

    // Enforce valid titles
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-title.md
    'eslint-plugin-playwright/valid-title': 'error',

    // Enforce maximum expect calls
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/max-expects.md
    'eslint-plugin-playwright/max-expects': 'error',

    // Enforce valid expect in promise
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-expect-in-promise.md
    'eslint-plugin-playwright/valid-expect-in-promise': 'error',

    // Enforce all tests in a top-level describe
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-top-level-describe.md
    'eslint-plugin-playwright/require-top-level-describe': 'error',

    // Enforce valid test tags
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-test-tags.md
    'eslint-plugin-playwright/valid-test-tags': 'error',

    // Disallow slowed tests
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-slowed-test.md
    'eslint-plugin-playwright/no-slowed-test': 'error',

    // Disallow nth methods
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-nth-methods.md
    'eslint-plugin-playwright/no-nth-methods': 'error',

    // Prefer comparison matcher
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-comparison-matcher.md
    'eslint-plugin-playwright/prefer-comparison-matcher': 'error',

    // Prefer equality matcher
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-equality-matcher.md
    'eslint-plugin-playwright/prefer-equality-matcher': 'error',

    // Prefer hooks in order
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-hooks-in-order.md
    'eslint-plugin-playwright/prefer-hooks-in-order': 'error',

    // Prefer hooks on top
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-hooks-on-top.md
    'eslint-plugin-playwright/prefer-hooks-on-top': 'error',

    // Prefer locator
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-locator.md
    'eslint-plugin-playwright/prefer-locator': 'error',

    // Prefer strict equal
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-strict-equal.md
    'eslint-plugin-playwright/prefer-strict-equal': 'error',

    // Prefer toBe
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-be.md
    'eslint-plugin-playwright/prefer-to-be': 'error',

    // Prefer toContain
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-contain.md
    'eslint-plugin-playwright/prefer-to-contain': 'error',

    // Prefer toHaveCount
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-count.md
    'eslint-plugin-playwright/prefer-to-have-count': 'error',

    // Prefer toHaveLength
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-length.md
    'eslint-plugin-playwright/prefer-to-have-length': 'error',

    // Require toThrow message
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-to-throw-message.md
    'eslint-plugin-playwright/require-to-throw-message': 'error',

    // Disallow duplicate slow() annotations
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-duplicate-slow.md
    'eslint-plugin-playwright/no-duplicate-slow': 'error',

    // Enforce blank lines between test blocks
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/consistent-spacing-between-blocks.md
    // Decision: style preference, left to a formatter
    'eslint-plugin-playwright/consistent-spacing-between-blocks': 'off',

    // Disallow setup and teardown hooks
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-hooks.md
    // Decision: too strict for general use
    'eslint-plugin-playwright/no-hooks': 'off',

    // Disallow configured locators
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-restricted-locators.md
    // Decision: no-op without project-specific options
    'eslint-plugin-playwright/no-restricted-locators': 'off',

    // Disallow configured matchers
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-restricted-matchers.md
    // Decision: no-op without project-specific options
    'eslint-plugin-playwright/no-restricted-matchers': 'off',

    // Disallow configured ARIA roles in locators
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-restricted-roles.md
    // Decision: no-op without project-specific options
    'eslint-plugin-playwright/no-restricted-roles': 'off',

    // Disallow skipped tests
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-skipped-test.md
    // Decision: skipping tests is legitimate, matching vitest/no-disabled-tests
    'eslint-plugin-playwright/no-skipped-test': 'off',

    // Enforce lowercase titles
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
    // Decision: too opinionated for general use, matching vitest/prefer-lowercase-title
    'eslint-plugin-playwright/prefer-lowercase-title': 'off',

    // Require soft assertions
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-soft-assertions.md
    // Decision: too strict for general use
    'eslint-plugin-playwright/require-soft-assertions': 'off',

    // Require tags on all tests
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-tags.md
    // Decision: too strict for general use
    'eslint-plugin-playwright/require-tags': 'off',

    // Require explicit timeout on toPass()
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-to-pass-timeout.md
    // Decision: too strict for general use, matching vitest/require-test-timeout
    'eslint-plugin-playwright/require-to-pass-timeout': 'off',
  },
};
