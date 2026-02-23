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

        // اضافه شده برای کارت services
        serviceCard: "#F7F6F9",

        // بنفش کنار کارت
        servicePurple: "#8F27FF",

        // بک آیکون
        iconBg: "#FFFFFF",
      },

      backdropBlur: {
        30: "30px",
      },

      boxShadow: {

        // shadow قبلی
        card: "0px 10px 15px 0px #00000040",

        // shadow services card
        serviceCard: "0px 4px 4px 0px #00000040",

        // shadow icon
        serviceIcon: "0px 4px 4px 0px #00000040",
      },

    },
  },

  plugins: [require('@tailwindcss/line-clamp')]
};