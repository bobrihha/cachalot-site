/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#020617', // Черная бездна (Фон)
          900: '#0B1121', // Темно-синяя вода
          800: '#151e32', // Интерфейс
        },
        neon: {
          cyan: '#06b6d4', // Акцент (Биолюминесценция)
          purple: '#7c3aed', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
