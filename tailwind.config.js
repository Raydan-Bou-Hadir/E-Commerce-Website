/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg':'1156px',
        'xlg': '1280px',
        'xsm': '375px',
      },
      fontFamily: {
        latin: ['Qwitcher Grypen', 'cursive'],
      },
    },
  },
  plugins: [],
}

