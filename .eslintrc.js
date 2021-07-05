module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'jsx-a11y', 'react-hooks'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'warn',
  },
  globals: {
    graphql: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      classes: true,
    },
  },
};
