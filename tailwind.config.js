/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          gainsboro: {
            "100": "#e5e5e5",
            "200": "#d9d9d9",
          },
          black: "#000",
          darkorange: {
            "100": "#ff9526",
            "200": "rgba(255, 149, 38, 0.25)",
          },
          tomato: {
            "100": "#ef4423",
            "200": "rgba(239, 68, 35, 0.25)",
          },
          midnightblue: {
            "100": "#2a3492",
            "200": "rgba(42, 52, 146, 0.25)",
          },
        },
        spacing: {},
        fontFamily: {
          "space-mono": "'Space Mono'",
          "pixelify-sans": "'Pixelify Sans'",
        },
        borderRadius: {
          "6xl": "25px",
          xl: "20px",
        },
      },
      fontSize: {
        "7xl": "26px",
        "31xl": "50px",
        "3xl": "22px",
        "26xl": "45px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  
