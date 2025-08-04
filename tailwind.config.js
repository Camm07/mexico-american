/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Puedes llamar así en tus clases: font-sans (para body), font-title (para headings)
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        title: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#1C3A59',    // Azul oscuro
        secondary: '#6E7B8B',  // Gris medio
        accent: '#D9450F',     // Rojo-anaranjado
        background: '#F7F8FA', // Blanco muy claro
        // Puedes agregar más si lo necesitas...
      },
    },
  },
  plugins: [],
};
