// tailwind.config.js
module.exports = {
  darkMode: "class", // حالت دارک با اضافه کردن کلاس فعال میشه
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2C7EF8",
          "hover-light": "#075CD9",
          "on-light": "#FFFFFF",
          "background-light": "#FFFFFF",
          "on-background-light": "#191C1E",
          "surface-light": "#FFFFFF",
          "neutral-9": "#F5F6F8",
          dark: "#3A86F8",
          "hover-dark": "#6BA4FA",
          "on-dark": "#FFFFFF",
          "background-dark": "#040810",
          "on-background-dark": "#E6E9EF",
          "surface-dark": "#E6E9EF",
        },
        secondary: {
          "background-dark": "#0B192D",
        },
      },
    },
  },
  plugins: [],
};
