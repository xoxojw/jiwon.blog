/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6E89D0",
          300: "#B3C2EA"
        },
        secondary: {
          DEFAULT: "#F9BF8b",
          300: "#FCD9BB",
        },
      },
      dropShadow: {
        "blue": "0 0 15px rgba(110, 137, 208, 1)",
        "yellow": "0 0 15px rgba(249, 191, 139, 1)"
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
        "bounce-slow": "bounce 1.2s infinite",
      }
    },
  },
  plugins: [require("@tailwindcss/typography"),],
}
