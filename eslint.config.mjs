import prettier from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import { loadConfig } from '@sveltejs/load-config';

const loadedConfig = await loadConfig('./', { traverse: false });
if (loadedConfig && 'error' in loadedConfig) throw loadedConfig.error;
const svelteConfig = loadedConfig?.config;
const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  unicorn.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },

    rules: {
      // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
      // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      'no-undef': 'off'
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],

    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig
      }
    }
  },
  {
    files: ['**/*.svelte'],
    rules: {
      // Svelte instance scripts update per-component state from event handlers.
      'unicorn/no-top-level-assignment-in-function': 'off'
    }
  },
  {
    files: ['src/routes/**/+*.{js,ts}'],
    rules: {
      // SvelteKit requires this exact route option name.
      'unicorn/consistent-boolean-name': ['error', { ignore: ['^prerender$'] }]
    }
  },
  {
    // .d.ts ambient declaration files use `export {}` to become modules — this is idiomatic TS
    files: ['**/*.d.ts'],
    rules: {
      'unicorn/require-module-specifiers': 'off'
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
);
