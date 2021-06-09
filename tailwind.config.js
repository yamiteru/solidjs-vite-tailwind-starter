module.exports = {
  mode: "jit",
  darkMode: false,
  purge: {
    enabled: true,
    content: ["./src/components/**/*.{ts,tsx,css}", "./src/pages/**/*.{ts,tsx,css}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#324CFF"
      }
    }
  },
};
