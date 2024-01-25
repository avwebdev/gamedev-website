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
        84: "21em",
        88: "22em",
        92: "23em",
        100: "25em",
        104: "26em",
        108: "27em",
        112: "28em",
        132: "33em",
        176: "44em",
      },
    },
    colors: {
      cello: {
        50: "#f5f7fa",
        100: "#e9edf5",
        200: "#cfd8e8",
        300: "#a5b8d4",
        400: "#7492bc",
        500: "#5375a4",
        600: "#405c89",
        700: "#344b70",
        800: "#2e405e",
        900: "#2a374e",
        950: "#1c2435",
      },
      "french-pass": {
        50: "#f0faff",
        100: "#dff5ff",
        200: "#c2f0ff",
        300: "#79e1ff",
        400: "#32d3fe",
        500: "#07bef0",
        600: "#009acd",
        700: "#007aa6",
        800: "#036789",
        900: "#095571",
        950: "#06364b",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
