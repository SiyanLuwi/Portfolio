/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        vastShadow: ["Vast Shadow", "serif"],
        oswald: ["Oswald", "sans-serif"]
        // Add other custom font families here if needed
      },
      colors: {
        headerColor: "#404040",
        hoverColor: "#e3d5ca",
        bgColor: "#F4F3EE",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtil = {
        ".scrollbarthin": {
          scrollbarWidth: "thin",
          scollbarColor: "rgb(89, 92, 89)",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },

          "&::-webkit-scrollbar-thumb": {
            borderRadius: "20px",
            backgroundColor: "gray",
            border: "2px solid white",
          },
        },
      };
      addUtilities(newUtil, ["responsive", "hover"]);
    },
  ],
};
