const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        Noto_Sans: ['Noto Sans JP'],
      },
      colors: {
        theme: {
          light: '#ffffff',
          medium: '#cccccc',
          DEFAULT: '#242424',
          dark: '#111111',
        },
        primary: {
          DEFAULT: '#242424',
        },
      },
    },
  },

  plugins: [],
};
