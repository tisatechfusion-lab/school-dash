export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      spacing: {
        2: "8px",
        3: "12px",   
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
      },
      

      colors: {
        body: "#F4F6FB",
        sidebar: "#FFFFFF",

        primary: {
          100: "#ECEFFC",
          200: "#E5E5FF",
          500: "#5152EB",
          900: "#001749",
        },

        brightBlue: {
          100: "#E3F2FF",
          300: "#7CC0FF",
          500: "#439DFD",
          700: "#1F7AE0",
        },

        grey: {
          50: "#FFFFFF",
          100: "#F8F8F9",
          200: "#F0F1F2",
          300: "#CECECE",
          400: "#B5B5B5",
          500: "#808080",
          600: "#717171",
          700: "#545454",
          800: "#343434",
          900: "#040404",
        },

        success: {
          50: "#F3FBF9",
          100: "#E7F8F2",
          200: "#CFF1E6",
          300: "#9FE3CD",
          400: "#70D5B3",
          500: "#10B981",
          600: "#0EA774",
          700: "#0B825A",
          800: "#085D41",
          900: "#053827",
        },

        warning: {
          50: "#FFFAF3",
          100: "#FFF3E7",
          200: "#FEDCCE",
          300: "#FDB89D",
          400: "#F9C56D",
          500: "#F59E0B",
          600: "#D98E0A",
          700: "#AB6F08",
          800: "#7B4F06",
          900: "#4A2F03",
        },

        error: {
          50: "#FEF5F6",
          100: "#FDECEC",
          200: "#FCDADA",
          300: "#F9B4B4",
          400: "#F58F8F",
          500: "#EF4444",
          600: "#D73D3D",
          700: "#A73030",
          800: "#782222",
          900: "#481414",
        },

        text: {
          black: "#040404",
          white: "#FFFFFF",
        },

        active: {
          bg: "#E5E5FF",
        },

        whiteOpacity: {
          10: "rgba(255,255,255,0.1)",
          20: "rgba(255,255,255,0.2)",
          30: "rgba(255,255,255,0.3)",
          40: "rgba(255,255,255,0.4)",
          50: "rgba(255,255,255,0.5)",
          60: "rgba(255,255,255,0.6)",
          70: "rgba(255,255,255,0.7)",
          80: "rgba(255,255,255,0.8)",
          90: "rgba(255,255,255,0.9)",
        },
      },

      backgroundImage: {
        'primary-gradient': 'linear-gradient(45deg, #5455E4, #2563EB)',
      },

    },
  },
  plugins: [],
}