/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f6f9',
          100: '#ececf2',
          200: '#d4d4e3',
          300: '#aeaecb',
          400: '#8382ae',
          500: '#636394',
          600: '#4f4e7b',
          700: '#48466d',
          800: '#3a3854',
          900: '#333248'
        },
        secondary: {
          50: '#f1f8fa',
          100: '#dbecf2',
          200: '#bbdae6',
          300: '#8cbed4',
          400: '#569aba',
          500: '#3d84a8',
          600: '#336787',
          700: '#2f556f',
          800: '#2d485d',
          900: '#293e50'
        },
        background: {
          50: '#f1fcf8',
          100: '#d1f6e9',
          200: '#abedd8',
          300: '#6edabc',
          400: '#40c1a1',
          500: '#27a587',
          600: '#1c856e',
          700: '#1b6a5a',
          800: '#1a554a',
          900: '#1a473e'
        },
        interactive: {
          50: '#f1fcfc',
          100: '#cff8f6',
          200: '#9ef1ed',
          300: '#66e2e0',
          400: '#46cdcf',
          500: '#1dabaf',
          600: '#14878d',
          700: '#156a70',
          800: '#15555a',
          900: '#16484b'
        }
      }
    }
  },
  plugins: []
};
