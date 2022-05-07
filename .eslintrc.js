module.export = {
  // parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  rules: {
    // override/add rules settings here, such as:
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 'never',
    'eol-last': 'error',
    'arrow-parens': 'off',
    'vue/no-unused-vars': 'error',
  },
  ignorePatterns: ['./node_modules', '**/vendor/*.js'],
}
