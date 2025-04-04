/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradientBlur: 'gradientBlur 15s ease-in-out infinite',
      },
      keyframes: {
        gradientBlur: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10%) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};