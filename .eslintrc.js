module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error"]
  }
};
