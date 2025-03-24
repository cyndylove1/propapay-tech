/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Labil Grotesk Basic"],
      },

      colors: {
        white: "#FFFFFF",
        "neutral-base": "#1C1D1E",
        "neutral-50": "#F7F8F9",
        "neutral-100": "#E6E8EA",
        "neutral-200": "#DEE1E4",
        "neutral-500": "#888D93",
        "neutral-600": "#6D7177",
        "neutral-800": "#36393D",
        
        "neutral-700": "#4E5257",
        "brand-base": "#12725B",
        "brand-50": "#EEFBF6",
        "brand-100": "#D6F5E6",
        "brand-200": "#AFEBD2",
        "brand-500": "#33A691",
        
        "negative-50": "#FDF3F3",
        "negative-500": "#D84E4E",
        "positive-50": "#F1FCF5",
        "positive-500": "#32B56A",
        "warning-50": "#FFFFEA",
        "warning-500": "#FFC107",
        "melRose-500": "#7C58FA",
        darkGray: "#2E2E2E",
        primaryColor: "#0F0F10",
        grey: "#EAEDF2",
        tertiaryColor: "#888E9E",
      },
    },
  },
  plugins: [],
};
