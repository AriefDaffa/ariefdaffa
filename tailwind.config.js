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
      // keyframes: {
      //   floating: {
      //     '0%': { transform: 'translateY(0px)' },
      //     '50%': { transform: 'translateY(15px)' },
      //     '100%': { transform: 'translateY(-0px)' },
      //   },
      // },
      // animation: {
      //   floating: 'floating 3s ease-in-out infinite',
      // },
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
