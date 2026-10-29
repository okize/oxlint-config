export const typescriptRules = {
  plugins: ['typescript'],
  rules: {
    // Override base id-length to disable checking generic type parameters.
    // ESLint's id-length never sees TS type params (they're not in the ESLint AST),
    // but oxlint has native TS support so it checks them. Setting checkGeneric to
    // false restores parity with ESLint's behavior.
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-length.html
    'eslint/id-length': [
      'error',
      {
        min: 2,
        exceptions: ['_', 'i', 'j', 'x', 'y'],
        checkGeneric: false,
      },
    ],

    // This is redundant with TypeScript's noUnusedLocals/noUnusedParameters compiler options
    // Decision: handled by TypeScript noUnusedLocals/noUnusedParameters
    'eslint/no-unused-vars': 'off',

    // Disallow assignments that are never used
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-assignment.html
    // Decision: handled by TypeScript noUnusedLocals
    'eslint/no-useless-assignment': 'off',

    // Recommended to be disabled for TypeScript projects
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    // Decision: handled by TypeScript
    'eslint/no-undef': 'off',

    // Override base no-void to allow void as a statement (common in TS for fire-and-forget promises)
    'eslint/no-void': ['error', { allowAsStatement: true }],

    // Superseded by `typescript/require-await` below
    // Decision: handled by typescript/require-await
    'eslint/require-await': 'off',

    // Const enum values can shift when keys are added/removed; prefer a type union of string literals.
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-const-enum.html
    'oxc/no-const-enum': 'error',

    // Require that function overload signatures be consecutive
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/adjacent-overload-signatures.html
    'typescript/adjacent-overload-signatures': 'error',

    // Require consistently using either T[] or Array<T> for arrays
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/array-type.html
    'typescript/array-type': 'error',

    // Disallow awaiting a value that is not a Thenable
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/await-thenable.html
    'typescript/await-thenable': 'error',

    // Disallow @ts-<directive> comments or require descriptions after directives
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html
    'typescript/ban-ts-comment': 'error',

    // Disallow // tslint:<rule-flag> comments
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-tslint-comment.html
    'typescript/ban-tslint-comment': 'error',

    // Enforce that literals on classes are exposed in a consistent style
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/class-literal-property-style.html
    'typescript/class-literal-property-style': 'error',

    // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-generic-constructors.html
    'typescript/consistent-generic-constructors': 'error',

    // Require or disallow the Record type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-indexed-object-style.html
    'typescript/consistent-indexed-object-style': 'error',

    // Require return statements to either always or never specify values
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-return.html
    'typescript/consistent-return': 'error',

    // Enforce consistent usage of type assertions
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-assertions.html
    'typescript/consistent-type-assertions': 'error',

    // Enforce type definitions to consistently use either interface or type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-definitions.html
    // Decision: prefer type to interface for consistency
    'typescript/consistent-type-definitions': ['error', 'type'],

    // Enforce consistent usage of type exports
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-exports.html
    'typescript/consistent-type-exports': 'error',

    // Enforce consistent usage of type imports
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-imports.html
    'typescript/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
        fixStyle: 'separate-type-imports',
      },
    ],

    // Enforce dot notation whenever possible
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/dot-notation.html
    'typescript/dot-notation': 'error',

    // Require explicit accessibility modifiers on class properties and methods
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-module-boundary-types.html
    'typescript/explicit-module-boundary-types': 'error',

    // Enforce using a particular method signature syntax
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/method-signature-style.html
    'typescript/method-signature-style': 'error',

    // Disallow using the delete operator on array values
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-array-delete.html
    'typescript/no-array-delete': 'error',

    // Require .toString() to only be called on objects which provide useful information
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-base-to-string.html
    'typescript/no-base-to-string': 'error',

    // Disallow non-null assertion in locations that may be confusing
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.html
    'typescript/no-confusing-non-null-assertion': 'error',

    // Require expressions of type void to appear in statement position
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-void-expression.html
    'typescript/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],

    // Disallow using code marked as @deprecated
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-deprecated.html
    'typescript/no-deprecated': 'error',

    // Disallow duplicate enum member values
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.html
    'typescript/no-duplicate-enum-values': 'error',

    // Disallow duplicate constituents of union or intersection types
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-type-constituents.html
    'typescript/no-duplicate-type-constituents': 'error',

    // Disallow using the delete operator on computed key expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-dynamic-delete.html
    'typescript/no-dynamic-delete': 'error',

    // Disallow accidentally using the "empty object" type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-object-type.html
    'typescript/no-empty-object-type': 'error',

    // Disallow the any type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-explicit-any.html
    'typescript/no-explicit-any': 'error',

    // Disallow extra non-null assertions
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.html
    'typescript/no-extra-non-null-assertion': 'error',

    // Disallow classes used as namespaces
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html
    'typescript/no-extraneous-class': 'error',

    // Require Promise-like statements to be handled appropriately
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-floating-promises.html
    'typescript/no-floating-promises': 'error',

    // Disallow iterating over an array with a for-in loop
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-for-in-array.html
    'typescript/no-for-in-array': 'error',

    // Disallow the use of eval()-like methods
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-implied-eval.html
    'typescript/no-implied-eval': 'error',

    // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-import-type-side-effects.html
    'typescript/no-import-type-side-effects': 'error',

    // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-inferrable-types.html
    'typescript/no-inferrable-types': 'error',

    // Disallow void type outside of generic or return types
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-invalid-void-type.html
    'typescript/no-invalid-void-type': 'error',

    // Disallow the void operator except when used to discard a value
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-meaningless-void-operator.html
    'typescript/no-meaningless-void-operator': 'error',

    // Enforce valid definition of new and constructor
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-new.html
    'typescript/no-misused-new': 'error',

    // Disallow Promises in places not designed to handle them
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-promises.html
    'typescript/no-misused-promises': 'error',

    // Disallow using the spread operator when it might cause unexpected behavior
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-spread.html
    'typescript/no-misused-spread': 'error',

    // Disallow enums from having both number and string members
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-mixed-enums.html
    'typescript/no-mixed-enums': 'error',

    // Disallow TypeScript namespaces
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-namespace.html
    'typescript/no-namespace': 'error',

    // Disallow non-null assertions in the left operand of a nullish coalescing operator
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.html
    'typescript/no-non-null-asserted-nullish-coalescing': 'error',

    // Disallow non-null assertions after an optional chain expression
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.html
    'typescript/no-non-null-asserted-optional-chain': 'error',

    // Disallow non-null assertions using the ! postfix operator
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-assertion.html
    'typescript/no-non-null-assertion': 'error',

    // Disallow members of unions and intersections that do nothing or override type information
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-redundant-type-constituents.html
    'typescript/no-redundant-type-constituents': 'error',

    // Disallow invocation of require()
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-require-imports.html
    'typescript/no-require-imports': 'error',

    // Disallow certain types
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-restricted-types.html
    'typescript/no-restricted-types': 'error',

    // Disallow aliasing this
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-this-alias.html
    'typescript/no-this-alias': 'error',

    // Disallow unnecessary equality comparisons against boolean literals
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare.html
    'typescript/no-unnecessary-boolean-literal-compare': 'error',

    // Disallow conditionals where the type is always truthy or always falsy
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-condition.html
    'typescript/no-unnecessary-condition': 'error',

    // Disallow unnecessary assignment of constructor property parameter
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-parameter-property-assignment.html
    'typescript/no-unnecessary-parameter-property-assignment': 'error',

    // Disallow unnecessary namespace qualifiers
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-qualifier.html
    'typescript/no-unnecessary-qualifier': 'error',

    // Disallow unnecessary template expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-template-expression.html
    'typescript/no-unnecessary-template-expression': 'error',

    // Disallow type arguments that are equal to the default
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-arguments.html
    'typescript/no-unnecessary-type-arguments': 'error',

    // Disallow type assertions that do not change the type of an expression
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-assertion.html
    'typescript/no-unnecessary-type-assertion': 'error',

    // Disallow unnecessary constraints on generic types
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html
    'typescript/no-unnecessary-type-constraint': 'error',

    // Disallow conversion idioms when they do not change the type or value of the expression
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-conversion.html
    'typescript/no-unnecessary-type-conversion': 'error',

    // Disallow type parameters that only appear once
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-parameters.html
    'typescript/no-unnecessary-type-parameters': 'error',

    // Disallow calling a function with a value with type any
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-argument.html
    'typescript/no-unsafe-argument': 'error',

    // Disallow assigning a value with type any to variables and properties
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-assignment.html
    'typescript/no-unsafe-assignment': 'error',

    // Disallow calling a value with type any
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-call.html
    'typescript/no-unsafe-call': 'error',

    // Disallow unsafe declaration merging
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.html
    'typescript/no-unsafe-declaration-merging': 'error',

    // Disallow comparing an enum value with a non-enum value
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-enum-comparison.html
    'typescript/no-unsafe-enum-comparison': 'error',

    // Disallow using the unsafe built-in Function type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.html
    'typescript/no-unsafe-function-type': 'error',

    // Disallow member access on a value with type any
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-member-access.html
    'typescript/no-unsafe-member-access': 'error',

    // Disallow returning a value with type any from a function
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-return.html
    'typescript/no-unsafe-return': 'error',

    // Disallow type assertions that narrow a type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-type-assertion.html
    'typescript/no-unsafe-type-assertion': 'error',

    // Require unary negation to take a number
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-unary-minus.html
    'typescript/no-unsafe-unary-minus': 'error',

    // Disallow useless default assignments in parameter destructuring
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-default-assignment.html
    'typescript/no-useless-default-assignment': 'error',

    // Disallow empty exports that don't change anything in a module file
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-empty-export.html
    'typescript/no-useless-empty-export': 'error',

    // Disallow using confusing built-in primitive class wrappers
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-wrapper-object-types.html
    'typescript/no-wrapper-object-types': 'error',

    // Enforce non-null assertions over explicit type casts
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/non-nullable-type-assertion-style.html
    // Decision: disabled because it conflicts with `no-non-null-assertion` — this rule's autofix
    // rewrites `value as T` to `value!`, which `no-non-null-assertion` then rejects
    'typescript/non-nullable-type-assertion-style': 'off',

    // Disallow throwing non-Error values as exceptions
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/only-throw-error.html
    'typescript/only-throw-error': 'error',

    // Require or disallow parameter properties in class constructors
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/parameter-properties.html
    'typescript/parameter-properties': 'error',

    // Enforce the use of as const over literal type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-as-const.html
    'typescript/prefer-as-const': 'error',

    // Require each enum member value to be explicitly initialized
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.html
    'typescript/prefer-enum-initializers': 'error',

    // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0]
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-find.html
    'typescript/prefer-find': 'error',

    // Enforce the use of for-of loop over the standard for loop where possible
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-for-of.html
    'typescript/prefer-for-of': 'error',

    // Enforce using function types instead of interfaces with call signatures
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-function-type.html
    'typescript/prefer-function-type': 'error',

    // Enforce includes method over indexOf method
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-includes.html
    'typescript/prefer-includes': 'error',

    // Require all enum members to be literal values
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-literal-enum-member.html
    'typescript/prefer-literal-enum-member': 'error',

    // Require using namespace keyword over module keyword to declare custom TypeScript modules
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.html
    'typescript/prefer-namespace-keyword': 'error',

    // Enforce using the nullish coalescing operator instead of logical assignments or chaining
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-nullish-coalescing.html
    'typescript/prefer-nullish-coalescing': 'error',

    // Enforce using concise optional chain expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-optional-chain.html
    'typescript/prefer-optional-chain': 'error',

    // Require using Error objects as Promise rejection reasons
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-promise-reject-errors.html
    'typescript/prefer-promise-reject-errors': 'error',

    // Require private members to be marked as readonly if they're never modified outside of the constructor
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-readonly.html
    'typescript/prefer-readonly': 'error',

    // Enforce using type parameter when calling Array#reduce instead of casting
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-reduce-type-parameter.html
    'typescript/prefer-reduce-type-parameter': 'error',

    // Enforce RegExp#exec over String#match if no global flag is provided
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-regexp-exec.html
    'typescript/prefer-regexp-exec': 'error',

    // Enforce that this is used when only this type is returned
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-return-this-type.html
    'typescript/prefer-return-this-type': 'error',

    // Enforce using String#startsWith and String#endsWith over other equivalent methods
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-string-starts-ends-with.html
    'typescript/prefer-string-starts-ends-with': 'error',

    // Require any function or method that returns a Promise to be marked async
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/promise-function-async.html
    'typescript/promise-function-async': 'error',

    // Enforce that get() types should be assignable to their equivalent set() type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/related-getter-setter-pairs.html
    'typescript/related-getter-setter-pairs': 'error',

    // Require Array#sort and Array#toSorted calls to always provide a compareFunction
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-array-sort-compare.html
    'typescript/require-array-sort-compare': 'error',

    // Disallow async functions which do not return promises and have no await expression
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-await.html
    'typescript/require-await': 'error',

    // Require both operands of addition to be the same type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-plus-operands.html
    'typescript/restrict-plus-operands': 'error',

    // Enforce template literal expressions to be of string type
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-template-expressions.html
    'typescript/restrict-template-expressions': 'error',

    // Enforce consistent awaiting of returned promises
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/return-await.html
    'typescript/return-await': 'error',

    // Disallow certain types in boolean expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-boolean-expressions.html
    'typescript/strict-boolean-expressions': ['error', { allowNullableBoolean: true }],

    // Require switch-case statements to be exhaustive
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/switch-exhaustiveness-check.html
    'typescript/switch-exhaustiveness-check': 'error',

    // Disallow certain triple slash directives in favor of ES6-style import declarations
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/triple-slash-reference.html
    'typescript/triple-slash-reference': 'error',

    // Enforce unbound methods are called with their expected scope
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/unbound-method.html
    'typescript/unbound-method': 'error',

    // Disallow two overloads that could be unified into one
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/unified-signatures.html
    'typescript/unified-signatures': 'error',

    // Enforce typing arguments in .catch() callbacks as unknown
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/use-unknown-in-catch-callback-variable.html
    'typescript/use-unknown-in-catch-callback-variable': 'error',

    // Disallow certain types (deprecated rule)
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-types.html
    // Decision: deprecated rule
    'typescript/ban-types': 'off',

    // Require explicit return types on functions and class methods
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-function-return-type.html
    // Decision: too opinionated for general use
    'typescript/explicit-function-return-type': 'off',

    // Require explicit accessibility modifiers on class properties and methods
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-member-accessibility.html
    // Decision: too opinionated for general use
    'typescript/explicit-member-accessibility': 'off',

    // Disallow empty interfaces (deprecated rule)
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-interface.html
    // Decision: deprecated rule
    'typescript/no-empty-interface': 'off',

    // Disallow require statements except in import statements (deprecated rule)
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-var-requires.html
    // Decision: deprecated rule
    'typescript/no-var-requires': 'off',

    // Require function parameters to be typed as readonly
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-readonly-parameter-types.html
    // Decision: too opinionated for general use
    'typescript/prefer-readonly-parameter-types': 'off',

    // Enforce using @ts-expect-error over @ts-ignore (deprecated rule)
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.html
    // Decision: deprecated rule
    'typescript/prefer-ts-expect-error': 'off',

    // Enforce void return type for functions that don't return a value
    // https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-void-return.html
    // Decision: too opinionated for general use
    'typescript/strict-void-return': 'off',
  },
};
