/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#007382", // Add your custom color with a name (e.g., customGreen)
      },
    },
  },
  plugins: [],
};
