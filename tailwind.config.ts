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
        black: '#151515',
        white: '#fafafa',
        footer: '#a0b0b5',
      },
      fontFamily: {
        base: ['var(--base)'],
        retro: ['var(--retro)'],
        munro: ['var(--munro)'],
      },
    },
  },
  plugins: [],
};
export default config;
