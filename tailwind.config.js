/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",        // App Router files
      "./pages/**/*.{js,ts,jsx,tsx}",      // Pages directory (if using)
      "./components/**/*.{js,ts,jsx,tsx}", // Reusable components
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#1E3A8A',   // Custom primary blue
          secondary: '#F59E0B', // Custom amber
          accent: '#10B981',    // Green/emerald
          dark: '#111827',      // Gray-900
          light: '#F3F4F6',     // Gray-100
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Custom font (optional)
        },
      },
    },
    plugins: [],
  }
  