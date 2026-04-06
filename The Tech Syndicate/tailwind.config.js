/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f8cff',
        secondary: '#7c5cff',
        teal: '#2dd4bf',
        dark: {
          bg: '#070b16',
          card: '#0d1326',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-funky': 'linear-gradient(135deg, #4f8cff, #7c5cff, #2dd4bf)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
