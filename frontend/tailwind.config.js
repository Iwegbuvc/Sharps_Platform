/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        garamond: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
