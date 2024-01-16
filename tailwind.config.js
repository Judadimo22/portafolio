/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'fondo-imagen': "url('/src/assets/imagenFondo.jpg')",
      }),
    },
    fontFamily: {
      vt3: ['vt323', 'sant-serif']
    }
  },
  plugins: [],
}