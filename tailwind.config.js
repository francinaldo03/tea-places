/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        tranquilo: {
          light: '#d1fae5',
          DEFAULT: '#059669',
          dark: '#065f46',
        },
        moderado: {
          light: '#fef3c7',
          DEFAULT: '#d97706',
          dark: '#92400e',
        },
        agitado: {
          light: '#fee2e2',
          DEFAULT: '#dc2626',
          dark: '#7f1d1d',
        },
      },
    },
  },
  plugins: [],
}
