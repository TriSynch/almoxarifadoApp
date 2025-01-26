import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
	{
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  }
];
