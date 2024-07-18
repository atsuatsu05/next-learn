/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: [
    "@typescript-eslint"
  ],
  root: true,
  ignorePatterns: [
    "prettier.config.js",
    "next.config.mjs",
    ".eslintrc.js",
    ".next/**",
  ],
  rules: {
    // 個別に設定をする
    //error,off,wormのサン亜pターンで設定できる
  }
};
