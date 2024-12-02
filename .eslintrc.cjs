/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // Base config
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: [
    ".eslintrc.json",
    "node_modules/",
    "build/",
    ".next/",
    "out/",
    "public/",
    "next.config.js",
    "next-env.d.ts",
    "**/**.*.jsx",
    "**/**.*.js",
  ],
  overrides: [
    // React
    {
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y", "prettier", "@typescript-eslint"],
      settings: {
        formComponents: ["Form"],
        "import/resolver": {
          typescript: {},
        },
        linkComponents: [
          {
            linkAttribute: "to",
            name: "Link",
          },
          {
            linkAttribute: "to",
            name: "NavLink",
          },
        ],
        react: {
          version: "detect",
        },
      },
    }, // Typescript
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "import"],
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    }, // Node
    {
      env: {
        node: true,
      },
      files: [".eslintrc.js"],
    },
  ],
  parserOptions: {
    project: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  root: true,
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",

    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript/no-unsafe-member-access": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "prettier/prettier": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
