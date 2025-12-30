/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7F9746',  // Your specified green
          dark: '#6A7F3A',     // Darker shade for hover states
          light: '#B6CE63',    // Your specified light green for gradients
          lighter: '#C8E6C9',  // Even lighter for subtle backgrounds
        },
        secondary: {
          DEFAULT: '#333333',
          light: '#666666',
          lighter: '#999999',
        },
        accent: {
          red: '#E53935',      // Traffic signal red
          orange: '#FF9800',   // Traffic signal orange  
          yellow: '#FFC107',
        },
        bg: {
          light: '#F5F5F5',
          white: '#FFFFFF',
          cream: '#FAFAF8',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7F9746, #B6CE63)',
        'gradient-primary-radial': 'radial-gradient(circle, #7F9746, #B6CE63)',
      },
    },
  },
  plugins: [],
}
