import { defineConfig } from 'eslint/config';
import pluginJs from '@eslint/js';
import pluginTs from 'typescript-eslint';
import pluginStylistic from '@stylistic/eslint-plugin';
import * as pluginImport from 'eslint-plugin-import';
import pluginJsdoc from 'eslint-plugin-jsdoc';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginAngular from 'angular-eslint';
import globals from 'globals';

export default defineConfig([
  {
    name: '@honeybdg/codestyle/javascript',
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
    extends: [
      pluginJs.configs.recommended,
      pluginStylistic.configs.recommended,
      pluginImport.flatConfigs.recommended,
      pluginJsdoc.configs['flat/recommended-error'],
    ],
    languageOptions: {
      ecmaVersion: 2026,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2026,
      },
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      camelcase: ['error', { properties: 'never' }],
      'no-console': 'error',
      curly: 'error',
      eqeqeq: 'error',
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
      'no-use-before-define': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'one-var': ['error', { initialized: 'never' }],
      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      yoda: ['error', 'never'],
      'prefer-const': 'error',
      strict: ['error', 'never'],

      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
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

      'jsdoc/check-tag-names': ['error', { definedTags: ['openapi'] }],
      'jsdoc/require-returns': ['error', { forceRequireReturn: true }],
      'jsdoc/require-returns-description': 'off',
      'jsdoc/tag-lines': 'off',
      'jsdoc/no-blank-blocks': 'error',
      'jsdoc/reject-any-type': 'off',
      'jsdoc/require-jsdoc': ['error', {
        require: {
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: ['VariableDeclarator > ArrowFunctionExpression'],
        exemptEmptyConstructors: true,
      }],

      'import/no-unresolved': ['error', { commonjs: true }],
      'import/no-cycle': ['error', { maxDepth: Infinity }],
      'import/no-duplicates': 'error',
      'import/enforce-node-protocol-usage': ['error', 'always'],
      'import/order': ['error', {
        groups: [
          'type',
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
      }],
    },
  },
]);

export const typescript = defineConfig([
  {
    name: '@honeybdg/codestyle/typescript',
    files: ['**/*.{ts,tsx,cts,mts}'],
    extends: [
      pluginTs.configs.eslintRecommended,
      pluginTs.configs.recommended,
      pluginJsdoc.configs['flat/recommended-typescript-error'],
    ],
    rules: {
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      }],

      // Note: you must disable the base rule as it can report incorrect errors
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',

      'jsdoc/check-tag-names': ['error', { typed: true, definedTags: ['openapi'] }],
    },
  },
]);

export const react = defineConfig([
  {
    name: '@honeybdg/codestyle/react',
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
    extends: [
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat['jsx-runtime'],
      pluginReactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/prop-types': 'off',
      'react/display-name': 'off',

      '@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
      '@stylistic/jsx-wrap-multilines': ['error', {
        declaration: 'ignore',
        assignment: 'ignore',
        return: 'parens-new-line',
        arrow: 'ignore',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
        propertyValue: 'ignore',
      }],
    },
  },
]);

export const angular = defineConfig([
  {
    name: '@honeybdg/codestyle/angular/typescript',
    files: ['**/*.{ts,cts,mts}'],
    extends: [pluginAngular.configs.tsRecommended],
    processor: pluginAngular.processInlineTemplates,
  },
  {
    name: '@honeybdg/codestyle/angular/templates',
    files: ['**/*.html'],
    extends: [
      pluginAngular.configs.templateRecommended,
      pluginAngular.configs.templateAccessibility,
    ],
  },
]);
