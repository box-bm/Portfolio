const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      // defaultTheme: "light", // default theme from the themes object
      // defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          primary: "#2364AA",
          secondary: "#243E36",
          error: "#FE5F55",
        },
        dark: {
          primary: "#2364AA",
          secondary: "#243E36",
          error: "#FE5F55",
        },
      }
    })
  ],
}

