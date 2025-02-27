/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c79f0e',
          dark: '#a38409',
        },
      },
    },
  },
  plugins: [],
};