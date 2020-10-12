module.exports = {
  extends: ["plugin:prettier/recommended", "eslint:recommended", "google"],
  plugins: ["prettier", "import", "babel"],
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  globals: {
    expect: true,
    chai: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  rules: {
    indent: "off",
    "eol-last": "off",
    "no-invalid-this": 0,
    "comma-dangle": "off",
    semi: "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "quote-props": "off",
    "space-before-blocks": "off",
    "computed-property-spacing": "off",
    "comma-spacing": "off",
    "brace-style": "off",
    "linebreak-style": ["error", "unix"],
    quotes: "off",
    "require-jsdoc": "off",
    "max-len": "off",
    "operator-linebreak": "off",
    "prettier/prettier": ["error"],
    "new-cap": [
      "error",
      {
        properties: false,
      },
    ],
    "no-throw-literal": "off",
    "guard-for-in": "off",
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-unresolved": "error",
    "no-console": "error",
    "no-trailing-spaces": "off",
    "space-before-function-paren": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["./src"],
      },
      "babel-module": {
        root: "./src",
        alias: {
          engine: "@kaneoh/rolo-server-engine",
          test: "./test",
          env: "./env",
        },
      },
    },
  },
};
