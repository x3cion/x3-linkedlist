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
    files: ["**/*.ts"],
    extends: tseslint.configs.recommendedTypeChecked,
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-dupe-class-members": "off",
    },
  },
  {
    files: ["**/*.test.ts"],
    extends: tseslint.configs.recommendedTypeChecked,
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "no-dupe-class-members": "off",
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
