/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#030712',
        deep: '#080e1e',
        surface: '#0f172a',
        surfaceHover: '#1e293b',
        borderGlass: 'rgba(255, 255, 255, 0.08)',
        cyanGlow: '#00f0ff',
        purpleGlow: '#a855f7',
        blueGlow: '#3b82f6',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-spin': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
