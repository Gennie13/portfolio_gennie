import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";


/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#e63946",   // Улаан
          black: "#1d1d1d", // Гүн хар
          white: "#ffffff", // Цагаан
        },
      },
      animation: {
        infinite_scroll: "infinite_scroll 20s linear infinite",
      },
      keyframes: {
        infinite_scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;