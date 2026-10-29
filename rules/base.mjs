import confusingBrowserGlobals from 'confusing-browser-globals';

export const baseRules = {
  plugins: ['eslint', 'oxc'],
  rules: {
    // Enforce return statements in callbacks of array methods
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/array-callback-return.html
    'eslint/array-callback-return': ['error', { allowImplicit: true }],

    // Require super() calls in constructors
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/constructor-super.html
    'eslint/constructor-super': 'error',

    // Enforce for loop update clause moving the counter in the right direction
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/for-direction.html
    'eslint/for-direction': 'error',

    // Enforce return statements in getters
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/getter-return.html
    'eslint/getter-return': ['error', { allowImplicit: true }],

    // Disallow using an async function as a Promise executor
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-async-promise-executor.html
    'eslint/no-async-promise-executor': 'error',

    // Disallow await inside of loops
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html
    'eslint/no-await-in-loop': 'error',

    // Disallow reassigning class members
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-class-assign.html
    'eslint/no-class-assign': 'error',

    // Disallow comparing against -0
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.html
    'eslint/no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-cond-assign.html
    'eslint/no-cond-assign': ['error', 'always'],

    // Disallow reassigning const variables
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-const-assign.html
    'eslint/no-const-assign': 'error',

    // Disallow expressions where the operation doesn't affect the value
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.html
    'eslint/no-constant-binary-expression': 'error',

    // Disallow constant expressions in conditions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-condition.html
    'eslint/no-constant-condition': 'error',

    // Disallow returning value from constructor
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constructor-return.html
    'eslint/no-constructor-return': 'error',

    // Disallow control characters in regular expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-control-regex.html
    'eslint/no-control-regex': 'error',

    // Disallow the use of debugger
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-debugger.html
    'eslint/no-debugger': 'error',

    // Disallow duplicate class members
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-class-members.html
    'eslint/no-dupe-class-members': 'error',

    // Disallow duplicate conditions in if-else-if chains
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-else-if.html
    'eslint/no-dupe-else-if': 'error',

    // Disallow duplicate keys in object literals
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-keys.html
    'eslint/no-dupe-keys': 'error',

    // Disallow duplicate case labels
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-case.html
    'eslint/no-duplicate-case': 'error',

    // Disallow empty character classes in regular expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-character-class.html
    'eslint/no-empty-character-class': 'error',

    // Disallow empty destructuring patterns
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-pattern.html
    'eslint/no-empty-pattern': 'error',

    // Disallow reassigning exceptions in catch clauses
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ex-assign.html
    'eslint/no-ex-assign': 'error',

    // Disallow fallthrough of case statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-fallthrough.html
    'eslint/no-fallthrough': 'error',

    // Disallow reassigning function declarations
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-func-assign.html
    'eslint/no-func-assign': 'error',

    // Disallow assigning to imported bindings
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-import-assign.html
    'eslint/no-import-assign': 'error',

    // Disallow variable or function declarations in nested blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html
    'eslint/no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in RegExp constructors
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-invalid-regexp.html
    'eslint/no-invalid-regexp': 'error',

    // Disallow irregular whitespace
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.html
    'eslint/no-irregular-whitespace': 'error',

    // Disallow literal numbers that lose precision
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loss-of-precision.html
    'eslint/no-loss-of-precision': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-misleading-character-class.html
    'eslint/no-misleading-character-class': 'error',

    // Disallow new operators with global non-constructor functions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html
    'eslint/no-new-native-nonconstructor': 'error',

    // Disallow calling global object properties as functions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-obj-calls.html
    'eslint/no-obj-calls': 'error',

    // Disallow returning values from Promise executor functions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-promise-executor-return.html
    'eslint/no-promise-executor-return': 'error',

    // Disallow calling some Object.prototype methods directly on objects
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html
    'eslint/no-prototype-builtins': 'error',

    // Disallow assignments where both sides are exactly the same
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-assign.html
    'eslint/no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-compare.html
    'eslint/no-self-compare': 'error',

    // Disallow returning values from setters
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-setter-return.html
    'eslint/no-setter-return': 'error',

    // Disallow sparse arrays
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sparse-arrays.html
    'eslint/no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.html
    'eslint/no-template-curly-in-string': 'error',

    // Disallow this/super before calling super() in constructors
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-this-before-super.html
    'eslint/no-this-before-super': 'error',

    // Disallow let or var variables that are read but never assigned
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unassigned-vars.html
    'eslint/no-unassigned-vars': 'error',

    // Disallow unmodified loop conditions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unmodified-loop-condition.html
    'eslint/no-unmodified-loop-condition': 'error',

    // Disallow unreachable code after return, throw, continue, and break statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable.html
    'eslint/no-unreachable': 'error',

    // Disallow loops whose body allows only one iteration
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable-loop.html
    'eslint/no-unreachable-loop': 'error',

    // Disallow control flow statements in finally blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html
    'eslint/no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html
    'eslint/no-unsafe-negation': 'error',

    // Disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html
    'eslint/no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

    // Disallow unused private class members
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-private-class-members.html
    'eslint/no-unused-private-class-members': 'error',

    // Disallow unused variables
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars.html
    'eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],

    // Disallow the use of variables before they are defined
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-use-before-define.html
    'eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

    // Disallow useless backreferences in regular expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-backreference.html
    'eslint/no-useless-backreference': 'error',

    // Require calls to isNaN() when checking for NaN
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/use-isnan.html
    'eslint/use-isnan': 'error',

    // Enforce comparing typeof expressions against valid strings
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/valid-typeof.html
    'eslint/valid-typeof': ['error', { requireStringLiterals: true }],

    // Enforce getter and setter pairs in objects and classes
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/accessor-pairs.html
    'eslint/accessor-pairs': 'error',

    // Require braces around arrow function bodies
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/arrow-body-style.html
    // Decision: stylistic choice best left to formatter
    'eslint/arrow-body-style': 'off',

    // Enforce the use of variables within the scope they are defined
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/block-scoped-var.html
    'eslint/block-scoped-var': 'error',

    // Enforce that class methods utilize this
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/class-methods-use-this.html
    'eslint/class-methods-use-this': 'error',

    // Require default cases in switch statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html
    'eslint/default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default clauses in switch statements to be last
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case-last.html
    'eslint/default-case-last': 'error',

    // Enforce default parameters to be last
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-param-last.html
    'eslint/default-param-last': 'error',

    // Require the use of === and !==
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/eqeqeq.html
    'eslint/eqeqeq': ['error', 'always', { null: 'ignore' }],

    // Require for-in loops to include an if statement
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/guard-for-in.html
    'eslint/guard-for-in': 'error',

    // Require or disallow named function expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-names.html
    'eslint/func-names': ['error', 'always'],

    // Enforce the consistent use of either function declarations or expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-style.html
    'eslint/func-style': ['error', 'expression'],

    // Enforce grouped accessor pairs in object literals and classes
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs.html
    'eslint/grouped-accessor-pairs': 'error',

    // Require identifiers to match a specified regular expression
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-match.html
    // Decision: too opinionated for general use
    'eslint/id-match': 'off',

    // Enforce minimum and maximum identifier lengths
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-length.html
    'eslint/id-length': [
      'error',
      {
        min: 2,
        exceptions: ['_', 'i', 'j', 'x', 'y'],
      },
    ],

    // Enforce a maximum number of classes per file
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-classes-per-file.html
    'eslint/max-classes-per-file': ['error', 1],

    // Require constructor names to begin with a capital letter
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/new-cap.html
    'eslint/new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],

    // Disallow the use of alert, confirm, and prompt
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-alert.html
    'eslint/no-alert': 'error',

    // Disallow Array constructors
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-array-constructor.html
    'eslint/no-array-constructor': 'error',

    // Disallow bitwise operators
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-bitwise.html
    'eslint/no-bitwise': 'error',

    // Disallow the use of arguments.caller or arguments.callee
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-caller.html
    'eslint/no-caller': 'error',

    // Disallow lexical declarations in case clauses
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-case-declarations.html
    'eslint/no-case-declarations': 'error',

    // Disallow the use of console
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-console.html
    // Decision: allow console methods that are commonly used for logging and error reporting,
    // but disallow others that are often left in accidentally
    'eslint/no-console': ['error', { allow: ['log', 'warn', 'error'] }],

    // Disallow continue statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-continue.html
    'eslint/no-continue': 'error',

    // Disallow deleting variables
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-delete-var.html
    'eslint/no-delete-var': 'error',

    // Disallow else blocks after return statements in if statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return.html
    'eslint/no-else-return': ['error', { allowElseIf: false }],

    // Disallow empty block statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty.html
    'eslint/no-empty': 'error',

    // Disallow empty functions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-function.html
    'eslint/no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],

    // Disallow empty static blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-static-block.html
    'eslint/no-empty-static-block': 'error',

    // Disallow the use of eval()
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eval.html
    'eslint/no-eval': 'error',

    // Disallow extending native types
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extend-native.html
    'eslint/no-extend-native': 'error',

    // Disallow unnecessary calls to .bind()
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-bind.html
    'eslint/no-extra-bind': 'error',

    // Disallow unnecessary boolean casts
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html
    'eslint/no-extra-boolean-cast': 'error',

    // Disallow unnecessary labels
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-label.html
    'eslint/no-extra-label': 'error',

    // Disallow assignments to native objects or read-only global variables
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-global-assign.html
    'eslint/no-global-assign': 'error',

    // Disallow shorthand type conversions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-coercion.html
    'eslint/no-implicit-coercion': 'error',

    // Disallow declarations in the global scope
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-globals.html
    'eslint/no-implicit-globals': 'error',

    // Disallow the use of eval()-like methods
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval.html
    'eslint/no-implied-eval': 'error',

    // Disallow the use of the __iterator__ property
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-iterator.html
    'eslint/no-iterator': 'error',

    // Disallow labels that share a name with a variable
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-label-var.html
    'eslint/no-label-var': 'error',

    // Disallow labeled statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels.html
    'eslint/no-labels': 'error',

    // Disallow unnecessary nested blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lone-blocks.html
    'eslint/no-lone-blocks': 'error',

    // Disallow if statements as the only statement in else blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lonely-if.html
    'eslint/no-lonely-if': 'error',

    // Disallow function declarations that contain unsafe references inside loop statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loop-func.html
    'eslint/no-loop-func': 'error',

    // Disallow magic numbers
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-magic-numbers.html
    // Decision: this rule is too noisy to be a default and was commonly disabled inline
    'eslint/no-magic-numbers': 'off',

    // Disallow use of chained assignment expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-assign.html
    'eslint/no-multi-assign': 'error',

    // Disallow multiline strings
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-str.html
    'eslint/no-multi-str': 'error',

    // Disallow nested ternary expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nested-ternary.html
    'eslint/no-nested-ternary': 'error',

    // Disallow new operators outside of assignments or comparisons
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html
    'eslint/no-new': 'error',

    // Disallow new operators with the Function object
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-func.html
    'eslint/no-new-func': 'error',

    // Disallow new operators with the String, Number, and Boolean objects
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-wrappers.html
    'eslint/no-new-wrappers': 'error',

    // Disallow \8 and \9 escape sequences in string literals
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.html
    'eslint/no-nonoctal-decimal-escape': 'error',

    // Disallow calls to the Object constructor without an argument
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-object-constructor.html
    'eslint/no-object-constructor': 'error',

    // Disallow reassigning function parameters
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-param-reassign.html
    // Decision: props:false. Name-based allowlists are brittle and miss common
    // patterns (state, draft, reply, event, config, options); property-level
    // immutability is delegated to TypeScript's Readonly<T> at the call site.
    'eslint/no-param-reassign': ['error', { props: false }],

    // Disallow the unary operators ++ and --
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-plusplus.html
    'eslint/no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Disallow the use of the __proto__ property
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-proto.html
    'eslint/no-proto': 'error',

    // Disallow variable redeclaration
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-redeclare.html
    'eslint/no-redeclare': 'error',

    // Disallow multiple spaces in regular expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-regex-spaces.html
    'eslint/no-regex-spaces': 'error',

    // Disallow certain global variables (confusing browser globals + isFinite/isNaN)
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-globals.html
    'eslint/no-restricted-globals': [
      'error',
      {
        restrictedGlobals: {
          ...Object.fromEntries(
            confusingBrowserGlobals.map((name) => [
              name,
              `'${name}' should be written as 'window.${name}' or 'document.${name}' instead.`,
            ]),
          ),
          isFinite: 'Use Number.isFinite instead...',
          isNaN: 'Use Number.isNaN instead...',
        },
      },
    ],

    // Disallow specified modules when loaded by import
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-imports.html
    // Decision: this should be set at a project-level config if necessary
    'eslint/no-restricted-imports': 'off',

    // Disallow assignment operators in return statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-return-assign.html
    'eslint/no-return-assign': ['error', 'always'],

    // Disallow use of javascript: urls
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-script-url.html
    'eslint/no-script-url': 'error',

    // Disallow comma operators
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sequences.html
    'eslint/no-sequences': 'error',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html
    'eslint/no-shadow': 'error',

    // Disallow identifiers from shadowing restricted names
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.html
    'eslint/no-shadow-restricted-names': 'error',

    // Disallow throwing literals as exceptions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-throw-literal.html
    'eslint/no-throw-literal': 'error',

    // Disallow ternary operators when simpler alternatives exist
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html
    'eslint/no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow unused expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html
    'eslint/no-unused-expressions': 'error',

    // Disallow unused labels
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-labels.html
    'eslint/no-unused-labels': 'error',

    // Disallow unnecessary catch clauses
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-catch.html
    'eslint/no-useless-catch': 'error',

    // Disallow unnecessary computed property keys in objects and classes
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-computed-key.html
    'eslint/no-useless-computed-key': 'error',

    // Disallow unnecessary concatenation of literals or template literals
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-concat.html
    'eslint/no-useless-concat': 'error',

    // Disallow unnecessary constructors
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-constructor.html
    'eslint/no-useless-constructor': 'error',

    // Disallow unnecessary escape characters
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-escape.html
    'eslint/no-useless-escape': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-rename.html
    'eslint/no-useless-rename': 'error',

    // Disallow redundant return statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-return.html
    'eslint/no-useless-return': 'error',

    // Require let or const instead of var
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-var.html
    'eslint/no-var': 'error',

    // Disallow void operators
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-void.html
    'eslint/no-void': 'error',
    // note: typescript.ts overrides this to ["error", { "allowAsStatement": true }]

    // Disallow with statements
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-with.html
    'eslint/no-with': 'error',

    // Require or disallow assignment operator shorthand where possible
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/operator-assignment.html
    'eslint/operator-assignment': ['error', 'always'],

    // Require using arrow functions for callbacks
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-arrow-callback.html
    'eslint/prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],

    // Require const declarations for variables that are never reassigned after declared
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html
    'eslint/prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],

    // Require destructuring from arrays and/or objects
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-destructuring.html
    'eslint/prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: false },
      },
      { enforceForRenamedProperties: false },
    ],

    // Disallow the use of Math.pow in favor of the ** operator
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html
    'eslint/prefer-exponentiation-operator': 'error',

    // Enforce using named capture group in regular expression
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-named-capture-group.html
    // Decision: too strict for general use
    'eslint/prefer-named-capture-group': 'off',

    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html
    'eslint/prefer-numeric-literals': 'error',

    // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-has-own.html
    'eslint/prefer-object-has-own': 'error',

    // Prefer use of an object spread over Object.assign
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-spread.html
    'eslint/prefer-object-spread': 'error',

    // Disallow use of the RegExp constructor in favor of regular expression literals
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-regex-literals.html
    'eslint/prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // Require using Error objects as Promise rejection reasons
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors.html
    'eslint/prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Require rest parameters instead of arguments
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-rest-params.html
    'eslint/prefer-rest-params': 'error',

    // Require spread operators instead of .apply()
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-spread.html
    'eslint/prefer-spread': 'error',

    // Require template literals instead of string concatenation
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-template.html
    'eslint/prefer-template': 'error',

    // Disallow losing originally caught error when re-throwing custom errors
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/preserve-caught-error.html
    'eslint/preserve-caught-error': ['error', { requireCatchParameter: false }],

    // Enforce the consistent use of the radix argument when using parseInt()
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/radix.html
    'eslint/radix': 'error',

    // Disallow async functions which have no await expression
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-await.html
    'eslint/require-await': 'error',

    // Require generator functions to contain yield
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-yield.html
    'eslint/require-yield': 'error',

    // Require symbol descriptions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/symbol-description.html
    'eslint/symbol-description': 'error',

    // Require or disallow Unicode byte order mark (BOM)
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom.html
    'eslint/unicode-bom': ['error', 'never'],

    // Require var declarations be placed at the top of their containing scope
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/vars-on-top.html
    'eslint/vars-on-top': 'error',

    // Require or disallow "Yoda" conditions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/yoda.html
    'eslint/yoda': 'error',

    // Enforce or disallow capitalization of the first letter of a comment
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/capitalized-comments.html
    // Decision: too opinionated for general use
    'eslint/capitalized-comments': 'off',

    // Enforce a maximum cyclomatic complexity allowed in a program
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/complexity.html
    // Decision: too opinionated for general use
    'eslint/complexity': 'off',

    // Require following curly brace conventions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html
    // Decision: enforce curly braces for all control statements because even the `multiline` option can allow subtle bugs
    'eslint/curly': ['error', 'all'],

    // Require function names to match the name of the variable or property to which they are assigned
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-name-matching.html
    // Decision: too opinionated for general use
    'eslint/func-name-matching': 'off',

    // Require or disallow initialization in variable declarations
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/init-declarations.html
    // Decision: too opinionated for general use
    'eslint/init-declarations': 'off',

    // Require or disallow logical assignment operator shorthand
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/logical-assignment-operators.html
    // Decision: too opinionated for general use
    'eslint/logical-assignment-operators': 'off',

    // Enforce a maximum depth that blocks can be nested
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-depth.html
    // Decision: too opinionated for general use
    'eslint/max-depth': 'off',

    // Enforce a maximum number of lines per file
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines.html
    // Decision: too opinionated for general use
    'eslint/max-lines': 'off',

    // Enforce a maximum number of lines of code in a function
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html
    // Decision: too opinionated for general use
    'eslint/max-lines-per-function': 'off',

    // Enforce a maximum depth that callbacks can be nested
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-nested-callbacks.html
    // Decision: too opinionated for general use
    'eslint/max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-params.html
    // Decision: too opinionated for general use
    'eslint/max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-statements.html
    // Decision: too opinionated for general use
    'eslint/max-statements': 'off',

    // Require regex literals to escape division operators
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-div-regex.html
    // Decision: too opinionated for general use
    'eslint/no-div-regex': 'off',

    // Disallow duplicate module imports
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-imports.html
    // Decision: handled by import plugin
    'eslint/no-duplicate-imports': 'off',

    // Disallow null comparisons without type-checking operators
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eq-null.html
    // Decision: too opinionated for general use
    'eslint/no-eq-null': 'off',

    // Disallow inline comments after code
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inline-comments.html
    // Decision: inline comments are occasionally necessary
    'eslint/no-inline-comments': 'off',

    // Disallow negated conditions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-negated-condition.html
    // Decision: too opinionated for general use
    'eslint/no-negated-condition': 'off',

    // Disallow specified names in exports
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-exports.html
    // Decision: requires project-specific configuration
    'eslint/no-restricted-exports': 'off',

    // Disallow certain properties on certain objects
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-properties.html
    // Decision: requires project-specific configuration
    'eslint/no-restricted-properties': 'off',

    // Disallow ternary operators
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ternary.html
    // Decision: restricts valid language feature
    'eslint/no-ternary': 'off',

    // Disallow the use of undeclared variables unless mentioned in global comments
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undef.html
    // Decision: handled by TypeScript
    'eslint/no-undef': 'off',

    // Disallow the use of undefined as an identifier
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undefined.html
    // Decision: restricts valid language feature
    'eslint/no-undefined': 'off',

    // Disallow dangling underscores in identifiers
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-underscore-dangle.html
    // Decision: too opinionated for general use
    'eslint/no-underscore-dangle': 'off',

    // Disallow confusing multiline expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unexpected-multiline.html
    // Decision: stylistic choice best left to formatter
    'eslint/no-unexpected-multiline': 'off',

    // Disallow assignments that are never used
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-assignment.html
    'eslint/no-useless-assignment': 'error',

    // Disallow unnecessary calls to .call() and .apply()
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-call.html
    // Decision: too opinionated for general use
    'eslint/no-useless-call': 'off',

    // Disallow specified warning terms in comments
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-warning-comments.html
    // Decision: too opinionated for general use
    'eslint/no-warning-comments': 'off',

    // Require or disallow method and property shorthand syntax for object literals
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/object-shorthand.html
    // Decision: feels overprescriptive to enforce this style choice
    'eslint/object-shorthand': 'off',

    // Enforce the use of u or v flag on regular expressions
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-unicode-regexp.html
    // Decision: too opinionated for general use
    'eslint/require-unicode-regexp': 'off',

    // Enforce sorted import declarations within modules
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-imports.html
    // Decision: handled by oxfmt's import sorting
    'eslint/sort-imports': 'off',

    // Require object keys to be sorted
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-keys.html
    // Decision: too opinionated for general use
    'eslint/sort-keys': 'off',

    // Require variables within the same declaration block to be sorted
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-vars.html
    // Decision: too opinionated for general use
    'eslint/sort-vars': 'off',

    //oxc rules - these are bug-catchers that oxlint can detect natively.

    // Disallow calling array methods on arguments (it's array-like, not an array)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.html
    'oxc/bad-array-method-on-arguments': 'error',

    // Disallow comparing charAt() result to multi-char string (always false)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-char-at-comparison.html
    'oxc/bad-char-at-comparison': 'error',

    // Disallow chained comparisons like a < b < c (evaluates left to boolean first)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-comparison-sequence.html
    'oxc/bad-comparison-sequence': 'error',

    // Disallow swapped/nested min/max that produce constant results
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-min-max-func.html
    'oxc/bad-min-max-func': 'error',

    // Disallow reference-equality checks against object/array literals (always false)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-object-literal-comparison.html
    'oxc/bad-object-literal-comparison': 'error',

    // Disallow replaceAll with regex missing the global flag (throws at runtime)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.html
    'oxc/bad-replace-all-arg': 'error',

    // Disallow redundant or impossible comparisons (x >= 5 && x >= 3)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/const-comparisons.html
    'oxc/const-comparisons': 'error',

    // Disallow comparisons that can be simplified (a === b || a < b → a <= b)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/double-comparisons.html
    'oxc/double-comparisons': 'error',

    // Disallow operations that always produce the same value (x * 0, x & 0)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/erasing-op.html
    'oxc/erasing-op': 'error',

    // Disallow constructing Error without throw
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/missing-throw.html
    'oxc/missing-throw': 'error',

    // Disallow numeric arguments outside valid range (parseInt radix, toFixed digits)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.html
    'oxc/number-arg-out-of-range': 'error',

    // Disallow function params only used in recursive self-calls (likely a bug)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/only-used-in-recursion.html
    'oxc/only-used-in-recursion': 'error',

    // Disallow passing functions to array methods when signatures don't match
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.html
    'oxc/uninvoked-array-callback': 'error',

    // Disallow use of approximate mathematical constants
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/approx-constant.html
    'oxc/approx-constant': 'error',

    // Disallow incorrect use of bitwise operators where logical operators were intended
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html
    'oxc/bad-bitwise-operator': 'error',

    // Disallow branches in if/else that share identical code
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/branches-sharing-code.html
    // Decision: too noisy in practice
    'oxc/branches-sharing-code': 'off',

    // Disallow misrefactored compound assignment operators
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.html
    'oxc/misrefactored-assign-op': 'error',

    // Disallow spread in accumulator of Array.reduce (O(n^2) complexity)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-accumulating-spread.html
    'oxc/no-accumulating-spread': 'error',

    // Disallow use of async/await syntax
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-await.html
    // Decision: restricts valid language feature
    'oxc/no-async-await': 'off',

    // Disallow use of async functions as Express endpoint handlers without error handling
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html
    // Decision: framework-specific, not universally applicable
    'oxc/no-async-endpoint-handlers': 'off',

    // Disallow barrel files (index files that re-export from other modules)
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-barrel-file.html
    // Decision: handled by barrel-files/avoid-re-export-all and barrel-files/avoid-namespace-import
    'oxc/no-barrel-file': 'off',

    // Disallow TypeScript const enums
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-const-enum.html
    // Decision: const enums are TypeScript-only syntax; enabled in typescript config
    'oxc/no-const-enum': 'off',

    // Disallow spreading keys from a map-like object into an object literal
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-map-spread.html
    'oxc/no-map-spread': 'error',

    // Disallow use of optional chaining
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-optional-chaining.html
    // Decision: restricts valid language feature
    'oxc/no-optional-chaining': 'off',

    // Disallow use of rest and spread properties
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.html
    // Decision: restricts valid language feature
    'oxc/no-rest-spread-properties': 'off',

    // Disallow use of this in exported functions
    // https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.html
    // Decision: too opinionated for general use
    'oxc/no-this-in-exported-function': 'off',
  },
};
