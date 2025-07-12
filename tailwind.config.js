/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
