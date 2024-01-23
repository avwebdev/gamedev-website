/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontSize: {
        "4.5xl": "2.6em",
      },
      width: {
        132: "33em",
        176: "44em",
      },
    },
    colors: {},
  },
  plugins: [require("flowbite/plugin")],
};
