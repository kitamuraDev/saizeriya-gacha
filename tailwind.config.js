/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
