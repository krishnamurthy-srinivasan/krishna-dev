module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        wave: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' }, // Diagonal scroll
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        wave: 'wave 30s linear infinite',
      },
    },
  },
  plugins: [],
};
