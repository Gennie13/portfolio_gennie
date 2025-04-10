// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        infinite_scroll: "infinite_scroll 10s linear infinite",
      },
      keyframes: {
        infinite_scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
};
