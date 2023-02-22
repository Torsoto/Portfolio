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
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  variants: {
    animation: ["motion-safe"],
  },
};
