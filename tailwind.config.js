// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(autocomplete|badge|breadcrumbs|button|card|chip|divider|input|navbar|pagination|select|spinner|toggle|tabs|popover|ripple|form|listbox|scroll-shadow).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
