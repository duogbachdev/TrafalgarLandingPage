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
      backgroundImage: {
        'gradient': 'linear-gradient(223deg, #67C3F3 0%, #5A98F2 100%)',
      },
    },
    plugins: [],
  },
};