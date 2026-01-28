/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#0066CC',
        'medical-green': '#00A86B',
        'medical-red': '#DC143C',
        'medical-gray': '#F5F5F5',
      }
    },
  },
  plugins: [],
}
