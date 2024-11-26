/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Rubik", "sans-serif"],
        titleFont: ["Itim", "sans-serif"]
      }
    },
    screens: {
      xs: "520px",
      pl: "720px",
      nt: "1020px",
      km: "1250px"
    }
  },
  plugins: [],
}