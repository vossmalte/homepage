import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      '**/*.cjs',
      '**/.DS_Store',
      '**/node_modules',
      'build',
      '.svelte-kit',
      'package',
      '**/.env',
      '**/.env.*',
      '!**/.env.example',
      '**/pnpm-lock.yaml',
      '**/package-lock.json',
      '**/yarn.lock'
    ]
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/all',
    'prettier',
    'plugin:svelte/recommended'
  ),
  {
    plugins: {
      svelte,
      '@typescript-eslint': typescriptEslint,
      unicorn
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module'
    }
  },
  {
    files: ['**/*.svelte'],
    processor: 'svelte/svelte',
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser
      }
    }
  },
  {
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true
          }
        }
      ]
    }
  }
];
