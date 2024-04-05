module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // update the extensions
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "prettier",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "class-methods-use-this": "off",
  },
};
