/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ["Varela Round", "sans-serif"], // Add your Adobe font here
      },
    },
  },
  plugins: [],
};
