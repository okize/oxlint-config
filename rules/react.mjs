import { resolvePlugin } from '../resolve-plugin.mjs';

// Native oxlint react rules + @eslint-react/eslint-plugin via jsPlugins for rules
// without native equivalents.
export const reactRules = {
  plugins: ['react'],
  jsPlugins: [{ name: '@eslint-react', specifier: resolvePlugin('@eslint-react/eslint-plugin') }],
  rules: {
    // Enforce that button elements have an explicit type attribute
    // https://oxc.rs/docs/guide/usage/linter/rules/react/button-has-type.html
    'react/button-has-type': 'error',

    // Enforce boolean attributes notation in JSX (require explicit ={true})
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-boolean-value.html
    'react/jsx-boolean-value': ['error', 'always'],

    // Enforce curly braces or disallow unnecessary curly braces in JSX props and children
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.html
    // Decision: stylistic choice best left for formatter
    'react/jsx-curly-brace-presence': 'off',

    // Enforce shorthand or standard form for React fragments
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-fragments.html
    'react/jsx-fragments': 'error',

    // Enforce missing key props in iterators/collection literals
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-key.html
    'react/jsx-key': 'error',

    // Enforce a maximum depth that JSX can be nested
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-max-depth.html
    // Decision: not useful enough to justify the performance cost
    'react/jsx-max-depth': 'off',

    // Disallow comments from being inserted as text nodes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-comment-textnodes.html
    'react/jsx-no-comment-textnodes': 'error',

    // Disallow JSX context values from taking values that will cause needless rerenders
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-constructed-context-values.html
    'react/jsx-no-constructed-context-values': 'error',

    // Disallow duplicate properties in JSX
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.html
    'react/jsx-no-duplicate-props': 'error',

    // Disallow javascript: URLs
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-script-url.html
    'react/jsx-no-script-url': 'error',

    // Disallow target="_blank" attribute without rel="noreferrer"
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-target-blank.html
    'react/jsx-no-target-blank': 'error',

    // Disallow undeclared variables in JSX
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-undef.html
    // Decision: this rule is generally unnecessary if using TypeScript
    'react/jsx-no-undef': 'off',

    // Disallow unnecessary fragments
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.html
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    // Enforce PascalCase for user-defined JSX components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-pascal-case.html
    'react/jsx-pascal-case': ['error', { allowNamespace: true }],

    // Disallow spreading props on multiple JSX elements (and merging objects)
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.html
    'react/jsx-props-no-spread-multi': 'error',

    // Disallow JSX prop spreading
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spreading.html
    // Decision: this is a decision best left to the implementer
    'react/jsx-props-no-spreading': 'off',

    // Disallow Array.prototype.map() key from being an array index
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-array-index-key.html
    'react/no-array-index-key': 'error',

    // Disallow passing of children as props
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-children-prop.html
    'react/no-children-prop': 'error',

    // Disallow usage of dangerous JSX properties
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger.html
    'react/no-danger': 'error',

    // Report when a DOM element is using both children and dangerouslySetInnerHTML
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger-with-children.html
    'react/no-danger-with-children': 'error',

    // Disallow direct mutation of this.state
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-direct-mutation-state.html
    'react/no-direct-mutation-state': 'error',

    // Disallow usage of findDOMNode
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-find-dom-node.html
    'react/no-find-dom-node': 'error',

    // Disallow usage of isMounted
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-is-mounted.html
    'react/no-is-mounted': 'error',

    // Disallow defining multiple components in a single file (allow colocated stateless helpers)
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-multi-comp.html
    // Decision: this is a decision best left to the implementer
    'react/no-multi-comp': 'off',

    // Disallow object types as default props
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-object-type-as-default-prop.html
    'react/no-object-type-as-default-prop': 'error',

    // Disallow creating unstable components inside components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unstable-nested-components.html
    'react/no-unstable-nested-components': 'error',

    // Disallow usage of the return value of ReactDOM.render
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-render-return-value.html
    'react/no-render-return-value': 'error',

    // Disallow usage of setState
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-set-state.html
    // Decision: this is too broad, should be enabled at a project level if desired
    'react/no-set-state': 'off',

    // Disallow using string references
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-string-refs.html
    'react/no-string-refs': 'error',

    // Disallow this from being used in stateless functional components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-this-in-sfc.html
    // Decision: stylistic choice best left for formatter
    'react/no-this-in-sfc': 'off',

    // Disallow unescaped HTML entities from appearing in markup
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities.html
    'react/no-unescaped-entities': 'error',

    // Disallow usage of unknown DOM property
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unknown-property.html
    'react/no-unknown-property': 'error',

    // Disallow usage of unsafe lifecycle methods
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unsafe.html
    'react/no-unsafe': 'error',

    // Disallow usage of deprecated methods
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-redundant-should-component-update.html
    'react/no-redundant-should-component-update': 'error',

    // Disallow creating unstable components inside components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-namespace.html
    'react/no-namespace': 'error',

    // Disallow usage of setState in componentDidMount
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-did-mount-set-state.html
    'react/no-did-mount-set-state': 'error',

    // Disallow usage of setState in componentWillUpdate
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-will-update-set-state.html
    'react/no-will-update-set-state': 'error',

    // Disallow usage of React.Children APIs
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-react-children.html
    // Decision: stylistic choice best left for formatter
    'react/no-react-children': 'off',

    // Disallow usage of cloneElement
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-clone-element.html
    'react/no-clone-element': 'error',

    // Enforce ES5 or ES6 class for React Components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-es6-class.html
    // Decision: stylistic choice best left for formatter
    'react/prefer-es6-class': 'off',

    // Enforce that components that only export from react can only export components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/only-export-components.html
    // Decision: stylistic choice best left for formatter
    'react/only-export-components': 'off',

    // Prevent missing displayName in a React component definition
    // https://oxc.rs/docs/guide/usage/linter/rules/react/display-name.html
    // Decision: stylistic choice best left for formatter (equivalent @eslint-react/no-missing-component-display-name is "off")
    'react/display-name': 'off',

    // Enforce a specific function type for function components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/forward-ref-uses-ref.html
    // Decision: stylistic choice best left for formatter
    'react/forward-ref-uses-ref': 'off',

    // Enforce sandbox attribute on iframe elements
    // https://oxc.rs/docs/guide/usage/linter/rules/react/iframe-missing-sandbox.html
    'react/iframe-missing-sandbox': 'error',

    // Enforce checked/onChange or readonly for checkboxes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/checked-requires-onchange-or-readonly.html
    // Decision: stylistic choice best left for formatter
    'react/checked-requires-onchange-or-readonly': 'off',

    // Disallow void DOM elements from receiving children
    // https://oxc.rs/docs/guide/usage/linter/rules/react/void-dom-elements-no-children.html
    'react/void-dom-elements-no-children': 'error',

    // Enforce component methods order
    // https://oxc.rs/docs/guide/usage/linter/rules/react/require-render-return.html
    // Decision: stylistic choice best left for formatter
    'react/require-render-return': 'off',

    // Enforce Rules of Hooks
    // https://oxc.rs/docs/guide/usage/linter/rules/react/rules-of-hooks.html
    'react/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-deps.html
    'react/exhaustive-deps': 'error',

    // Enforce JSX filename extension (allow .jsx and .tsx)
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-filename-extension.html
    // Decision: stylistic choice best left for formatter
    'react/jsx-filename-extension': 'off',

    // Enforce self-closing tags for components without children
    // https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp.html
    'react/self-closing-comp': 'error',

    // Enforce style prop value is an object
    // https://oxc.rs/docs/guide/usage/linter/rules/react/style-prop-object.html
    'react/style-prop-object': 'error',

    // Enforce event handler naming conventions in JSX
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-handler-names.html
    // Decision: stylistic choice best left for formatter
    'react/jsx-handler-names': 'off',

    // Forbid certain props on components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-component-props.html
    // Decision: requires project-specific configuration
    'react/forbid-component-props': 'off',

    // Forbid certain props on DOM elements
    // https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-dom-props.html
    // Decision: requires project-specific configuration
    'react/forbid-dom-props': 'off',

    // Forbid certain elements
    // https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-elements.html
    // Decision: requires project-specific configuration
    'react/forbid-elements': 'off',

    // Enforce destructuring assignment of useState hook
    // https://oxc.rs/docs/guide/usage/linter/rules/react/hook-use-state.html
    // Decision: too opinionated for general use
    'react/hook-use-state': 'off',

    // Disallow usage of setState in componentDidUpdate (deprecated lifecycle)
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-did-update-set-state.html
    // Decision: deprecated lifecycle method
    'react/no-did-update-set-state': 'off',

    // Prefer function components over class components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-function-component.html
    // Decision: too opinionated for general use
    'react/prefer-function-component': 'off',

    // Disallow missing React when using JSX (not needed with modern React)
    // https://oxc.rs/docs/guide/usage/linter/rules/react/react-in-jsx-scope.html
    // Decision: not needed with modern React JSX transform
    'react/react-in-jsx-scope': 'off',

    // Enforce state initialization in constructor
    // https://oxc.rs/docs/guide/usage/linter/rules/react/state-in-constructor.html
    // Decision: too opinionated for general use
    'react/state-in-constructor': 'off',

    // Surface code that violates the Rules of React the compiler relies on
    // https://oxc.rs/docs/guide/usage/linter/rules/react/react-compiler.html
    'react/react-compiler': 'error',

    // Disallow string literals in JSX
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-literals.html
    // Decision: stylistic/i18n rule, too strict for general use
    'react/jsx-no-literals': 'off',

    //rules via jsPlugins (@eslint-react/eslint-plugin)

    // Validates usage of Error Boundaries instead of try/catch for child errors
    // https://eslint-react.xyz/docs/rules/error-boundaries
    '@eslint-react/error-boundaries': 'error',

    // Restricts usage of global variables in React components
    // https://eslint-react.xyz/docs/rules/globals
    '@eslint-react/globals': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://eslint-react.xyz/docs/rules/exhaustive-deps
    // Decision: handled by native react/exhaustive-deps
    '@eslint-react/exhaustive-deps': 'off',

    // Validates against mutating props, state, and other immutable values
    // https://eslint-react.xyz/docs/rules/immutability
    '@eslint-react/immutability': 'error',

    // Prevent accidental JS comments from being injected into JSX as text
    // https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
    // Decision: handled by native react/jsx-no-comment-textnodes
    '@eslint-react/jsx-no-comment-textnodes': 'off',

    // Prevents unintentional '$' sign before expression in JSX
    // https://eslint-react.xyz/docs/rules/jsx-no-leaked-dollar
    '@eslint-react/jsx-no-leaked-dollar': 'error',

    // Enforce key prop comes before spread to avoid overriding
    // https://eslint-react.xyz/docs/rules/jsx-no-key-after-spread
    '@eslint-react/jsx-no-key-after-spread': 'error',

    // Prevent passing of children as props
    // https://eslint-react.xyz/docs/rules/jsx-no-children-prop
    // Decision: handled by native react/no-children-prop
    '@eslint-react/jsx-no-children-prop': 'off',

    // Prevent children prop used alongside children in JSX
    // https://eslint-react.xyz/docs/rules/jsx-no-children-prop-with-children
    '@eslint-react/jsx-no-children-prop-with-children': 'error',

    // Disallow unnecessary fragments
    // https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment
    '@eslint-react/jsx-no-useless-fragment': 'error',

    // Prevent leaked semicolons in JSX
    // https://eslint-react.xyz/docs/rules/jsx-no-leaked-semicolon
    '@eslint-react/jsx-no-leaked-semicolon': 'error',

    // Disallow namespace in JSX
    // https://eslint-react.xyz/docs/rules/jsx-no-namespace
    // Decision: handled by native react/no-namespace
    '@eslint-react/jsx-no-namespace': 'off',

    // Prevent using this.state within a this.setState
    // https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
    '@eslint-react/no-access-state-in-setstate': 'error',

    // Prevent usage of Array index in keys
    // https://eslint-react.xyz/docs/rules/no-array-index-key
    // Decision: handled by native react/no-array-index-key
    '@eslint-react/no-array-index-key': 'off',

    // Disallow usage of Children.count
    // https://eslint-react.xyz/docs/rules/no-children-count
    '@eslint-react/no-children-count': 'error',

    // Disallow usage of Children.forEach
    // https://eslint-react.xyz/docs/rules/no-children-for-each
    '@eslint-react/no-children-for-each': 'error',

    // Disallow usage of Children.map
    // https://eslint-react.xyz/docs/rules/no-children-map
    '@eslint-react/no-children-map': 'error',

    // Disallow usage of Children.only
    // https://eslint-react.xyz/docs/rules/no-children-only
    '@eslint-react/no-children-only': 'error',

    // Disallow usage of Children.toArray
    // https://eslint-react.xyz/docs/rules/no-children-to-array
    '@eslint-react/no-children-to-array': 'error',

    // Disallow class components (except for error boundaries)
    // https://eslint-react.xyz/docs/rules/no-class-component
    '@eslint-react/no-class-component': 'error',

    // Disallow usage of cloneElement
    // https://eslint-react.xyz/docs/rules/no-clone-element
    // Decision: handled by native react/no-clone-element
    '@eslint-react/no-clone-element': 'off',

    // Disallow usage of componentWillMount
    // https://eslint-react.xyz/docs/rules/no-component-will-mount
    '@eslint-react/no-component-will-mount': 'error',

    // Disallow usage of componentWillReceiveProps
    // https://eslint-react.xyz/docs/rules/no-component-will-receive-props
    '@eslint-react/no-component-will-receive-props': 'error',

    // Disallow usage of componentWillUpdate
    // https://eslint-react.xyz/docs/rules/no-component-will-update
    '@eslint-react/no-component-will-update': 'error',

    // Disallow usage of legacy Context.Provider (React 19+)
    // https://eslint-react.xyz/docs/rules/no-context-provider
    '@eslint-react/no-context-provider': 'error',

    // Disallow usage of createRef (prefer useRef)
    // https://eslint-react.xyz/docs/rules/no-create-ref
    '@eslint-react/no-create-ref': 'error',

    // Prevent direct mutation of this.state
    // https://eslint-react.xyz/docs/rules/no-direct-mutation-state
    // Decision: handled by native react/no-direct-mutation-state
    '@eslint-react/no-direct-mutation-state': 'off',

    // Disallow duplicate keys in JSX arrays
    // https://eslint-react.xyz/docs/rules/no-duplicate-key
    '@eslint-react/no-duplicate-key': 'error',

    // Disallow usage of forwardRef (React 19+ passes ref as prop)
    // https://eslint-react.xyz/docs/rules/no-forward-ref
    '@eslint-react/no-forward-ref': 'error',

    // Prevent implicitly passing the children prop
    // https://eslint-react.xyz/docs/rules/no-implicit-children
    // Decision: requires TypeScript type-checker services unavailable in oxlint jsPlugin runtime
    '@eslint-react/no-implicit-children': 'off',

    // Prevent implicitly passing the key prop
    // https://eslint-react.xyz/docs/rules/no-implicit-key
    // Decision: requires TypeScript type-checker services unavailable in oxlint jsPlugin runtime
    '@eslint-react/no-implicit-key': 'off',

    // Prevent implicitly passing the ref prop
    // https://eslint-react.xyz/docs/rules/no-implicit-ref
    // Decision: requires TypeScript type-checker services unavailable in oxlint jsPlugin runtime
    '@eslint-react/no-implicit-ref': 'off',

    // Prevent problematic leaked values from being rendered
    // https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
    // Decision: requires TypeScript type-checker services unavailable in oxlint jsPlugin runtime
    '@eslint-react/no-leaked-conditional-rendering': 'off',

    // Enforce that components have a displayName for DevTools
    // https://eslint-react.xyz/docs/rules/no-missing-component-display-name
    // Decision: too opinionated for general use
    '@eslint-react/no-missing-component-display-name': 'off',

    // Enforce that contexts have a displayName for DevTools
    // https://eslint-react.xyz/docs/rules/no-missing-context-display-name
    // Decision: too opinionated for general use
    '@eslint-react/no-missing-context-display-name': 'off',

    // Enforce that every JSX element in a list has a key prop
    // https://eslint-react.xyz/docs/rules/no-missing-key
    // Decision: handled by native react/jsx-key
    '@eslint-react/no-missing-key': 'off',

    // Disallow misusing captureOwnerStack
    // https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
    '@eslint-react/no-misused-capture-owner-stack': 'error',

    // Prevent creating unstable components inside components
    // https://eslint-react.xyz/docs/rules/no-nested-component-definitions
    // Decision: handled by native react/no-unstable-nested-components
    '@eslint-react/no-nested-component-definitions': 'off',

    // Prevent creating lazy components inside components
    // https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
    '@eslint-react/no-nested-lazy-component-declarations': 'error',

    // Prevent usage of setState in componentDidMount
    // https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
    // Decision: handled by native react/no-did-mount-set-state
    '@eslint-react/no-set-state-in-component-did-mount': 'off',

    // Prevent usage of setState in componentDidUpdate
    // https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
    '@eslint-react/no-set-state-in-component-did-update': 'error',

    // Prevent usage of setState in componentWillUpdate
    // https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
    // Decision: handled by native react/no-will-update-set-state
    '@eslint-react/no-set-state-in-component-will-update': 'off',

    // Disallow unnecessary "use" prefix on custom hooks
    // https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
    '@eslint-react/no-unnecessary-use-prefix': 'error',

    // Disallow usage of UNSAFE_componentWillMount
    // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
    '@eslint-react/no-unsafe-component-will-mount': 'error',

    // Disallow usage of UNSAFE_componentWillReceiveProps
    // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
    '@eslint-react/no-unsafe-component-will-receive-props': 'error',

    // Disallow usage of UNSAFE_componentWillUpdate
    // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
    '@eslint-react/no-unsafe-component-will-update': 'error',

    // Prevent non-stable values used as context values
    // https://eslint-react.xyz/docs/rules/no-unstable-context-value
    // Decision: handled by native react/jsx-no-constructed-context-values
    '@eslint-react/no-unstable-context-value': 'off',

    // Disallow referential-type variables as default props
    // https://eslint-react.xyz/docs/rules/no-unstable-default-props
    // Decision: handled by native react/no-object-type-as-default-prop
    '@eslint-react/no-unstable-default-props': 'off',

    // Prevent declaring unused methods of component class
    // https://eslint-react.xyz/docs/rules/no-unused-class-component-members
    '@eslint-react/no-unused-class-component-members': 'error',

    // Warn about component props that are defined but never used
    // https://eslint-react.xyz/docs/rules/no-unused-props
    // Decision: requires TypeScript type-checker services unavailable in oxlint jsPlugin runtime
    '@eslint-react/no-unused-props': 'off',

    // Prevent unused state values
    // https://eslint-react.xyz/docs/rules/no-unused-state
    '@eslint-react/no-unused-state': 'error',

    // Prefer using use() over useContext() (React 19+)
    // https://eslint-react.xyz/docs/rules/no-use-context
    '@eslint-react/no-use-context': 'error',

    // Validates that components/hooks are pure
    // https://eslint-react.xyz/docs/rules/purity
    '@eslint-react/purity': 'error',

    // Validates correct usage of refs, not reading/writing during render
    // https://eslint-react.xyz/docs/rules/refs
    '@eslint-react/refs': 'error',

    // Enforce Rules of Hooks
    // https://eslint-react.xyz/docs/rules/rules-of-hooks
    // Decision: handled by native react/rules-of-hooks
    '@eslint-react/rules-of-hooks': 'off',

    // Validates against calling setState synchronously in an effect
    // https://eslint-react.xyz/docs/rules/set-state-in-effect
    '@eslint-react/set-state-in-effect': 'error',

    // Validates against setting state during render
    // https://eslint-react.xyz/docs/rules/set-state-in-render
    '@eslint-react/set-state-in-render': 'error',

    // Enforces static component definitions
    // https://eslint-react.xyz/docs/rules/static-components
    '@eslint-react/static-components': 'error',

    // Validates against syntax that React does not support
    // https://eslint-react.xyz/docs/rules/unsupported-syntax
    '@eslint-react/unsupported-syntax': 'error',

    // Validates usage of useMemo with a return value
    // https://eslint-react.xyz/docs/rules/use-memo
    '@eslint-react/use-memo': 'error',

    // Ensure destructuring and symmetric naming of useState hook value and setter
    // https://eslint-react.xyz/docs/rules/use-state
    '@eslint-react/use-state': 'error',

    // --- React DOM rules ---

    // Warn on usage of dangerouslySetInnerHTML
    // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
    // Decision: handled by native react/no-danger
    '@eslint-react/dom-no-dangerously-set-innerhtml': 'off',

    // Prevent problem with children and dangerouslySetInnerHTML
    // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
    // Decision: handled by native react/no-danger-with-children
    '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'off',

    // Warn against using findDOMNode()
    // https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
    // Decision: handled by native react/no-find-dom-node
    '@eslint-react/dom-no-find-dom-node': 'off',

    // Disallow usage of flushSync
    // https://eslint-react.xyz/docs/rules/dom-no-flush-sync
    '@eslint-react/dom-no-flush-sync': 'error',

    // Disallow usage of ReactDOM.hydrate (use hydrateRoot instead)
    // https://eslint-react.xyz/docs/rules/dom-no-hydrate
    '@eslint-react/dom-no-hydrate': 'error',

    // Enforce that buttons have an explicit type attribute
    // https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
    // Decision: handled by native react/button-has-type
    '@eslint-react/dom-no-missing-button-type': 'off',

    // Enforce sandbox attribute on iframe elements
    // https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
    // Decision: handled by native react/iframe-missing-sandbox
    '@eslint-react/dom-no-missing-iframe-sandbox': 'off',

    // Disallow usage of ReactDOM.render (use createRoot instead)
    // https://eslint-react.xyz/docs/rules/dom-no-render
    '@eslint-react/dom-no-render': 'error',

    // Disallow using ReactDOM.render return value
    // https://eslint-react.xyz/docs/rules/dom-no-render-return-value
    // Decision: handled by native react/no-render-return-value
    '@eslint-react/dom-no-render-return-value': 'off',

    // Prevent usage of javascript: URLs
    // https://eslint-react.xyz/docs/rules/dom-no-script-url
    // Decision: handled by native react/jsx-no-script-url
    '@eslint-react/dom-no-script-url': 'off',

    // Require style prop value be an object
    // https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
    // Decision: handled by native react/style-prop-object
    '@eslint-react/dom-no-string-style-prop': 'off',

    // Prevent usage of unknown DOM property
    // https://eslint-react.xyz/docs/rules/dom-no-unknown-property
    // Decision: handled by native react/no-unknown-property
    '@eslint-react/dom-no-unknown-property': 'off',

    // Enforce safe iframe sandbox attribute values
    // https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
    '@eslint-react/dom-no-unsafe-iframe-sandbox': 'error',

    // Disallow target="_blank" without rel="noreferrer"
    // https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
    // Decision: handled by native react/jsx-no-target-blank
    '@eslint-react/dom-no-unsafe-target-blank': 'off',

    // Disallow usage of deprecated useFormState (use useActionState instead)
    // https://eslint-react.xyz/docs/rules/dom-no-use-form-state
    '@eslint-react/dom-no-use-form-state': 'error',

    // Prevent void DOM elements from receiving children
    // https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
    // Decision: handled by native react/void-dom-elements-no-children
    '@eslint-react/dom-no-void-elements-with-children': 'off',

    // --- RSC rules ---

    // Enforce correct function definition for React Server Components
    // https://eslint-react.xyz/docs/rules/rsc-function-definition
    '@eslint-react/rsc-function-definition': 'error',

    // --- Naming convention rules ---

    // Enforce consistent naming for React context
    // https://eslint-react.xyz/docs/rules/naming-convention-context-name
    '@eslint-react/naming-convention-context-name': 'error',

    // Enforce consistent naming for React component identifiers
    // https://eslint-react.xyz/docs/rules/naming-convention-id-name
    '@eslint-react/naming-convention-id-name': 'error',

    // Enforce consistent naming for refs
    // https://eslint-react.xyz/docs/rules/naming-convention-ref-name
    '@eslint-react/naming-convention-ref-name': 'error',

    // --- Web API rules ---

    // Prevent leaked event listeners
    // https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
    '@eslint-react/web-api-no-leaked-event-listener': 'error',

    // Prevent leaked setInterval calls
    // https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
    '@eslint-react/web-api-no-leaked-interval': 'error',

    // Prevent leaked ResizeObserver instances
    // https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
    '@eslint-react/web-api-no-leaked-resize-observer': 'error',

    // Prevent leaked IntersectionObserver instances
    // https://eslint-react.xyz/docs/rules/web-api-no-leaked-intersection-observer
    '@eslint-react/web-api-no-leaked-intersection-observer': 'error',

    // Prevent leaked setTimeout calls
    // https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
    '@eslint-react/web-api-no-leaked-timeout': 'error',

    // Prevent leaked fetch calls in effects
    // https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch
    '@eslint-react/web-api-no-leaked-fetch': 'error',
  },
};
