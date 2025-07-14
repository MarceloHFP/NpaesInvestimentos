/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // ajustado para o seu diretório de código
  ],
  theme: {
    extend: {
       keyframes: {
        'slide-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-from-right': 'slide-from-right 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
