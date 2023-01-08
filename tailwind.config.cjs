/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'theme-1': '#F87070',
      'theme-2': '#70F3F8',
      'theme-3': '#D881F8',
      'lilac-blue': '#D7E0FF',
      'dark-blue-1': '#1E213F',
      'dark-blue-2': '#161932',
      'light-gray': '#EFF1FA',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['"Kumbh Sans"', 'sans-serif'],
      serif: ['"Roboto Slab"', 'serif'],
      mono: ['"Space Mono"', 'monospace'],
    },
    timer: {
      percentage: 80,
    },
    extend: {},
  },
  plugins: [],
};
