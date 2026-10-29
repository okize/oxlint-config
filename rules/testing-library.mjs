import { resolvePlugin } from '../resolve-plugin.mjs';

// All testing-library + jest-dom rules loaded via jsPlugins (no native oxlint support).
export const testingLibraryRules = {
  jsPlugins: [
    resolvePlugin('eslint-plugin-testing-library'),
    resolvePlugin('eslint-plugin-jest-dom'),
  ],
  rules: {
    // Enforce async events to be awaited
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-events.md
    'eslint-plugin-testing-library/await-async-events': 'error',

    // Enforce async queries to be awaited
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-queries.md
    'eslint-plugin-testing-library/await-async-queries': 'error',

    // Enforce async utils to be awaited
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
    'eslint-plugin-testing-library/await-async-utils': 'error',

    // Enforce consistent data-testid usage
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
    'eslint-plugin-testing-library/consistent-data-testid': [
      'error',
      { testIdPattern: '.*', testIdAttribute: ['data-testid'] },
    ],

    // Disallow awaiting sync events
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md
    'eslint-plugin-testing-library/no-await-sync-events': [
      'error',
      { eventModules: ['fire-event'] },
    ],

    // Disallow awaiting sync queries
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-queries.md
    'eslint-plugin-testing-library/no-await-sync-queries': 'error',

    // Disallow the use of container methods
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
    'eslint-plugin-testing-library/no-container': 'error',

    // Disallow the use of debugging utilities
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
    'eslint-plugin-testing-library/no-debugging-utils': 'error',

    // Disallow importing from DOM Testing Library
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
    'eslint-plugin-testing-library/no-dom-import': 'error',

    // Disallow the use of the global RegExp flag in queries
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-global-regexp-flag-in-query.md
    'eslint-plugin-testing-library/no-global-regexp-flag-in-query': 'error',

    // Disallow the use of cleanup
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
    'eslint-plugin-testing-library/no-manual-cleanup': 'error',

    // Disallow direct Node access
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
    'eslint-plugin-testing-library/no-node-access': 'error',

    // Disallow the use of promises passed to a fireEvent method
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
    'eslint-plugin-testing-library/no-promise-in-fire-event': 'error',

    // Disallow the use of render in testing frameworks setup files
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-lifecycle.md
    'eslint-plugin-testing-library/no-render-in-lifecycle': 'error',

    // Disallow the use of data-testid queries
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-test-id-queries.md
    'eslint-plugin-testing-library/no-test-id-queries': 'error',

    // Disallow unnecessary act wrapping
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
    'eslint-plugin-testing-library/no-unnecessary-act': 'error',

    // Disallow the use of multiple expect inside waitFor
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
    'eslint-plugin-testing-library/no-wait-for-multiple-assertions': 'error',

    // Disallow the use of side effects in waitFor
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
    'eslint-plugin-testing-library/no-wait-for-side-effects': 'error',

    // Disallow the use of snapshot inside waitFor
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
    'eslint-plugin-testing-library/no-wait-for-snapshot': 'error',

    // Suggest using explicit assertions rather than standalone queries
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
    'eslint-plugin-testing-library/prefer-explicit-assert': 'error',

    // Suggest using find* queries instead of waitFor + get* queries
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
    'eslint-plugin-testing-library/prefer-find-by': 'error',

    // Prefer implicit assertions from getBy* queries over explicit ones
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-implicit-assert.md
    // Decision: conflicts with explicit jest-dom assertions
    'eslint-plugin-testing-library/prefer-implicit-assert': 'off',

    // Ensure appropriate get*/query* queries are used with their respective matchers
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
    'eslint-plugin-testing-library/prefer-presence-queries': 'error',

    // Suggest using queryBy* queries when waiting for disappearance
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
    'eslint-plugin-testing-library/prefer-query-by-disappearance': 'error',

    // Ensure the configured get*/query* query is used with the corresponding matchers
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-matchers.md
    'eslint-plugin-testing-library/prefer-query-matchers': 'error',

    // Suggest using screen while querying
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
    'eslint-plugin-testing-library/prefer-screen-queries': 'error',

    // Suggest using userEvent over fireEvent
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
    'eslint-plugin-testing-library/prefer-user-event': 'error',

    // Suggest using userEvent.setup
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event-setup.md
    'eslint-plugin-testing-library/prefer-user-event-setup': 'error',

    // Enforce a valid naming for return value of render
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
    'eslint-plugin-testing-library/render-result-naming-convention': 'error',

    // Prefer toBeChecked over checking attributes
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md
    'eslint-plugin-jest-dom/prefer-checked': 'error',

    // Prefer toBeEmptyDOMElement over checking innerHTML
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md
    'eslint-plugin-jest-dom/prefer-empty': 'error',

    // Prefer toBeEnabled/toBeDisabled over checking attributes
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md
    'eslint-plugin-jest-dom/prefer-enabled-disabled': 'error',

    // Prefer toHaveFocus over checking document.activeElement
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md
    'eslint-plugin-jest-dom/prefer-focus': 'error',

    // Prefer toBeInTheDocument over checking for null/truthy
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md
    'eslint-plugin-jest-dom/prefer-in-document': 'error',

    // Prefer toBeRequired over checking attributes
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
    'eslint-plugin-jest-dom/prefer-required': 'error',

    // Prefer toHaveAttribute over checking getAttribute
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md
    'eslint-plugin-jest-dom/prefer-to-have-attribute': 'error',

    // Prefer toHaveClass over checking className
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
    'eslint-plugin-jest-dom/prefer-to-have-class': 'error',

    // Prefer toHaveStyle over checking style attribute
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
    'eslint-plugin-jest-dom/prefer-to-have-style': 'error',

    // Prefer toHaveTextContent over checking textContent
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
    'eslint-plugin-jest-dom/prefer-to-have-text-content': 'error',

    // Prefer toHaveValue over checking value property
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
    'eslint-plugin-jest-dom/prefer-to-have-value': 'error',
  },
};
