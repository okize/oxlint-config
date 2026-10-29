export const reactA11yRules = {
  plugins: ['jsx-a11y'],
  rules: {
    // Enforce that all elements that require alternative text have meaningful information
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/alt-text.html
    'jsx_a11y/alt-text': 'error',

    // Enforce that anchors have content
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.html
    'jsx_a11y/anchor-has-content': 'error',

    // Enforce all anchors are valid, navigable elements
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-is-valid.html
    'jsx_a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // Enforce that elements with aria-activedescendant have tabindex
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-activedescendant-has-tabindex.html
    'jsx_a11y/aria-activedescendant-has-tabindex': 'error',

    // Enforce that elements have valid aria-* props
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-props.html
    'jsx_a11y/aria-props': 'error',

    // Enforce that ARIA state and property values are valid
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-proptypes.html
    'jsx_a11y/aria-proptypes': 'error',

    // Enforce that elements with ARIA roles have all required attributes for that role
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.html
    'jsx_a11y/role-has-required-aria-props': 'error',

    // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.html
    'jsx_a11y/role-supports-aria-props': 'error',

    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-role.html
    'jsx_a11y/aria-role': 'error',

    // Enforce that certain elements don't have ARIA roles, states, or properties
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.html
    'jsx_a11y/aria-unsupported-elements': 'error',

    // Enforce that autocomplete attribute is correct
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/autocomplete-valid.html
    // Decision: too opinionated for general use
    'jsx_a11y/autocomplete-valid': 'off',

    // Enforce that a control (an interactive element) has a text label
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/control-has-associated-label.html
    'jsx_a11y/control-has-associated-label': [
      'error',
      {
        labelAttributes: ['label'],
        controlComponents: [],
        ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 5,
      },
    ],

    // Enforce a clickable non-interactive element has at least one keyboard event listener
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/click-events-have-key-events.html
    'jsx_a11y/click-events-have-key-events': 'error',

    // Enforce heading elements have content
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.html
    'jsx_a11y/heading-has-content': ['error', { components: [''] }],

    // Enforce <html> element has lang prop
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.html
    'jsx_a11y/html-has-lang': 'error',

    // Enforce iframe elements have a title attribute
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/iframe-has-title.html
    'jsx_a11y/iframe-has-title': 'error',

    // Enforce <img> alt prop does not contain the word "image", "picture", or "photo"
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/img-redundant-alt.html
    'jsx_a11y/img-redundant-alt': 'error',

    // Enforce that a label tag has a text label and an associated control
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/label-has-associated-control.html
    'jsx_a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],

    // Enforce lang attribute has a valid value
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/lang.html
    'jsx_a11y/lang': 'error',

    // Enforce that media elements have captions
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/media-has-caption.html
    'jsx_a11y/media-has-caption': 'error',

    // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/mouse-events-have-key-events.html
    'jsx_a11y/mouse-events-have-key-events': 'error',

    // Enforce that the accessKey prop is not used on any element
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-access-key.html
    'jsx_a11y/no-access-key': 'error',

    // Enforce autoFocus prop is not used
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-autofocus.html
    'jsx_a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

    // Enforce distracting elements are not used
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-distracting-elements.html
    'jsx_a11y/no-distracting-elements': 'error',

    // Enforce tabIndex value is not greater than zero
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.html
    'jsx_a11y/tabindex-no-positive': 'error',

    // Elements with an interactive role and interaction handlers must be focusable
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/interactive-supports-focus.html
    'jsx_a11y/interactive-supports-focus': 'error',

    // Ensure interactive elements are not assigned non-interactive roles
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-tabindex.html
    'jsx_a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],

    // Ensure interactive elements are not assigned non-interactive roles
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-interactive-element-to-noninteractive-role.html
    'jsx_a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      { tr: ['none', 'presentation'] },
    ],

    // Enforce that non-interactive elements do not have interaction handlers
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-element-interactions.html
    'jsx_a11y/no-noninteractive-element-interactions': [
      'error',
      { handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'] },
    ],

    // Enforce that non-interactive elements are not assigned interactive roles
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-element-to-interactive-role.html
    'jsx_a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],

    // Enforce explicit role is not redundant with implicit role of the element
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.html
    'jsx_a11y/no-redundant-roles': 'error',

    // Enforce that non-interactive, visible elements with click handlers use the role attribute
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-static-element-interactions.html
    'jsx_a11y/no-static-element-interactions': 'error',

    // Enforce scope prop is only used on <th> elements
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/scope.html
    'jsx_a11y/scope': 'error',

    // Enforce that anchor elements have non-ambiguous text content
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-ambiguous-text.html
    'jsx_a11y/anchor-ambiguous-text': 'error',

    // Enforce that aria-hidden="true" is not set on focusable elements
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-aria-hidden-on-focusable.html
    'jsx_a11y/no-aria-hidden-on-focusable': 'error',

    // Prefer semantic HTML elements over role attributes
    // https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/prefer-tag-over-role.html
    // Decision: left to implementer
    'jsx_a11y/prefer-tag-over-role': 'off',
  },
};
