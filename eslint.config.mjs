import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";
import jest from "eslint-plugin-jest";
import jsonc from "eslint-plugin-jsonc";

export default tseslint.config(
  {
    ignores: ["dist/**", "coverage/**", "docs/**", "node_modules/**", ".vscode/**", ".devcontainer/**"],
  },
  eslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    ignores: ["src/**/*.test.ts"],
    extends: tseslint.configs.recommendedTypeChecked,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-dupe-class-members": "off",
    },
  },
  {
    files: ["src/**/*.test.ts"],
    extends: [...tseslint.configs.recommended, jest.configs["flat/recommended"]],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  ...jsonc.configs["flat/recommended-with-jsonc"],
  {
    files: ["**/*.json"],
    rules: {
      "jsonc/sort-keys": "off",
    },
  },
  prettier,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 150,
        },
      ],
    },
  },
);
