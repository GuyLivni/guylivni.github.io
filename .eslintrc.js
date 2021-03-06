module.exports = {
  extends: ['react-app', 'plugin:react/recommended', 'prettier'],
  plugins: ['prettier', 'jsx-a11y', 'react-hooks'],
  rules: {
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
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      classes: true,
    },
  },
};
