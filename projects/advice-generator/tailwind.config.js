/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: 'var(--light-cyan)',
          green: 'var(--neon-green)'
        }
      }
    }
  },
  plugins: []
}
