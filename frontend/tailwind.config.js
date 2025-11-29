/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          black: '#0a0a0a',
          charcoal: '#121212',
          gold: '#d4af37',
          'gold-muted': '#c5a028',
          'text-main': '#e0e0e0',
          'text-muted': '#a0a0a0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #c5a028 100%)',
      }
    },
  },
  plugins: [],
}
