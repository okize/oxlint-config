export const promiseRules = {
  plugins: ['promise'],
  rules: {
    // Enforces the use of catch() on un-returned promises
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/catch-or-return.html
    'promise/catch-or-return': 'error',

    // Avoid wrapping values in Promise.resolve or Promise.reject when not needed
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-wrap.html
    'promise/no-return-wrap': 'error',

    // Enforce consistent param names and ordering when creating new promises
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/param-names.html
    'promise/param-names': 'error',

    // Return inside each then() to create readable and reusable Promise chains
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/always-return.html
    'promise/always-return': 'error',

    // Avoid nested then() or catch() statements
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-nesting.html
    'promise/no-nesting': 'error',

    // Avoid using promises inside of callbacks
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-promise-in-callback.html
    'promise/no-promise-in-callback': 'error',

    // Avoid calling cb() inside of a then()
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-callback-in-promise.html
    'promise/no-callback-in-promise': 'error',

    // Avoid creating new promises outside of utility libs
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/avoid-new.html
    'promise/avoid-new': 'error',

    // Avoid calling new on a Promise static method
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-new-statics.html
    'promise/no-new-statics': 'error',

    // Disallow return statements in finally()
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-in-finally.html
    'promise/no-return-in-finally': 'error',

    // Ensures the proper number of arguments are passed to Promise functions
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/valid-params.html
    'promise/valid-params': 'error',

    // Disallow creating new promises with paths that resolve multiple times
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/no-multiple-resolved.html
    'promise/no-multiple-resolved': 'error',

    // Prefer catch to then(a, b)/then(null, b) for handling errors
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-catch.html
    'promise/prefer-catch': 'error',

    // Prefer await to then()/catch()/finally() for reading Promise values
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html
    // Decision: too opinionated for general use
    'promise/prefer-await-to-then': 'off',

    // Prefer async/await to the callback pattern
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-callbacks.html
    // Decision: too opinionated for general use
    'promise/prefer-await-to-callbacks': 'off',

    // Disallow use of non-standard Promise static methods
    // https://oxc.rs/docs/guide/usage/linter/rules/promise/spec-only.html
    'promise/spec-only': 'error',
  },
};
