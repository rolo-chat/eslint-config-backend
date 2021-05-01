module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  extends: ["eslint-config-rolo", "prettier/babel"],
  plugins: ["babel"],
  globals: {
    expect: "readonly",
    chai: "readonly",
  },
  rules: {
    "new-cap": [
      "error",
      {
        properties: false,
      },
    ],
    "import/no-unresolved": "error",
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        alias: {
          engine: "@rolo-chat/server-engine",
        },
      },
    },
  },
};
