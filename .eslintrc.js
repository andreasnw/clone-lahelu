module.exports = {
  extends: [
    "expo",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-native", "prettier", "import-helpers", "@typescript-eslint"],
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["module", "/^@src/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "react-native/no-inline-styles": "error",
    // Prettier
    // Never run prettier from eslint. Reason behind this
    // 1. Too many squiggly lines in the editor
    // 2. Prettier will run on precommit
    "prettier/prettier": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-require-imports": "off",
  },
};
