/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#582C4D",
        secondary: "#A26769",
        accent: "#D5B9B2",
        light: "#ECE2D0",
        lightest: "#BFB5AF",
      },
    },
  },
  plugins: [],
};
