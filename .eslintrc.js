module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // Indentation with 2 spaces
    'indent': ['error', 2],
    // Require semicolons
    'semi': ['error', 'always'],
    // Use single quotes for strings
    'quotes': ['error', 'single'],
    // Disallow unused variables
    'no-unused-vars': 'warn',
    // Require space after keywords like if, for, while, etc.
    'keyword-spacing': ['error', { before: true, after: true }],
    // Maximum line length
    'max-len': ['error', { code: 100 }],
    // Allow console.log in Node.js application
    'no-console': 'off',
    // Require trailing commas in multiline objects/arrays
    'comma-dangle': ['error', 'always-multiline'],
    // Disallow var, use let/const instead
    'no-var': 'error',
    // Prefer const over let
    'prefer-const': 'error',
    // Allow underscore in parameter names
    'no-underscore-dangle': 'off',
  },
};