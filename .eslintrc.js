module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json'
  },

  plugins: [
    '@typescript-eslint'
  ],

  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  env: {
    'es6': true,
    'browser': true
  },

  rules: {
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',

    'max-len': ['error', { 'code': 120 }],
    'arrow-parens': [
      'error',
      'as-needed'
    ],

    'react/destructuring-assignment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
    // '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/comma-dangle': 'off',
    // '@typescript-eslint/no-unsafe-assignment': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-unsafe-call': 'off',
    // '@typescript-eslint/no-unsafe-return': 'off',
    // '@typescript-eslint/no-unsafe-member-access': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/unbound-method': 'off'
  }
};
