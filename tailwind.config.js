/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F5EC3F',
        'gold-light': '#F7F07F',
        'gold-dark': '#E5DC2F',
        gray: {
          custom: '#d9d9d9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};