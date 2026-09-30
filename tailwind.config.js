/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sjiBlue: {
          50: '#f0f6fc',
          100: '#e1eef9',
          200: '#bfdbf3',
          300: '#8ec0eb',
          400: '#5da0e1',
          500: '#3E7DBF', // Official SJI Blue
          600: '#32669e',
          700: '#27507c',
          800: '#1d3c5e',
          900: '#152940',
        },
        sjiOrange: {
          50: '#fef7ee',
          100: '#fdeedc',
          200: '#fbd8b8',
          300: '#f7bd8b',
          400: '#f29853',
          500: '#EA7826', // Official SJI Orange
          600: '#d46519',
          700: '#b04d16',
          800: '#8d3e18',
          900: '#733517',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sji-subtle': '0 4px 20px -2px rgba(62, 125, 191, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'sji-hover': '0 12px 30px -4px rgba(62, 125, 191, 0.14), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'sji-orange': '0 10px 25px -3px rgba(234, 120, 38, 0.25)',
      }
    },
  },
  plugins: [],
}
