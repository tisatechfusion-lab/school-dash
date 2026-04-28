export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      spacing: {
        gap: "24px",
        layout: "32px",
      },

      colors: {
        body: "#F4F6FB",
        sidebar : "#FFFFFF",

        primary:{
          500: "#5152EB",
          600: "#5455E4",
          700: "#5856E7",
        },
         text: {
          main: "#040404",
        },
         active: {
          bg: "#E5E5FF",
        },
      },

    },
  },
  plugins: [],
}