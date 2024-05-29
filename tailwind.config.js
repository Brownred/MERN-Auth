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
    extend: {},
    backgroundImage: {
      'signup': 'url("/signup-bg.jpg")'
    },
    fontFamily: {
      poppins: ['poppins', ...defaultTheme.fontFamily.sans ]
    },
    boxShadow: {},
    // keyframes: {},
    // animation: {},
  },
  darkMode: "class",
  plugins: [nextui() ]
}


