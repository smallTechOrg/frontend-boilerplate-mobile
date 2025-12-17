/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6200EE",
        InkBlack:'#001219',
        DarkTeal: "#005F73",
        DarkCyan: "#0A9396",
        PearlAqua: "#94D2BD",
        VanillaCustard: "#E9D8A6",
        GoldenOrange: "#EE9B00",
        BurntCaramel: "#CA6702",
        RustySpice:"#BB3E03",
        OxidisedIron: "#AE2012",
        BrownRed: "#9B2226",
      },
    },
  },
  plugins: [],
}