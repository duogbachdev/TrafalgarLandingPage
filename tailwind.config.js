/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        Mulish: ['Mulish', 'sans-serif'],
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        slideUp: 'slideUp .4s ease-in',
      },
    },
    plugins: [],
  },
};