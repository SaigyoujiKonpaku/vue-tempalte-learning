module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'quotes': [2, 'single'],//使用单引号
    'semi': [2, 'always'],//使用分号
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
