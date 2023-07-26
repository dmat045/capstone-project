module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#1e81b0",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#CC2B5E",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
