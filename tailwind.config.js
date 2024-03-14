/** @type {import('tailwindcss').Config} */
const {
  platformSelect,
  platformColor,
  hairlineWidth,
  pixelRatio,
  fontScale,
  getPixelSizeForLayoutSize,
  roundToNearestPixel,
} = require("nativewind/dist/theme-functions");
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "1rem",
        "2xl": "24px",
      },
      colors: {
        blood: "#F23E50",
      },
      fontFamily: {
        example: ["ui-sans-serif"],
        myFont: ["sans-serif"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "ui-sans-serif",
        }),
      },
    },
  },
  plugins: [],
};
