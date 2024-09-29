/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        n: {
          1: '#FFFFFF',
          2: '#FFB568',
          3: '#FAD7DA',
          4: '#252B30',
          5: '#E63946',
        },
      },
    },
  },
  plugins: [],
}
