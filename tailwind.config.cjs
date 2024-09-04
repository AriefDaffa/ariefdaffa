/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Specify all relevant file types
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb413c',
        gray: {
          text: '#666666',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%', // Override default max width
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
