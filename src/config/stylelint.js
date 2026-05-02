const pattern = '^([a-z][a-z0-9]*(-[a-z0-9]+)*|[a-z][a-z0-9]*(_[a-z0-9]+)*|[a-z][a-zA-Z0-9]*)$';

/**
 * @param {string} name - name
 * @returns {string}
 */
const formatMsg = (name) => `Expected "${name}" to be kebab, camel or snake`;

/** @type {import('stylelint').Config} */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'custom-media-pattern': [pattern, { message: formatMsg }],
    'custom-property-pattern': [pattern, { message: formatMsg }],
    'keyframes-name-pattern': [pattern, { message: formatMsg }],
    'selector-class-pattern': [pattern, { message: formatMsg }],
    'selector-id-pattern': [pattern, { message: formatMsg }],
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
