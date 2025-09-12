import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import nextPlugin from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
// import espree from 'espree';


export default [
  {
    ignores: ["node_modules", "dist", "build", ".next"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,

  // Подключаем рекомендации Next + Core Web Vitals
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  {
    // TODO change for the TS project
    // files: ["**/*.{js,jsx,ts,tsx}"],
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier: prettierPlugin,
    },
    // files: ['**/*.{js,jsx}'],
    // languageOptions: {
    //   parser: espree,
    //   parserOptions: {
    //     ecmaVersion: 'latest',
    //     sourceType: 'module',
    //     ecmaFeatures: { jsx: true },
    //   },
    // },
    // plugins: { react, 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y }, // при необходимости
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // TODO delete with TS
      "react/require-default-props": "off", // TODO delete with TS
      // Необязательно: смягчить правило под Next.js <Link>
      // "jsx-a11y/anchor-is-valid": ["warn", {
      //   "components": ["Link"],
      //   "specialLink": ["hrefLeft", "hrefRight"],
      //   "aspects": ["invalidHref", "preferButton"]
      // }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
