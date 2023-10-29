/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#fdfdff",
          "200": "#1e1e1e",
          "300": "#1a1a1a",
          "400": "#181818",
          "500": "rgba(0, 0, 0, 0.5)",
          "600": "rgba(0, 0, 0, 0.75)",
        },
        darkslategray: "rgba(57, 61, 63, 0.6)",
        dimgray: "#696868",
        steelblue: "#007bb0",
        goldenrod: "#ffcf45",
        darkmagenta: "#850899",
        darkgoldenrod: "#ba8a00",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        inconsolata: "Inconsolata",
        jost: "Jost",
        "icomoon-free": "IcoMoon-Free",
        "helvetica-neue": "'Helvetica Neue'",
      },
      borderRadius: {
        xl: "20px",
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      mid: "17px",
      "5xl": "24px",
      "3xl": "22px",
      "101xl": "120px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
