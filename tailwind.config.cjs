/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F52B1D',
        gray: {
          text: '#666666',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
