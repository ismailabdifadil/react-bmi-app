/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#081854',
        backgroundColor: '#F4F3FF',
      },
      fontFamily:{
        inter: ['Inter']
      }
      
    },
  },
  plugins: [],
};
