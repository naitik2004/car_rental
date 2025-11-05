/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          ivory: "#FAF7F2",
          gold: "#C5A572",
          charcoal: "#2E2A24",
          blueAccent: "#5AA9E6",
          softGray: "#E6E1D9",
        },
        fontFamily: {
          heading: ["Playfair Display", "serif"],
          body: ["Inter", "sans-serif"],
        },
        boxShadow: {
          retro: "0 4px 15px rgba(0,0,0,0.08)",
        },
      },
    },
    plugins: [],
  };
  