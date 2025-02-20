import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path'
import js from '@eslint/js';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.config({
    "extends": [
      "next/core-web-vitals",
      "next/typescript",
      "eslint:recommended",
      "plugin:@next/next/recommended",
      "plugin:prettier/recommended"
    ],
    "rules": {
      "no-unused-vars": "off",
    }
  }),

];

export default eslintConfig;
