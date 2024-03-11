/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "#ffffff",
      onboarding: "#002330",
      primary: {
        light: "#f2fafd",
        DEFAULT: "#0090c7",
        dark: "#005677",
        lighter: "#00ADEF",
      },
      accent: {
        light: "#fff9f1",
        DEFAULT: "#da7b07",
        dark: "#c24b02",
      },
      green: {
        light: "#e1eecf",
      },
      warning: {
        DEFAULT: "#d40505",
      },
    },
    fontFamily: {
      display: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        ...colors
      }
    },
  },
  plugins: [],
};
