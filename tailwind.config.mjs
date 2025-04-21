/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        'xs': '400px', // Crée un breakpoint "xs",
      },
      backgroundImage: {
        'map': "url('/map.jpeg')",
        'panorama': "url('/panorama-paris-sunset copie.jpg')",
      }
    },
  },
  plugins: [],
};
