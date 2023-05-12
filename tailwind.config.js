/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'flip-scale-2': 'flip-scale-2-ver-left 1s linear both'
      },
      keyframes: {
        'flip-scale-2-ver-left': {
          '0%': {
            'transform': 'translateX(0) rotateY(0) scale(1);',
            'transform-origin': '0% 50%;',
          },
          '50%': {
            'transform': 'translateX(-50%) rotateY(90deg) scale(2);',
            'transform-origin': '50% 50%;'
          },
          '85%': {
            'transform': 'translateX(-100%) rotateY(180deg) scale(1);',
            'transform-origin': '100% 50%;'
          },
          '100%': {
            transform: 'none',
            opacity: 1,
          },
        }
      },
      width: {
        '1200': '1200px'
      },
      textColor: {
        'grey-1': '#404145',
        'grey-2': '#62646a',
      },
      backgroundColor: {
        primary: '#f5f5f5',
        secondary: '#1266dd',
        tertiary: '#0d084d'
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.animation-container': {
          perspective: '1000px',
        },
        '.flip-scale-2': {
          'will-change': 'transform',
        },
      })
    },
  ],
}
