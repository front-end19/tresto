/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkPink: '#F7485D',
        darkestPink: '#A72535',
        darkestGray: '#2D3236',
        grayColor: '#52525B',
        lightBgInput: '#F8F8F8',
        blueSky: '#B2E9F3',
        darkBlue: '#386FFB',
        lightBlue: '#00B6DA',
        lightWhite: '#ffffffdb',
        darkYellow: '#F59E0B',
      },
      keyframes: {
        zoomIn: {
          // transform-x-[-50%] transform-y-[-50%]
          '0%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.2) '},
          '100%': { transform: 'scale(1) '}
        }
      },
      animation: {
          zoomIn: 'zoomIn 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

