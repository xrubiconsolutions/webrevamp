const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005700",
        secondary: "#F8FFF4",
        background: "#232325",
        body: "#222D33",
        blak: "#000000",
        "blak-100": "#21312a",
      },
      backgroundImage: (theme) => ({
        "goal-pattern": "url('/svg/pattern.svg')",
        "value-pattern": "url('/svg/valueBg.svg')",
        "header-bg": "url('/svg/bg.svg')",
      }),
      animation: {
        joined: "joined 3s ease-in-out",
        joinedColor: "joinedColor 3s ease-in-out",
      },
      keyframes: {
        joined: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(150px, -110px)" },
        },
        joinedColor: {
          "0%": { backgroundColor: colors.primary, color: colors.white },
          "100%": { backgroundColor: colors.white, color: colors.primary },
        },
      },
      gridTemplateColumns: {
        "why-layout": "repeat(4, minmax(0, 310px))",
      },
      lineHeight: {
        12: "3rem",
        "extra-loose": "3.5rem",
      },
      fontFamily: {
        playball: ["Playball", "cursive"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
