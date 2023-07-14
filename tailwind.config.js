import { black, gray, green, white } from './src/theme/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          main: gray.main,
          light: gray.light,
          // semiLight: gray.semiLight,
          dark: gray.dark,
        },
        black: {
          main: black.main,
          dark: black.dark,
        },
        white: {
          main: white.main,
        },
        green: green.main,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
