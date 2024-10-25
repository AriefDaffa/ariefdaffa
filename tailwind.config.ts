import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        [`c-white`]: '#fffffe',
        [`c-headline`]: '#272343',
        [`c-paragraph`]: '#2d334a',
        [`c-red`]: '#eb413c',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
