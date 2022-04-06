module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [ 'standard', 'eslint-config-prettier' ],
  "parserOptions": {
    "ecmaVersion": 'latest',
    "sourceType": 'module'
  },
  "rules": {
    'semi': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'smart' ],
    'quote-props': [ 'error', 'always' ],
    'no-multiple-empty-lines': [ 'error', { "max": 1 } ]
  }
};
