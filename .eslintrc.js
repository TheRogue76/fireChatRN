module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['e2e/*.e2e.js'],
  rules: {
    'no-lone-blocks': 0,
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-useless-escape': 0,
    'no-console': 2,
    '@typescript-eslint/no-explicit-any': 1,
    'padding-line-between-statements': [
      1,
      {
        blankLine: 'always',
        prev: '*',
        next: ['var', 'const', 'let', 'block', 'block-like', 'class', 'case'],
      },
    ],
    'lines-between-class-members': [1, 'always'],
  },
};
