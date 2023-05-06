/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      softred: '#EFAC91',
      brown: '#C27947',
      lightgreen: '#AFBBA2',
      base: '#F8EDE6',
      grassgreen: '#8E9D7D',
      cream: '#F9F1F0',
    },
    extend: {},
  },
  plugins: [],
};
