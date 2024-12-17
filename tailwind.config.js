/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        intercalaire:
          "polygon(0% 27%, 31% 28%, 60% 1%, 100% 0%, 100% 100%, 1% 100%)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        Prompt: ["Prompt", "sans-serif"],
      },
      backgroundImage: {
        'iphone-wallpaper': "url('/iphone.png')",
        'sunsetparis-wallpaper': "url('/panorama-paris-sunset.jpg')"
      },
    },
  },
  plugins: [],
};
