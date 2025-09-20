/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'InterMedium': ['InterMedium'],
        'InterLight': ['InterLight'],
        'InterSemiBold': ['InterSemiBold'],
        'InterRegular': ['InterRegular'],

      },
      flex: {
        "25%":"0 0 25%",
        "33%":"0 0 33%",
      }
    },
  },
  plugins: [],
}
