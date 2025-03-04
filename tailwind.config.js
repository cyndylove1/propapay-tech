/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      "neutral-200": "#CFD2D1",
      "neutral-500": "#697170",
      "neutral-800": "#434747",
    },
    extend: {
      fontFamily: {
        'bodyFont': ["Labil Grotesk Basic"],
      },
    },
  },
  plugins: [require("daisyui")],
};
