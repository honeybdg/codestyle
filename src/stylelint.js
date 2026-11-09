const basePattern = '^([a-z][a-z0-9]*(-[a-z0-9]+)*|[a-z][a-z0-9]*(_[a-z0-9]+)*|[a-z][a-zA-Z0-9]*)$';
const classPattern = '^([a-z][a-z0-9]*(-[a-z0-9]+)*|[a-z][a-z0-9]*(_[a-z0-9]+)*|[a-z][a-zA-Z0-9]*|[a-z][a-z0-9]*(__[-a-z0-9]+)*(--[-a-z0-9]+)*)$';

/**
 * @param {string} name - name
 * @returns {string}
 */
const baseMsg = (name) => `Expected "${name}" to be kebab-case, camelCase or snake_case`;

/**
 * @param {string} name - name
 * @returns {string}
 */
const classMsg = (name) => `Expected "${name}" to be kebab-case, camelCase, snake_case or BEM`;

/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-standard',
  rules: {
    'custom-media-pattern': [basePattern, { message: baseMsg }],
    'custom-property-pattern': [basePattern, { message: baseMsg }],
    'keyframes-name-pattern': [basePattern, { message: baseMsg }],
    'selector-class-pattern': [classPattern, { message: classMsg }],
    'selector-id-pattern': [basePattern, { message: baseMsg }],
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
