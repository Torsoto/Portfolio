/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
