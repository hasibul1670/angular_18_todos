/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#007382",
        loginBgColor: "#F8F8F8", 
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
