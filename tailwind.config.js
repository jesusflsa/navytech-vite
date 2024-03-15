/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#000816",
        secondary: "#003BA4",
      },
      colors: {
        primary: "#ffffff",
        link: "#003BA4",
      },
    },
  },
  plugins: [],
};
