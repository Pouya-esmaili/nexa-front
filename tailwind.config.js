/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        highlight: "#FFE52C",

        serviceCard: "#F7F6F9",

        servicePurple: "#8F27FF",

        iconBg: "#FFFFFF",
      },

      backdropBlur: {
        30: "30px",
      },

      boxShadow: {

        card: "0px 10px 15px 0px #00000040",

   
        serviceCard: "0px 4px 4px 0px #00000040",


        serviceIcon: "0px 4px 4px 0px #00000040",
      },
    },
  },

  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};