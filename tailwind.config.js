const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          ...colors.blue,
          50: '#e6f0ff',
          100: '#cce1ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0077FF', // Base Azul Elétrico
          600: '#005ecc',
          700: '#004799',
          800: '#002f66',
          900: '#001833',
        },
        cyan: {
          ...colors.cyan,
          50: '#e6f9ff',
          100: '#ccefff',
          200: '#99e0ff',
          300: '#66d1ff',
          400: '#33c2ff',
          500: '#00BFFF', // Base Ciano Brilhante
          600: '#0099cc',
          700: '#007399',
          800: '#004d66',
          900: '#002633',
        },
        slate: {
          ...colors.slate,
          50: '#F8F9FA',  // Branco Gelo
          200: '#E2E8F0', // Prata Claro
          500: '#64748B', // Cinza Aço
          900: '#12181F', // Grafite Profundo
        }
      }
    },
  },
  plugins: [],
}
