/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2FB',
          100: '#D6DEF6',
          200: '#AABBEA',
          300: '#7A90D8',
          400: '#4C62B8',
          500: '#2A44A0',
          600: '#1B3380',
          700: '#0F2667',
          800: '#0B1F4B',
          900: '#071636',
          950: '#040D24',
        },
        brand: {
          50: '#FEEFEF',
          100: '#FDD9D8',
          200: '#FBAFAE',
          300: '#F57678',
          400: '#EE3B41',
          500: '#E11D2E',
          600: '#C1121F',
          700: '#9E0F1B',
          800: '#7B0E17',
          900: '#5A0C12',
        },
        gold: '#F0B429',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(11, 31, 75, 0.18)',
        lift: '0 22px 45px -12px rgba(11, 31, 75, 0.35)',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        marqueeLeft: 'marqueeLeft 45s linear infinite',
        marqueeRight: 'marqueeRight 55s linear infinite',
      },
    },
  },
  plugins: [],
};
