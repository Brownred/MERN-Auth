import {nextui} from "@nextui-org/theme";
import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
    extend: {
      colors: {
      'orange': '#F54748',
      'dark': '#191919',
      'yellow': '#FDC55E'
    },
    },
    backgroundImage: {
      'signup': 'url("/signup-bg.jpg")'
    },
    fontFamily: {
      poppins: ['poppins', ...defaultTheme.fontFamily.sans ]
    },
    boxShadow: {},
    keyframes: {
      'fadeInOut': {
        '0%, 100%': { opacity: '0' },
        '10%, 90%': { opacity: '1' },
      },
    },
    animation: {
      'fadeInOut': 'fadeInOut 3s forwards',
    },
  },
  darkMode: "class",
  plugins: [nextui() ]
}


