/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'figma-shadow': '0 12px 32px rgba(51, 51, 51, 0.06)',
      },
      colors: {
        n: {
          1: '#19714975',
          2: '#197149',
          3: '#FAD7DA',
          4: '#252B30',
          5: '#E63946',
        },
      },
    },
  },
  plugins: [],
}
