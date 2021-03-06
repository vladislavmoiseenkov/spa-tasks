module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': ['error', { 'allow': ['state'] }],
    'no-param-reassign': ['error', { 'props': false }],
    "vue/no-use-v-if-with-v-for": ["error", {
      "allowUsingIterationVar": true,
    }],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "vue/no-parsing-error": ["error", {
      "invalid-first-character-of-tag-name": false,
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
