/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['"Raleway"', 'sans-serif'],
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
      keyframes: {
        'fade-slide-in-from-right': {
          from: { opacity: '0', transform: 'translateX(4rem)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-slide-up': {
          from: { opacity: '0', transform: 'translateY(4rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide-in-from-right':
          'fade-slide-in-from-right 0.5s ease-out forwards',
        'fade-in-slide-up': 'fade-in-slide-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
