const vitest = require('eslint-plugin-vitest');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:vitest/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@tanstack/query',
    'fsd-import',
    'import',
    'react',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', '@public', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    eqeqeq: 'error',
    'dot-notation': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/react-in-jsx-scope': 'off',
    'fsd-import/fsd-relative-path': 'error',
    'fsd-import/public-api-imports': 'error',
    'fsd-import/layer-imports': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-router-dom',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**/*',
            group: 'parent',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  globals: {
    ...vitest.environments.env.globals,
  },
};
