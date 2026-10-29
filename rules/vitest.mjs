import { resolvePlugin } from '../resolve-plugin.mjs';

// Native oxlint vitest rules + jsPlugin rules from @vitest/eslint-plugin and eslint-plugin-no-only-tests
export const vitestRules = {
  plugins: ['vitest'],
  jsPlugins: [
    { name: 'vitest-js', specifier: resolvePlugin('@vitest/eslint-plugin') },
    resolvePlugin('eslint-plugin-no-only-tests'),
  ],
  rules: {
    // Require .test test file pattern
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-test-filename.html
    'vitest/consistent-test-filename': 'error',

    // Enforce consistent usage of each with for...of
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-each-for.html
    'vitest/consistent-each-for': 'error',

    // Enforce consistent usage of vi vs vitest
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-vitest-vi.html
    'vitest/consistent-vitest-vi': 'error',

    // Ensure hoisted APIs (vi.mock, vi.hoisted, etc.) are at the top
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/hoisted-apis-on-top.html
    'vitest/hoisted-apis-on-top': 'error',

    // Disallow conditional tests
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-tests.html
    'vitest/no-conditional-tests': 'error',

    // Disallow importing node:test
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-import-node-test.html
    'vitest/no-import-node-test': 'error',

    // Enforce padding around afterAll blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/padding-around-after-all-blocks.html
    'vitest/padding-around-after-all-blocks': 'error',

    // Disallow conditional tests
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-in-test.html
    'vitest/no-conditional-in-test': 'error',

    // Prefer toHaveBeenCalledOnce() over toHaveBeenCalledTimes(1)
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-once.html
    // Decision: conflicts with prefer-called-times (vitest plugin), which is enabled
    'vitest/prefer-called-once': 'off',

    // Prefer toHaveBeenCalledTimes over multiple assertions
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-times.html
    'vitest/prefer-called-times': 'error',

    // Enforce describe titles to match function names
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-describe-function-title.html
    'vitest/prefer-describe-function-title': 'error',

    // Prefer expect.typeOf() usage
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-type-of.html
    'vitest/prefer-expect-type-of': 'error',

    // Prefer vi.importActual/vi.importMock in vi.mock factories
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-import-in-mock.html
    'vitest/prefer-import-in-mock': 'error',

    // Prefer strict boolean matchers (toBe(true) over toBeTruthy())
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-strict-boolean-matchers.html
    'vitest/prefer-strict-boolean-matchers': 'error',

    // Suggest using toBeFalsy()
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.html
    // Decision: not necessary to be prescriptive here
    'vitest/prefer-to-be-falsy': 'off',

    // Prefer toBeObject()
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-object.html
    'vitest/prefer-to-be-object': 'error',

    // Suggest using toBeTruthy
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.html
    // Decision: not necessary to be prescriptive here
    'vitest/prefer-to-be-truthy': 'off',

    // Require type parameters on mock function calls
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-mock-type-parameters.html
    'vitest/require-mock-type-parameters': 'error',

    // Require awaited expect.poll() calls
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-awaited-expect-poll.html
    'vitest/require-awaited-expect-poll': 'error',

    // Require local Test Context for concurrent snapshot tests
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-local-test-context-for-concurrent-snapshots.html
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',

    // Warn on test.todo() usage
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/warn-todo.html
    'vitest/warn-todo': 'error',

    // Disallow the use of certain vi methods
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-restricted-vi-methods.html
    'vitest/no-restricted-vi-methods': 'error',

    // Prefer toHaveBeenCalledExactlyOnceWith over manual assertions
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-exactly-once-with.html
    'vitest/prefer-called-exactly-once-with': 'error',

    // Prefer importing vitest globals
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-importing-vitest-globals.html
    'vitest/prefer-importing-vitest-globals': 'error',

    // Prefer snapshot hint for inline/external snapshots
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-snapshot-hint.html
    'vitest/prefer-snapshot-hint': 'error',

    // Disallow importing vitest globals
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-importing-vitest-globals.html
    // Decision: prefer-importing-vitest-globals is already enabled, which serves opposite purpose
    'vitest/no-importing-vitest-globals': 'off',

    // Suggest using expect.assertions
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-assertions.html
    // Decision: too strict for general use, matching vitest-js/prefer-expect-assertions
    'vitest/prefer-expect-assertions': 'off',

    // Prefer toHaveBeenCalledTimes over multiple assertions
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-have-been-called-times.html
    'vitest/prefer-to-have-been-called-times': 'error',

    // Require test timeout
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-test-timeout.html
    // Decision: too strict for general use, matching vitest-js/require-test-timeout
    'vitest/require-test-timeout': 'off',

    // Enforce valid expect in promise
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-expect-in-promise.html
    // Decision: too strict for general use, matching vitest-js/valid-expect-in-promise
    'vitest/valid-expect-in-promise': 'off',

    // Prefer test or it but not both
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-test-it.html
    'vitest/consistent-test-it': 'error',

    // Enforce having expectation in test body
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/expect-expect.html
    'vitest/expect-expect': 'error',

    // Enforce a maximum number of expect per test
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/max-expects.html
    'vitest/max-expects': ['error', { max: 15 }],

    // Nested describe block should be less than set max value or default value
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/max-nested-describe.html
    'vitest/max-nested-describe': 'error',

    // Disallow alias methods
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-alias-methods.html
    'vitest/no-alias-methods': 'error',

    // Disallow commented out tests
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-commented-out-tests.html
    'vitest/no-commented-out-tests': 'error',

    // Disallow conditional expects
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-expect.html
    'vitest/no-conditional-expect': 'error',

    // Disallow disabled tests
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-disabled-tests.html
    // Decision: it is often useful to be allowed to add a .skip
    'vitest/no-disabled-tests': 'off',

    // Disallow duplicate hooks and teardown hooks
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-duplicate-hooks.html
    'vitest/no-duplicate-hooks': 'error',

    // Disallow focused tests
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-focused-tests.html
    'vitest/no-focused-tests': 'error',

    // Disallow setup and teardown hooks
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-hooks.html
    // Decision: too opinionated for general use
    'vitest/no-hooks': 'off',

    // Disallow identical titles
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-identical-title.html
    'vitest/no-identical-title': 'error',

    // Disallow string interpolation in snapshots
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-interpolation-in-snapshots.html
    'vitest/no-interpolation-in-snapshots': 'error',

    // Disallow large snapshots
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-large-snapshots.html
    'vitest/no-large-snapshots': ['error', { maxSize: 500 }],

    // Disallow importing from mocks directory
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-mocks-import.html
    'vitest/no-mocks-import': 'error',

    // Disallow the use of certain matchers
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-restricted-matchers.html
    'vitest/no-restricted-matchers': 'error',

    // Disallow using expect outside of it or test blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-standalone-expect.html
    'vitest/no-standalone-expect': 'error',

    // Disallow using test as a prefix
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-test-prefixes.html
    'vitest/no-test-prefixes': 'error',

    // Disallow return statements in tests
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-test-return-statement.html
    'vitest/no-test-return-statement': 'error',

    // Disallow unnecessary async in expect functions
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-unneeded-async-expect-function.html
    'vitest/no-unneeded-async-expect-function': 'error',

    // Suggest using toBeCalledWith() or toHaveBeenCalledWith()
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-with.html
    'vitest/prefer-called-with': 'error',

    // Suggest using the built-in comparison matchers
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-comparison-matcher.html
    'vitest/prefer-comparison-matcher': 'error',

    // Prefer each rather than manual loops
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-each.html
    'vitest/prefer-each': 'error',

    // Suggest using the built-in equality matchers
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-equality-matcher.html
    'vitest/prefer-equality-matcher': 'error',

    // Suggest using expect().resolves over expect(await ...) syntax
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-resolves.html
    'vitest/prefer-expect-resolves': 'error',

    // Prefer having hooks in consistent order
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-hooks-in-order.html
    'vitest/prefer-hooks-in-order': 'error',

    // Suggest having hooks before any test cases
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-hooks-on-top.html
    'vitest/prefer-hooks-on-top': 'error',

    // Enforce lowercase titles
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-lowercase-title.html
    // Decision: too opinionated for general use
    'vitest/prefer-lowercase-title': 'off',

    // Prefer mock resolved/rejected shorthands for promises
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-mock-promise-shorthand.html
    'vitest/prefer-mock-promise-shorthand': 'error',

    // Prefer mock return shorthands
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-mock-return-shorthand.html
    'vitest/prefer-mock-return-shorthand': 'error',

    // Suggest using vi.spyOn
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-spy-on.html
    'vitest/prefer-spy-on': 'error',

    // Prefer strict equal over equal
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-strict-equal.html
    'vitest/prefer-strict-equal': 'error',

    // Suggest using toBe()
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be.html
    'vitest/prefer-to-be': 'error',

    // Prefer using toContain()
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-contain.html
    'vitest/prefer-to-contain': 'error',

    // Suggest using toHaveLength()
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-have-length.html
    'vitest/prefer-to-have-length': 'error',

    // Suggest using test.todo
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-todo.html
    'vitest/prefer-todo': 'error',

    // Require setup and teardown to be within a hook
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-hook.html
    'vitest/require-hook': 'error',

    // Require toThrow() to be called with an error message
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-to-throw-message.html
    'vitest/require-to-throw-message': 'error',

    // Enforce that all tests are in a top-level describe
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-top-level-describe.html
    'vitest/require-top-level-describe': 'error',

    // Enforce valid describe callback
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-describe-callback.html
    'vitest/valid-describe-callback': 'error',

    // Enforce valid expect() usage
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-expect.html
    'vitest/valid-expect': 'error',

    // Enforce valid titles
    // https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-title.html
    // Decision: `allowArguments` avoids conflict with `prefer-describe-function-title` rule, which is enabled
    'vitest/valid-title': ['error', { allowArguments: true }],

    //rules via jsPlugins (@vitest/eslint-plugin + no-only-tests)

    // Disallow .only tests
    // https://github.com/levibuzolic/eslint-plugin-no-only-tests
    'eslint-plugin-no-only-tests/no-only-tests': 'error',

    // Disallow the use of certain vi methods
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
    // Decision: handled by native vitest/no-restricted-vi-methods
    'vitest-js/no-restricted-vi-methods': 'off',

    // Prefer toHaveBeenCalledExactlyOnceWith over manual assertions
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-exactly-once-with.md
    // Decision: handled by native vitest/prefer-called-exactly-once-with
    'vitest-js/prefer-called-exactly-once-with': 'off',

    // Prefer importing vitest globals
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-importing-vitest-globals.md
    // Decision: handled by native vitest/prefer-importing-vitest-globals
    'vitest-js/prefer-importing-vitest-globals': 'off',

    // Prefer snapshot hint for inline/external snapshots
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
    // Decision: handled by native vitest/prefer-snapshot-hint
    'vitest-js/prefer-snapshot-hint': 'off',

    // Enforce padding around afterAll blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-after-all-blocks.md
    // Decision: handled by native vitest/padding-around-after-all-blocks
    'vitest-js/padding-around-after-all-blocks': 'off',

    // Enforce padding around afterEach blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-after-each-blocks.md
    'vitest-js/padding-around-after-each-blocks': 'error',

    // Enforce padding around beforeAll blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-before-all-blocks.md
    'vitest-js/padding-around-before-all-blocks': 'error',

    // Enforce padding around beforeEach blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-before-each-blocks.md
    'vitest-js/padding-around-before-each-blocks': 'error',

    // Enforce padding around expect groups
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-expect-groups.md
    'vitest-js/padding-around-expect-groups': 'error',

    // Enforce padding around describe blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-describe-blocks.md
    'vitest-js/padding-around-describe-blocks': 'error',

    // Enforce consistent usage of each with for...of
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-each-for.md
    // Decision: handled by native vitest/consistent-each-for
    'vitest-js/consistent-each-for': 'off',

    // Require .test test file pattern
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
    // Decision: handled by native vitest/consistent-test-filename
    'vitest-js/consistent-test-filename': 'off',

    // Prefer test or it but not both
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
    // Decision: handled by native vitest/consistent-test-it
    'vitest-js/consistent-test-it': 'off',

    // Enforce consistent usage of vi vs vitest
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-vitest-vi.md
    // Decision: handled by native vitest/consistent-vitest-vi
    'vitest-js/consistent-vitest-vi': 'off',

    // Enforce having expectation in test body
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
    // Decision: handled by native vitest/expect-expect
    'vitest-js/expect-expect': 'off',

    // Ensure hoisted APIs (vi.mock, vi.hoisted, etc.) are at the top
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/hoisted-apis-on-top.md
    // Decision: handled by native vitest/hoisted-apis-on-top
    'vitest-js/hoisted-apis-on-top': 'off',

    // Enforce a maximum number of expect per test
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
    // Decision: handled by native vitest/max-expects
    'vitest-js/max-expects': 'off',

    // Nested describe block should be less than set max value or default value
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
    // Decision: handled by native vitest/max-nested-describe
    'vitest-js/max-nested-describe': 'off',

    // Disallow alias methods
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
    // Decision: handled by native vitest/no-alias-methods
    'vitest-js/no-alias-methods': 'off',

    // Disallow commented out tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
    // Decision: handled by native vitest/no-commented-out-tests
    'vitest-js/no-commented-out-tests': 'off',

    // Disallow conditional expects
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
    // Decision: handled by native vitest/no-conditional-expect
    'vitest-js/no-conditional-expect': 'off',

    // Disallow conditional tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
    // Decision: handled by native vitest/no-conditional-in-test
    'vitest-js/no-conditional-in-test': 'off',

    // Disallow conditional tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
    // Decision: handled by native vitest/no-conditional-tests
    'vitest-js/no-conditional-tests': 'off',

    // Disallow disabled tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
    // Decision: handled by native vitest/no-disabled-tests
    'vitest-js/no-disabled-tests': 'off',

    // Disallow done callbacks in tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md
    'vitest-js/no-done-callback': 'error',

    // Disallow duplicate hooks and teardown hooks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
    // Decision: handled by native vitest/no-duplicate-hooks
    'vitest-js/no-duplicate-hooks': 'off',

    // Disallow focused tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
    // Decision: handled by native vitest/no-focused-tests
    'vitest-js/no-focused-tests': 'off',

    // Disallow setup and teardown hooks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
    // Decision: handled by native vitest/no-hooks
    'vitest-js/no-hooks': 'off',

    // Disallow identical titles
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
    // Decision: handled by native vitest/no-identical-title
    'vitest-js/no-identical-title': 'off',

    // Disallow importing node:test
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
    // Decision: handled by native vitest/no-import-node-test
    'vitest-js/no-import-node-test': 'off',

    // Disallow importing vitest globals
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-importing-vitest-globals.md
    // Decision: handled by native vitest/no-importing-vitest-globals
    'vitest-js/no-importing-vitest-globals': 'off',

    // Disallow string interpolation in snapshots
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
    // Decision: handled by native vitest/no-interpolation-in-snapshots
    'vitest-js/no-interpolation-in-snapshots': 'off',

    // Disallow large snapshots
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
    // Decision: handled by native vitest/no-large-snapshots
    'vitest-js/no-large-snapshots': 'off',

    // Disallow importing from mocks directory
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
    // Decision: handled by native vitest/no-mocks-import
    'vitest-js/no-mocks-import': 'off',

    // Disallow the use of certain matchers
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
    // Decision: handled by native vitest/no-restricted-matchers
    'vitest-js/no-restricted-matchers': 'off',

    // Disallow using expect outside of it or test blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
    // Decision: handled by native vitest/no-standalone-expect
    'vitest-js/no-standalone-expect': 'off',

    // Disallow using test as a prefix
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
    // Decision: handled by native vitest/no-test-prefixes
    'vitest-js/no-test-prefixes': 'off',

    // Disallow return statements in tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
    // Decision: handled by native vitest/no-test-return-statement
    'vitest-js/no-test-return-statement': 'off',

    // Disallow unnecessary async in expect functions
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-unneeded-async-expect-function.md
    // Decision: handled by native vitest/no-unneeded-async-expect-function
    'vitest-js/no-unneeded-async-expect-function': 'off',

    // Enforce padding around all blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-all.md
    // Decision: redundant with individual padding rules configured above
    'vitest-js/padding-around-all': 'off',

    // Enforce padding around test blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-test-blocks.md
    'vitest-js/padding-around-test-blocks': 'error',

    // Prefer toHaveBeenCalledOnce() over toHaveBeenCalledTimes(1)
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-once.md
    // Decision: handled by native vitest/prefer-called-once
    'vitest-js/prefer-called-once': 'off',

    // Prefer toHaveBeenCalledTimes over multiple assertions
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-times.md
    // Decision: handled by native vitest/prefer-called-times
    'vitest-js/prefer-called-times': 'off',

    // Suggest using toBeCalledWith() or toHaveBeenCalledWith()
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
    // Decision: handled by native vitest/prefer-called-with
    'vitest-js/prefer-called-with': 'off',

    // Suggest using the built-in comparison matchers
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
    // Decision: handled by native vitest/prefer-comparison-matcher
    'vitest-js/prefer-comparison-matcher': 'off',

    // Enforce describe titles to match function names
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-describe-function-title.md
    // Decision: handled by native vitest/prefer-describe-function-title
    'vitest-js/prefer-describe-function-title': 'off',

    // Prefer each rather than manual loops
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
    // Decision: handled by native vitest/prefer-each
    'vitest-js/prefer-each': 'off',

    // Suggest using the built-in equality matchers
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
    // Decision: handled by native vitest/prefer-equality-matcher
    'vitest-js/prefer-equality-matcher': 'off',

    // Suggest using expect.assertions
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
    // Decision: too strict for general use
    'vitest-js/prefer-expect-assertions': 'off',

    // Suggest using expect().resolves over expect(await ...) syntax
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
    // Decision: handled by native vitest/prefer-expect-resolves
    'vitest-js/prefer-expect-resolves': 'off',

    // Prefer expect.typeOf() usage
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-type-of.md
    // Decision: handled by native vitest/prefer-expect-type-of
    'vitest-js/prefer-expect-type-of': 'off',

    // Prefer having hooks in consistent order
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
    // Decision: handled by native vitest/prefer-hooks-in-order
    'vitest-js/prefer-hooks-in-order': 'off',

    // Suggest having hooks before any test cases
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
    // Decision: handled by native vitest/prefer-hooks-on-top
    'vitest-js/prefer-hooks-on-top': 'off',

    // Prefer vi.importActual/vi.importMock in vi.mock factories
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-import-in-mock.md
    // Decision: handled by native vitest/prefer-import-in-mock
    'vitest-js/prefer-import-in-mock': 'off',

    // Enforce lowercase titles
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
    // Decision: handled by native vitest/prefer-lowercase-title
    'vitest-js/prefer-lowercase-title': 'off',

    // Prefer mock resolved/rejected shorthands for promises
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
    // Decision: handled by native vitest/prefer-mock-promise-shorthand
    'vitest-js/prefer-mock-promise-shorthand': 'off',

    // Suggest using vi.spyOn
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
    // Decision: handled by native vitest/prefer-spy-on
    'vitest-js/prefer-spy-on': 'off',

    // Prefer strict boolean matchers (toBe(true) over toBeTruthy())
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-boolean-matchers.md
    // Decision: handled by native vitest/prefer-strict-boolean-matchers
    'vitest-js/prefer-strict-boolean-matchers': 'off',

    // Prefer strict equal over equal
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
    // Decision: handled by native vitest/prefer-strict-equal
    'vitest-js/prefer-strict-equal': 'off',

    // Suggest using toBe()
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
    // Decision: handled by native vitest/prefer-to-be
    'vitest-js/prefer-to-be': 'off',

    // Suggest using toBeFalsy()
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
    // Decision: handled by native vitest/prefer-to-be-falsy
    'vitest-js/prefer-to-be-falsy': 'off',

    // Prefer toBeObject()
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
    // Decision: handled by native vitest/prefer-to-be-object
    'vitest-js/prefer-to-be-object': 'off',

    // Suggest using toBeTruthy
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
    // Decision: handled by native vitest/prefer-to-be-truthy
    'vitest-js/prefer-to-be-truthy': 'off',

    // Prefer using toContain()
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
    // Decision: handled by native vitest/prefer-to-contain
    'vitest-js/prefer-to-contain': 'off',

    // Prefer toHaveBeenCalledTimes over multiple assertions
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-been-called-times.md
    // Decision: handled by native vitest/prefer-called-times
    'vitest-js/prefer-to-have-been-called-times': 'off',

    // Suggest using toHaveLength()
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
    // Decision: handled by native vitest/prefer-to-have-length
    'vitest-js/prefer-to-have-length': 'off',

    // Suggest using test.todo
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
    // Decision: handled by native vitest/prefer-todo
    'vitest-js/prefer-todo': 'off',

    // Prefer vi.mocked() over type casting
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-vi-mocked.md
    'vitest-js/prefer-vi-mocked': 'error',

    // Require awaited expect.poll() calls
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-awaited-expect-poll.md
    // Decision: handled by native vitest/require-awaited-expect-poll
    'vitest-js/require-awaited-expect-poll': 'off',

    // Require setup and teardown to be within a hook
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
    // Decision: handled by native vitest/require-hook
    'vitest-js/require-hook': 'off',

    // Require local Test Context for concurrent snapshot tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
    // Decision: handled by native vitest/require-local-test-context-for-concurrent-snapshots
    'vitest-js/require-local-test-context-for-concurrent-snapshots': 'off',

    // Require type parameters on mock function calls
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-mock-type-parameters.md
    // Decision: handled by native vitest/require-mock-type-parameters
    'vitest-js/require-mock-type-parameters': 'off',

    // Require test timeout
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-test-timeout.md
    // Decision: too strict for general use
    'vitest-js/require-test-timeout': 'off',

    // Require toThrow() to be called with an error message
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
    // Decision: handled by native vitest/require-to-throw-message
    'vitest-js/require-to-throw-message': 'off',

    // Enforce that all tests are in a top-level describe
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
    // Decision: handled by native vitest/require-top-level-describe
    'vitest-js/require-top-level-describe': 'off',

    // Enforce unbound methods are called with their expected scope
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md
    // Decision: requires type information that jsPlugins may not have access to
    'vitest-js/unbound-method': 'off',

    // Enforce valid describe callback
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
    // Decision: handled by native vitest/valid-describe-callback
    'vitest-js/valid-describe-callback': 'off',

    // Enforce valid expect() usage
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
    // Decision: handled by native vitest/valid-expect
    'vitest-js/valid-expect': 'off',

    // Enforce valid expect in promise
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect-in-promise.md
    // Decision: too strict for general use
    'vitest-js/valid-expect-in-promise': 'off',

    // Enforce valid titles
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
    // Decision: handled by native vitest/valid-title
    'vitest-js/valid-title': 'off',

    // Prefer mockReturnValue() over mockImplementation() returning a value
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-return-shorthand.md
    // Decision: handled by native vitest/prefer-mock-return-shorthand
    'vitest-js/prefer-mock-return-shorthand': 'off',

    // Report todo tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/warn-todo.md
    // Decision: handled by native vitest/warn-todo
    'vitest-js/warn-todo': 'off',
  },
};
