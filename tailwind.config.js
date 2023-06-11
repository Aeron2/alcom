/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        public: ["Public Sans", "inter", "sans-serif"],
        dancing: ["Dancing Script", "cursive", "sans-serif"],
        heebo: ["Heebo", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
