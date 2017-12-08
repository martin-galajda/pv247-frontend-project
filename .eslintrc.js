'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },

  extends: [
    '@strv/javascript/environments/react/v16',
    '@strv/javascript/coding-styles/recommended',
  ],

  rules: {
    'no-warning-comments': 0,
    'max-len': [1, 130],
    'react/react-in-jsx-scope': 0,
    'id-length': [0, {min: 35}],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },

  plugins: ['jest'],

  env: {
    'jest/globals': true,
  },

  globals: {
    global: true,
  },

  overrides: [],
}