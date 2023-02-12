module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1072CC",
        },
        dark: {
          DEFAULT: "#151516",
          400: "#262626",
          500: "#121212",
          600: "#1F1F20",
        },
        gray: {
          DEFAULT: "rgba(255,255,255,0.6)",
        },
        muted: {
          DEFAULT: "#282727",
          400: "#484444",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "500px",
          "2xl": "500px",
          md: "500px",
        },
      },
    },
    fontFamily: {
      sans: ["Outfit", " sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
