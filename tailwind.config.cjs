/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lightGrey: "#D9D9D9",
        black: "#0F0F0F",
        blue: "#1472FF",
        yellow: "#C6AE59",
        grey: "#AFAFAF",
        darkGrey: "#313131",
        yellowTransparent: "rgba(198, 174, 89, 0.7)",
        greyTransparent: "rgba(175, 175, 175, 0.7)",
        darkGreyTransparent: "rgba(49, 49, 49, 0.7)",
      },
      fontFamily: {
        sans: ["Roboto"],
        serif: ["Roboto Slab Variable"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
};
