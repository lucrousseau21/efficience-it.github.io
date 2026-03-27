/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./quizz_docker.html", "./assets/js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

