import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config([
  {
    ignores: ["node_modules", "dist", "build", "coverage"]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "prettier": prettierPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "prettier/prettier": ["error", {
        "tabWidth": 2,
        "useTabs": false,
        "singleQuote": false,
        "semi": true,
        "trailingComma": "none",
        "printWidth": 100
      }],
      "indent": ["off"],
      "no-console": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-param-reassign": "off",
      "consistent-return": "off"
    }
  },
  prettierConfig
]);