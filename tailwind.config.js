/** @type {import('tailwindcss').Config} */
module.exports = {
  // disable to remove conflict when using tailwind and regular css for now
  darkMode: ["class", '[data-mode="dsa--dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      currentColor: "current",
      inherit: "inherit",
      black: "black",
      white: "white",

      "blue-100": "var(--dsa-color-blue-100)",
      "blue-200": "var(--dsa-color-blue-200)",
      "blue-300": "var(--dsa-color-blue-300)",
      "blue-400": "var(--dsa-color-blue-400)",
      "blue-500": "var(--dsa-color-blue-500)",
      "blue-600": "var(--dsa-color-blue-600)",
      "blue-700": "var(--dsa-color-blue-700)",
      "blue-800": "var(--dsa-color-blue-800)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
