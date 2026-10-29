import { resolvePlugin } from '../resolve-plugin.mjs';

// All styled-components-a11y rules loaded via jsPlugins (no native oxlint support).
export const styledComponentsRules = {
  jsPlugins: [resolvePlugin('eslint-plugin-styled-components-a11y')],
  rules: {
    // Enforce emojis are wrapped and given accessible text
    // Decision: deprecated in jsx-a11y
    'eslint-plugin-styled-components-a11y/accessible-emoji': 'off',

    // Enforce that all elements that require alternative text have meaningful information
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/alt-text.md
    'eslint-plugin-styled-components-a11y/alt-text': 'error',

    // Enforce that anchors have content
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/anchor-has-content.md
    'eslint-plugin-styled-components-a11y/anchor-has-content': 'error',

    // Enforce all anchors are valid, navigable elements
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/anchor-is-valid.md
    'eslint-plugin-styled-components-a11y/anchor-is-valid': 'error',

    // Enforce that elements with aria-activedescendant have tabindex
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
    'eslint-plugin-styled-components-a11y/aria-activedescendant-has-tabindex': 'error',

    // Enforce that elements have valid aria-* props
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/aria-props.md
    'eslint-plugin-styled-components-a11y/aria-props': 'error',

    // Enforce that ARIA state and property values are valid
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/aria-proptypes.md
    'eslint-plugin-styled-components-a11y/aria-proptypes': 'error',

    // Enforce that elements with ARIA roles have all required attributes for that role
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/aria-role.md
    'eslint-plugin-styled-components-a11y/aria-role': 'error',

    // Enforce that certain elements don't have ARIA roles, states, or properties
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/aria-unsupported-elements.md
    'eslint-plugin-styled-components-a11y/aria-unsupported-elements': 'error',

    // Enforce that autocomplete attribute is correct
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/autocomplete-valid.md
    'eslint-plugin-styled-components-a11y/autocomplete-valid': 'error',

    // Enforce click events have key events
    // https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'eslint-plugin-styled-components-a11y/click-events-have-key-events': 'error',

    // Enforce a label tag has a text label and an associated control
    'eslint-plugin-styled-components-a11y/control-has-associated-label': [
      'error',
      {
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
        includeRoles: ['alert', 'dialog'],
      },
    ],

    // Enforce heading elements have content
    'eslint-plugin-styled-components-a11y/heading-has-content': 'error',

    // Enforce html element has lang prop
    'eslint-plugin-styled-components-a11y/html-has-lang': 'error',

    // Enforce iframe elements have a title attribute
    'eslint-plugin-styled-components-a11y/iframe-has-title': 'error',

    // Enforce img alt prop does not contain the word image, picture, or photo
    'eslint-plugin-styled-components-a11y/img-redundant-alt': 'error',

    // Enforce that interactive elements are focusable
    'eslint-plugin-styled-components-a11y/interactive-supports-focus': [
      'error',
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'progressbar',
          'searchbox',
          'slider',
          'spinbutton',
          'switch',
          'textbox',
        ],
      },
    ],

    // Enforce label-control association
    'eslint-plugin-styled-components-a11y/label-has-associated-control': 'error',

    // Enforce label has htmlFor
    // Decision: deprecated in jsx-a11y, superseded by label-has-associated-control
    'eslint-plugin-styled-components-a11y/label-has-for': 'off',

    // Enforce lang attribute has a valid value
    // Decision: broken in the plugin — exported but missing from its internal
    // ruleNameToTypeDict, so its create() crashes (path.join on undefined) and
    // oxlint reports a JS-plugin runtime error on every linted file
    'eslint-plugin-styled-components-a11y/lang': 'off',

    // Enforce that media elements have captions
    'eslint-plugin-styled-components-a11y/media-has-caption': 'error',

    // Enforce onMouseOver/onMouseOut are accompanied by onFocus/onBlur
    'eslint-plugin-styled-components-a11y/mouse-events-have-key-events': 'error',

    // Enforce that the accessKey prop is not used
    'eslint-plugin-styled-components-a11y/no-access-key': 'error',

    // Enforce autoFocus prop is not used
    'eslint-plugin-styled-components-a11y/no-autofocus': 'error',

    // Enforce distracting elements are not used
    'eslint-plugin-styled-components-a11y/no-distracting-elements': 'error',

    // Enforce interactive elements not assigned non-interactive roles
    'eslint-plugin-styled-components-a11y/no-interactive-element-to-noninteractive-role': 'error',

    // Enforce non-interactive elements do not have interactions
    'eslint-plugin-styled-components-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        body: ['onError', 'onLoad'],
        iframe: ['onError', 'onLoad'],
        img: ['onError', 'onLoad'],
      },
    ],

    // Enforce non-interactive elements not assigned interactive roles
    'eslint-plugin-styled-components-a11y/no-noninteractive-element-to-interactive-role': 'error',

    // Enforce tabIndex value is not greater than zero
    'eslint-plugin-styled-components-a11y/no-noninteractive-tabindex': 'error',

    // Disallow onChange without onBlur
    // Decision: deprecated in jsx-a11y
    'eslint-plugin-styled-components-a11y/no-onchange': 'off',

    // Enforce explicit role is not redundant
    'eslint-plugin-styled-components-a11y/no-redundant-roles': 'error',

    // Enforce non-interactive visible elements with click handlers use the role attribute
    'eslint-plugin-styled-components-a11y/no-static-element-interactions': 'error',

    // Enforce that elements with ARIA roles have all required attributes
    'eslint-plugin-styled-components-a11y/role-has-required-aria-props': 'error',

    // Enforce that elements with roles support all aria-* properties for that role
    'eslint-plugin-styled-components-a11y/role-supports-aria-props': 'error',

    // Enforce scope prop is only used on th elements
    'eslint-plugin-styled-components-a11y/scope': 'error',

    // Enforce tabIndex value is not greater than zero
    'eslint-plugin-styled-components-a11y/tabindex-no-positive': 'error',
  },
};
