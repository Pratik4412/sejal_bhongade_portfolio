/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C8F31D",
        "primary-50": "#F9FEE7",
        "primary-100": "#F3FCCF",
        "primary-200": "#E8FA9E",
        "primary-300": "#DCF76E",
        "primary-400": "#D0F53D",
        "primary-600": "#9DC20A",
        "primary-700": "#769108",
        "primary-800": "#4F6105",
        "primary-900": "#273003",
        "primary-950": "#141801",
        /* Dark Theme Base */
        "header-bg": "#0D0D0D",
        "footer-bg": "#020202",
        "body-bg": "#3D3D3D",
        "bg-dark": "#1c1c1c",
        "text-light": "#ffffff",
        "text-muted": "#9ca3af",
      },
      fontFamily: {
        primary: ["Outfit", "sans-serif"],
        secondary: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
