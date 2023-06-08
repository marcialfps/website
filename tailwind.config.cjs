/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: "#c6ae59",
        darkGrey: "#313131",
        lightGrey: "#afafaf",
        grey: "#1e1e1e",
        yellowTransparent: "rgba(198, 174, 89, 0.2)",
        lightGreyTransparent: "rgba(175, 175, 175, 0.2)",
      },
      fontFamily: {
        sans: ["Roboto"],
        serif: ["Oswald"],
      },
    },
  },
  plugins: [],
};
