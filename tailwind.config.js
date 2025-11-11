/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'map-bg': '#e8e4d9',
        'map-water': '#a8c8d8',
        'map-border': '#b8b4a9',
        'sidebar-bg': '#f5f5f5',
        'sidebar-border': '#e0e0e0',
        'ukraine-blue': '#005BBB',
        'ukraine-yellow': '#FFD500',
        'marker-red': '#dc2626',
        'modal-bg': 'rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
}