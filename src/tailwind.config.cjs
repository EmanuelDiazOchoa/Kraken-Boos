const plugin = require('tailwindcss/plugin');

module.exports = {
 content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};