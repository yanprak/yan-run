module.exports = {
  root: true,

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
    'browser': true,
    'node': true
  },

  rules: {
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'no-case-declarations': 'off',
    'no-useless-escape': 'off',
    'object-curly-newline': 'off',

    'jsx-a11y/label-has-associated-control': 'off',

    'max-len': ['error', { 'code': 120 }],
    'arrow-parens': [
      'error',
      'as-needed'
    ],

    // disabled import-errors for devDependencies, when linter assumes it should be in dependencies list
    'import/no-extraneous-dependencies': 'off',

    // disable this rule to use dangerouslySetInnerHTML
    'react/no-danger': 'off',

    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    "react-hooks/exhaustive-deps": 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/naming-convention': 'off'
  }
};
