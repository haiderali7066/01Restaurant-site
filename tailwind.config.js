/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/close-up-delicious-chicken-meal 1.png')",
        'branch': "url('/img/pic.png')",
      },
      fontFamily:{
        fedro:['Federo'],
        monster:['Montserrat']
    }
    },
  },
  plugins: [],
}

