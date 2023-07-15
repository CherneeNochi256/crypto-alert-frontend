/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1200px',
        },
      },
    extend: {
      colors: {
        'my-black': '#0f051d',
        'my-purple': '#130749',
        'my-white': '#f3f2f4',
      }
    },
  },
  plugins: [

  ],
}

