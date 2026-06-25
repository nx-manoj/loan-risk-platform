/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#7c8dff",
          500: "#596fff",
          600: "#4458f7",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
