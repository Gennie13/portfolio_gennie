import { transform } from "typescript";

const config = {
  plugins: ["@tailwindcss/postcss"],
};
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/Skills.tsx", 
  ],
  theme: {
    extend: {
      keyframes: {
        infinite_scroll: {
          "100%": {transform: "translateX(-100%)"},

        }
      },
      animation:{
        infinite_scroll: "infinite_scroll 10s linear infinite"},
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config;
