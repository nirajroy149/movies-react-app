/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#053B50",
        secondary_color: "#176B87",
        "app-cyan": "#64CCC5",
      },
    },
  },
  plugins: [],
};
