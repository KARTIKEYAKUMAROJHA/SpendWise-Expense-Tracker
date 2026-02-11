/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0f0f0f',
        'secondary-bg': '#1a1a1a',
        'text-primary': '#e5e5e5',
        'accent': '#22c55e',
      },
    },
  },
  plugins: [],
}
