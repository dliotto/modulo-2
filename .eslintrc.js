module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base', 'prettier'
  ],
  plugins : ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier" : "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "indent": "off",
    "padded-blocks": "off",
    "spaced-comment" : "off",
    "space-before-blocks" : "off",
    "linebreak-style": "off",
    "space-in-parens" : "off",
    "arrow-body-style" : "off",
    "key-spacing" : "off",
    "object-curly-spacing" : "off"
  },
};
