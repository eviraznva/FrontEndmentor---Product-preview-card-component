/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cyan: {
        500: "hsl(158, 36%, 37%)",
        600: "hsl(158, 36%, 18%)",
      },
      cream: "hsl(30, 38%, 92%)",
      white: "hsl(0, 0%, 100%)",
      blue: {
        300: "hsl(228, 12%, 48%)",
        900: "hsl(212, 21%, 14%)",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      fraunces: ["Fraunces"],
    },
    extend: {
      screens: {
        ssm: "375px",
      },
    },
  },
  plugins: [],
};
