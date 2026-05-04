const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginJsdoc = require('eslint-plugin-jsdoc');
const pluginReact = require('eslint-plugin-react');
const pluginImport = require('eslint-plugin-import');
const pluginStylistic = require('@stylistic/eslint-plugin');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  { files: ['*.js', '*.jsx', '*.cjs', '*.mjs'] },
  pluginJs.configs.recommended,
  pluginJsdoc.configs['flat/recommended-error'],
  pluginReact.configs.flat.recommended,
  pluginImport.flatConfigs.recommended,
  pluginStylistic.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2025,
      },
    },
    settings: {
      'react': {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['.'],
          extensions: ['.js', '.jsx', '.cjs', '.mjs'],
        },
      },
    },
    rules: {
      'camelcase': ['error', { properties: 'never' }],
      'no-console': 'error',
      'curly': 'error',
      'eqeqeq': 'error',
      'new-cap': ['error', { capIsNew: false }],
      'no-array-constructor': 'error',
      'no-caller': 'error',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-implied-eval': 'error',
      'no-inner-declarations': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-object-constructor': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-template-curly-in-string': 'error',
      'no-undef-init': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'one-var': ['error', { initialized: 'never' }],
      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'yoda': ['error', 'never'],
      'prefer-const': 'error',
      'strict': ['error', 'never'],

      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/max-statements-per-line': ['error', { max: 5 }],
      '@stylistic/quote-props': 'off',
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        importAttributes: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      }],
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'always' }],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
        catch: 'always',
      }],

      'jsdoc/check-tag-names': ['error', { definedTags: ['swagger'] }],
      'jsdoc/require-returns': ['error', { forceRequireReturn: true }],
      'jsdoc/require-returns-description': 'off',
      'jsdoc/tag-lines': 'off',
      'jsdoc/no-blank-blocks': 'error',
      'jsdoc/reject-any-type': 'off',
      'jsdoc/require-jsdoc': ['error', {
        require: {
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: ['VariableDeclarator > ArrowFunctionExpression'],
        exemptEmptyConstructors: true,
      }],

      'import/enforce-node-protocol-usage': ['error', 'always'],
    },
  },
];
