export const unicornRules = {
  plugins: ['unicorn'],
  rules: {
    // Enforce a consistent identifier name for catch clause errors
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/catch-error-name.html
    // Decision: too prescriptive about local variable naming
    'unicorn/catch-error-name': 'off',

    // Enforce passing a message argument to assert functions
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-assert.html
    'unicorn/consistent-assert': 'error',

    // Prefer `new Date(date)` over `new Date(date.getTime())` for cloning Date objects
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-date-clone.html
    'unicorn/consistent-date-clone': 'error',

    // Prefer consistent style for spreading empty arrays
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-empty-array-spread.html
    'unicorn/consistent-empty-array-spread': 'error',

    // Enforce consistent style of `index === -1` for non-existence and `index !== -1` for existence
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-existence-index-check.html
    'unicorn/consistent-existence-index-check': 'error',

    // Move function declarations to the highest possible scope
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-function-scoping.html
    // Decision: too noisy; flags functions that close over locals and would hurt readability if hoisted
    'unicorn/consistent-function-scoping': 'off',

    // Enforce consistent escape style in template literals
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-template-literal-escape.html
    'unicorn/consistent-template-literal-escape': 'error',

    // Enforce a specific structure for custom error classes
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/custom-error-definition.html
    // Decision: too prescriptive about Error subclass shape
    'unicorn/custom-error-definition': 'off',

    // Enforce no spaces between braces in empty blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.html
    // Decision: formatter territory
    'unicorn/empty-brace-spaces': 'off',

    // Enforce passing a `message` value when creating built-in errors
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/error-message.html
    'unicorn/error-message': 'error',

    // Require escape sequences to use uppercase or lowercase values
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/escape-case.html
    // Decision: formatter territory
    'unicorn/escape-case': 'off',

    // Enforce explicitly comparing `length` or `size` property of a value
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-length-check.html
    'unicorn/explicit-length-check': 'error',

    // Enforce explicit delay argument for `setTimeout()` and `setInterval()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-timer-delay.html
    'unicorn/explicit-timer-delay': 'error',

    // Enforce a case style for filenames
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/filename-case.html
    // Decision: project-specific; consumers enforce their own filename conventions
    'unicorn/filename-case': 'off',

    // Enforce specific import styles per module
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/import-style.html
    // Override built-in defaults: this rule ships preferring default imports
    // for `chalk`, `path`, and `node:path`. We require named imports instead.
    'unicorn/import-style': [
      'error',
      {
        styles: {
          'node:path': { named: true, default: false },
          path: { named: true, default: false },
          chalk: { named: true, default: false },
        },
      },
    ],

    // Limit the depth of nested calls
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/max-nested-calls.html
    'unicorn/max-nested-calls': ['error', { max: 3 }],

    // Require `new` when creating an object using a built-in constructor
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/new-for-builtins.html
    'unicorn/new-for-builtins': 'error',

    // Disallow blanket `eslint-disable` comments
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.html
    'unicorn/no-abusive-eslint-disable': 'error',

    // Disallow accessor properties that recursively call themselves
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-accessor-recursion.html
    'unicorn/no-accessor-recursion': 'error',

    // Disallow anonymous functions and classes as default exports
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html
    // Decision: anonymous default exports are a common pattern (React components, re-export shims)
    'unicorn/no-anonymous-default-export': 'off',

    // Prevent passing a function reference directly to iterator methods (subtle arity/index bugs)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-callback-reference.html
    'unicorn/no-array-callback-reference': 'error',

    // Disallow `Array#fill()` with a reference type, which shares one reference across all slots
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-fill-with-reference-type.html
    'unicorn/no-array-fill-with-reference-type': 'error',

    // Prefer `for...of` over `Array#forEach`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-for-each.html
    // Decision: `Array#forEach` is a legitimate iteration pattern
    'unicorn/no-array-for-each': 'off',

    // Disallow using the `this` argument in array methods
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-method-this-argument.html
    'unicorn/no-array-method-this-argument': 'error',

    // Disallow `Array#reduce()` and `Array#reduceRight()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reduce.html
    // Decision: `reduce` is a legitimate functional pattern
    'unicorn/no-array-reduce': 'off',

    // Disallow in-place `Array#reverse()` (use `Array#toReversed()`)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reverse.html
    'unicorn/no-array-reverse': 'error',

    // Disallow in-place `Array#sort()` (use `Array#toSorted()`)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-sort.html
    'unicorn/no-array-sort': 'error',

    // Disallow member access from `await` expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-expression-member.html
    'unicorn/no-await-expression-member': 'error',

    // Disallow using await in Promise.all/race/etc. array arguments
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-in-promise-methods.html
    'unicorn/no-await-in-promise-methods': 'error',

    // Disallow confusing uses of `Array#with()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-confusing-array-with.html
    'unicorn/no-confusing-array-with': 'error',

    // Do not use leading/trailing space between `console.log` parameters
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-console-spaces.html
    // Decision: formatter territory
    'unicorn/no-console-spaces': 'off',

    // Disallow direct use of `document.cookie`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-document-cookie.html
    'unicorn/no-document-cookie': 'error',

    // Disallow empty files
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-empty-file.html
    'unicorn/no-empty-file': 'error',

    // Enforce the use of Unicode escapes instead of hexadecimal escapes
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-hex-escape.html
    // Decision: formatter territory
    'unicorn/no-hex-escape': 'off',

    // Disallow `if` statements that always mutate the same variable
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-immediate-mutation.html
    'unicorn/no-immediate-mutation': 'error',

    // Disallow `instanceof Array` (use `Array.isArray`)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-array.html
    'unicorn/no-instanceof-array': 'error',

    // Disallow `instanceof` with built-in classes that have safer alternatives
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-builtins.html
    'unicorn/no-instanceof-builtins': 'error',

    // Disallow invalid options in fetch() calls
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-fetch-options.html
    'unicorn/no-invalid-fetch-options': 'error',

    // Disallow invalid removeEventListener arguments
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-remove-event-listener.html
    'unicorn/no-invalid-remove-event-listener': 'error',

    // Disallow passing `length` as the `end` argument of `Array#slice()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.html
    'unicorn/no-length-as-slice-end': 'error',

    // Disallow `if` statements as the only statement in `if` blocks without `else`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-lonely-if.html
    // Decision: stylistic; nested `if` sometimes reads better than `else if`
    'unicorn/no-lonely-if': 'off',

    // Disallow a magic number as the `depth` argument in `Array#flat()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.html
    'unicorn/no-magic-array-flat-depth': 'error',

    // Disallow negated conditions
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negated-condition.html
    // Decision: stylistic; negated conditions are sometimes clearer
    'unicorn/no-negated-condition': 'off',

    // Disallow negated expressions on the left of equality checks
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.html
    'unicorn/no-negation-in-equality-check': 'error',

    // Disallow nested ternary expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-nested-ternary.html
    // Decision: stylistic; formatter handles readability
    'unicorn/no-nested-ternary': 'off',

    // Disallow new Array() (use Array.from or [...] instead)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-array.html
    'unicorn/no-new-array': 'error',

    // Disallow `new Buffer()` (deprecated in Node.js)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-buffer.html
    'unicorn/no-new-buffer': 'error',

    // Disallow the use of the `null` literal
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-null.html
    // Decision: null is widely used in JSON, DOM APIs, and library returns; banning is impractical
    'unicorn/no-null': 'off',

    // Disallow the use of objects as default parameters
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.html
    'unicorn/no-object-as-default-parameter': 'error',

    // Disallow `process.exit()` (use throw)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-process-exit.html
    // Decision: handled by n/no-process-exit which already enforces this with appropriate exemptions
    'unicorn/no-process-exit': 'off',

    // Disallow passing single-element arrays to Promise.all/race/etc.
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.html
    'unicorn/no-single-promise-in-promise-methods': 'error',

    // Disallow classes that only have static members
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-static-only-class.html
    'unicorn/no-static-only-class': 'error',

    // Disallow thenable objects (confuses await/Promise behavior)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-thenable.html
    'unicorn/no-thenable': 'error',

    // Disallow assigning `this` to a variable
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-this-assignment.html
    'unicorn/no-this-assignment': 'error',

    // Disallow comparing with `typeof x === "undefined"`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.html
    // Decision: stylistic; both forms are commonly used
    'unicorn/no-typeof-undefined': 'off',

    // Disallow unnecessary `depth` argument to `Array#flat()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-flat-depth.html
    'unicorn/no-unnecessary-array-flat-depth': 'error',

    // Disallow unnecessary `count` argument to `Array#splice()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-splice-count.html
    'unicorn/no-unnecessary-array-splice-count': 'error',

    // Disallow unnecessary await on non-Promise values
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html
    'unicorn/no-unnecessary-await': 'error',

    // Disallow unnecessary `end` argument to `String#slice()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-slice-end.html
    'unicorn/no-unnecessary-slice-end': 'error',

    // Disallow unreadable array destructuring
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.html
    // Decision: stylistic
    'unicorn/no-unreadable-array-destructuring': 'off',

    // Disallow unreadable IIFEs
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-iife.html
    // Decision: stylistic
    'unicorn/no-unreadable-iife': 'off',

    // Disallow passing single-element collections to functions accepting iterables
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-collection-argument.html
    'unicorn/no-useless-collection-argument': 'error',

    // Disallow unnecessary `Error.captureStackTrace(...)` calls
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-error-capture-stack-trace.html
    'unicorn/no-useless-error-capture-stack-trace': 'error',

    // Disallow useless fallback in spread (e.g. ...obj || {})
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.html
    'unicorn/no-useless-fallback-in-spread': 'error',

    // Disallow useless conversion of iterable to array
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-iterator-to-array.html
    'unicorn/no-useless-iterator-to-array': 'error',

    // Disallow useless length checks before array operations
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-length-check.html
    'unicorn/no-useless-length-check': 'error',

    // Disallow returning/yielding `Promise.resolve` / `Promise.reject` in async functions
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-promise-resolve-reject.html
    // Decision: conflicts with `typescript/require-await`. The rule's fix (drop `Promise.resolve`,
    // return the raw value) leaves an `async` function with no `await`, which `require-await`
    // then flags. Picking `require-await` — async-without-await is a meaningful invariant,
    // while this rule is purely cosmetic.
    'unicorn/no-useless-promise-resolve-reject': 'off',

    // Disallow useless spread operators
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-spread.html
    'unicorn/no-useless-spread': 'error',

    // Disallow useless `case` in `switch` statements
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.html
    // Decision: an empty `case` listed alongside `default` documents that the
    // value is a known, expected input rather than an unhandled fallthrough,
    // which is useful for exhaustive switches over discriminated unions.
    'unicorn/no-useless-switch-case': 'off',

    // Disallow explicit `undefined` arguments and default parameter values
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-undefined.html
    // Decision: stylistic; explicit `undefined` is sometimes clearer at call sites
    'unicorn/no-useless-undefined': 'off',

    // Disallow number literals with zero fractions or dangling dots
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-zero-fractions.html
    // Decision: formatter territory
    'unicorn/no-zero-fractions': 'off',

    // Enforce consistent case for number literal prefixes and suffixes
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/number-literal-case.html
    // Decision: formatter territory
    'unicorn/number-literal-case': 'off',

    // Enforce a style for numeric separators
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/numeric-separators-style.html
    // Decision: formatter territory
    'unicorn/numeric-separators-style': 'off',

    // Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.html
    'unicorn/prefer-add-event-listener': 'error',

    // Prefer `Array#find()` and `Array#findLast()` over the first/last element from `.filter()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-find.html
    'unicorn/prefer-array-find': 'error',

    // Prefer `Array#flat()` over legacy techniques
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat.html
    'unicorn/prefer-array-flat': 'error',

    // Prefer `.flatMap(…)` over `.map(…).flat()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.html
    'unicorn/prefer-array-flat-map': 'error',

    // Prefer `Array#indexOf()` over `Array#findIndex()` for primitive equality
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-index-of.html
    'unicorn/prefer-array-index-of': 'error',

    // Prefer `.some(…)` over `.find(…)`/`.findIndex(…)`/etc. for boolean checks
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-some.html
    'unicorn/prefer-array-some': 'error',

    // Prefer `.at(…)` for index access
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-at.html
    'unicorn/prefer-at': 'error',

    // Prefer BigInt literals over `BigInt()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-bigint-literals.html
    'unicorn/prefer-bigint-literals': 'error',

    // Prefer `Blob#text()` / `Blob#bytes()` over `FileReader#readAs*`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.html
    'unicorn/prefer-blob-reading-methods': 'error',

    // Prefer class field declarations over assigning in the constructor
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-class-fields.html
    'unicorn/prefer-class-fields': 'error',

    // Prefer `.classList.toggle()` over manual class toggling
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-classlist-toggle.html
    'unicorn/prefer-classlist-toggle': 'error',

    // Prefer `String#codePointAt(…)` over `String#charCodeAt(…)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-code-point.html
    'unicorn/prefer-code-point': 'error',

    // Prefer `Date.now()` over `new Date().getTime()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-date-now.html
    'unicorn/prefer-date-now': 'error',

    // Prefer default parameters over reassignment
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-default-parameters.html
    'unicorn/prefer-default-parameters': 'error',

    // Prefer `Node#append()` over `Node#appendChild()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.html
    'unicorn/prefer-dom-node-append': 'error',

    // Prefer using `.dataset` on DOM nodes over `.setAttribute(…)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.html
    'unicorn/prefer-dom-node-dataset': 'error',

    // Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.html
    'unicorn/prefer-dom-node-remove': 'error',

    // Prefer `.textContent` over `.innerText`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.html
    'unicorn/prefer-dom-node-text-content': 'error',

    // Prefer `EventTarget` over `EventEmitter`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-event-target.html
    // Decision: EventTarget vs EventEmitter is architectural; let consumers choose
    'unicorn/prefer-event-target': 'off',

    // Prefer `export ... from` over importing then exporting in two steps
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-export-from.html
    'unicorn/prefer-export-from': 'error',

    // Prefer `globalThis` over `window` / `self` / `global`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-global-this.html
    // Decision: we should consider enabling this in the future but it will involve a lot of refactoring
    'unicorn/prefer-global-this': 'off',

    // Prefer `import.meta.{dirname,filename}` over CJS-equivalent constructions
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-import-meta-properties.html
    'unicorn/prefer-import-meta-properties': 'error',

    // Prefer `.includes(…)` over `.indexOf(…) !== -1`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-includes.html
    'unicorn/prefer-includes': 'error',

    // Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-keyboard-event-key.html
    'unicorn/prefer-keyboard-event-key': 'error',

    // Prefer logical operators (`||`/`??`) over ternaries for fallbacks
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-logical-operator-over-ternary.html
    'unicorn/prefer-logical-operator-over-ternary': 'error',

    // Prefer `Math.min()` / `Math.max()` over ternary expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-min-max.html
    'unicorn/prefer-math-min-max': 'error',

    // Prefer `Math.trunc(…)` over bitwise integer truncation
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.html
    'unicorn/prefer-math-trunc': 'error',

    // Prefer modern DOM APIs (e.g. `Element#replaceWith()`)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.html
    'unicorn/prefer-modern-dom-apis': 'error',

    // Prefer modern `Math` methods (e.g. `Math.log2`, `Math.cbrt`, …)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-math-apis.html
    'unicorn/prefer-modern-math-apis': 'error',

    // Prefer ESM over CommonJS
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-module.html
    // Decision: consumers may still ship CommonJS; let them opt in via their own config
    'unicorn/prefer-module': 'off',

    // Prefer native coercion functions (e.g. `Boolean(value)` over `!!value`)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-native-coercion-functions.html
    'unicorn/prefer-native-coercion-functions': 'error',

    // Prefer negative index over `.length - x` in `.slice()` and `.at()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-negative-index.html
    'unicorn/prefer-negative-index': 'error',

    // Prefer using the `node:` protocol when importing Node.js builtins
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.html
    'unicorn/prefer-node-protocol': 'error',

    // Prefer `Number()` over `parseFloat()` and base-10 `parseInt()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-coercion.html
    'unicorn/prefer-number-coercion': 'error',

    // Prefer `Number.parseInt()` / `Number.parseFloat()` / `Number.isNaN()` over their global counterparts
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-properties.html
    'unicorn/prefer-number-properties': 'error',

    // Prefer `Object.fromEntries(…)` over building objects via `.reduce(…)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-object-from-entries.html
    'unicorn/prefer-object-from-entries': 'error',

    // Prefer omitting the catch binding parameter when unused
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.html
    'unicorn/prefer-optional-catch-binding': 'error',

    // Prefer borrowing methods from the prototype instead of an instance
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.html
    'unicorn/prefer-prototype-methods': 'error',

    // Prefer `.querySelector(…)` over `.getElementById(…)` / `.getElementsByClassName(…)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-query-selector.html
    // Decision: `getElementById` is the standard fast path; not worth refactoring away
    'unicorn/prefer-query-selector': 'off',

    // Prefer `Reflect.apply(…)` over `Function.prototype.apply.call(…)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-reflect-apply.html
    'unicorn/prefer-reflect-apply': 'error',

    // Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()` for booleans
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.html
    'unicorn/prefer-regexp-test': 'error',

    // Prefer `Response.json(…)` over `new Response(JSON.stringify(…))`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-response-static-json.html
    'unicorn/prefer-response-static-json': 'error',

    // Prefer `Set#has(…)` over `Array#includes(…)` when membership checks repeat
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-has.html
    'unicorn/prefer-set-has': 'error',

    // Prefer Set#size over converting to array and checking length
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-size.html
    'unicorn/prefer-set-size': 'error',

    // Prefer a single call over consecutive identical method calls (e.g. repeated `Array#push`)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-single-call.html
    'unicorn/prefer-single-call': 'error',

    // Prefer the spread operator over `Array.from(…)` etc.
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-spread.html
    'unicorn/prefer-spread': 'error',

    // Prefer `String.raw(…)` over manually escaped strings
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-raw.html
    // Decision: `String.raw` is niche and easy to misread
    'unicorn/prefer-string-raw': 'off',

    // Prefer `String#replaceAll(…)` over global regex replace
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.html
    'unicorn/prefer-string-replace-all': 'error',

    // Prefer `String#slice(…)` over deprecated `substr`/`substring`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-slice.html
    'unicorn/prefer-string-slice': 'error',

    // Prefer String#startsWith/endsWith over regex or slice comparisons
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html
    'unicorn/prefer-string-starts-ends-with': 'error',

    // Prefer `String#trimStart()`/`trimEnd()` over deprecated `trimLeft()`/`trimRight()`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.html
    'unicorn/prefer-string-trim-start-end': 'error',

    // Prefer `structuredClone(…)` over `JSON.parse(JSON.stringify(…))`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.html
    'unicorn/prefer-structured-clone': 'error',

    // Prefer ternary expressions over short `if-else` returns/assignments
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-ternary.html
    // Decision: stylistic; clarity over compactness
    'unicorn/prefer-ternary': 'off',

    // Prefer top-level `await` over wrapping module entrypoints in async IIFEs
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-top-level-await.html
    // Decision: not all consumer modules support TLA; opt-in per consumer
    'unicorn/prefer-top-level-await': 'off',

    // Enforce `throw new TypeError(…)` for type-related errors
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-type-error.html
    'unicorn/prefer-type-error': 'error',

    // Enforce a consistent style for `./` prefixes in relative URLs
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/relative-url-style.html
    // Decision: stylistic; both forms are widely used
    'unicorn/relative-url-style': 'off',

    // Require explicit separator argument for `Array#join(…)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-array-join-separator.html
    // Decision: the default `,` separator is widely understood; explicit argument is noise
    'unicorn/require-array-join-separator': 'off',

    // Require import attributes for non-JS module imports (JSON modules etc.)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-attributes.html
    'unicorn/require-module-attributes': 'error',

    // Require one module specifier per `import` declaration
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-specifiers.html
    'unicorn/require-module-specifiers': 'error',

    // Require explicit `digits` argument for `Number#toFixed(…)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.html
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    // Require explicit `targetOrigin` for `window.postMessage(…)`
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-post-message-target-origin.html
    'unicorn/require-post-message-target-origin': 'error',

    // Enforce consistent brace style for switch cases
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/switch-case-braces.html
    // Decision: formatter territory
    'unicorn/switch-case-braces': 'off',

    // Enforce consistent break position in switch cases
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/switch-case-break-position.html
    // Decision: formatter territory
    'unicorn/switch-case-break-position': 'off',

    // Enforce consistent case for text encoding identifiers (e.g. `'utf-8'` vs `'utf8'`)
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/text-encoding-identifier-case.html
    // Decision: both spellings are universally accepted by APIs
    'unicorn/text-encoding-identifier-case': 'off',

    // Require `new` when throwing built-in errors
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/throw-new-error.html
    'unicorn/throw-new-error': 'error',
  },
};
