import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    // rules: {
    //  "react/jsx-uses-react": "off",
    // }
  },
  {
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];