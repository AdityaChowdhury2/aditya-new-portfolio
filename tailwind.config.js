/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {

    extend: {
      screens: {
        xl: '1024px',
        lg: "884px",
        md: '720px',
      },
      container: {
        center: 'true',
        // TODO: fixed screen
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}