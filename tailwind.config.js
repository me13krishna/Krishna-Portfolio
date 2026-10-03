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
        void: '#08090C',
        surface: '#0E1015',
        surfaceHover: '#151821',
        card: '#111319',
        borderMuted: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(255, 85, 0, 0.35)',
        
        // Energetic Ember & Amber Palette
        ember: {
          DEFAULT: '#FF5500',
          light: '#FF6E26',
          dark: '#E04700',
          glow: 'rgba(255, 85, 0, 0.25)',
        },
        amberGold: {
          DEFAULT: '#FFAA00',
          light: '#FFBE33',
          dark: '#CC8800',
          glow: 'rgba(255, 170, 0, 0.25)',
        },
        ivory: {
          DEFAULT: '#F5F5F7',
          dim: '#D1D3DC',
          muted: '#8A8D9B',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
