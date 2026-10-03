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
        forest: {
          DEFAULT: '#173D2B',
          deep: '#102A1F',
          dark: '#0B1510',
          muted: '#2A4D3B',
        },
        olive: {
          DEFAULT: '#596B32',
          light: '#6F853E',
          dark: '#455427',
        },
        leaf: {
          DEFAULT: '#7FA63A',
          light: '#94BF45',
          soft: '#E8EFE0',
        },
        lime: {
          DEFAULT: '#B5C94A',
          soft: '#F2F7D9',
        },
        sun: {
          DEFAULT: '#E8C547',
          light: '#F3D86E',
          glow: 'rgba(232, 197, 71, 0.22)',
        },
        gold: {
          DEFAULT: '#D9A441',
          light: '#E5BA63',
          dark: '#B88228',
        },
        cream: {
          DEFAULT: '#F7F3E8',
          subtle: '#EFE9D8',
          card: '#FCFAF4',
        },
        'warm-white': '#FFFDF5',
        charcoal: {
          DEFAULT: '#121714',
          muted: '#2F3832',
          light: '#526156',
        },
        dark: {
          bg: '#0B1510',
          card: '#111F17',
          cardElevated: '#172920',
          border: 'rgba(255, 255, 255, 0.08)',
          textPrimary: '#FFFDF5',
          textMuted: '#9FB3A8',
        },
        light: {
          bg: '#F7F3E8',
          card: '#FFFDF5',
          cardElevated: '#FFFFFF',
          border: 'rgba(18, 23, 20, 0.08)',
          textPrimary: '#121714',
          textMuted: '#526156',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Newsreader', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-lift': '0 20px 40px -15px rgba(23, 61, 43, 0.12)',
        'soft-card': '0 10px 30px -8px rgba(18, 23, 20, 0.06)',
        'sun-glow': '0 0 50px rgba(232, 197, 71, 0.2)',
        'leaf-glow': '0 0 50px rgba(127, 166, 58, 0.15)',
        'dark-lift': '0 20px 45px -12px rgba(0, 0, 0, 0.6)',
        'dark-card': '0 10px 30px -8px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'gentle-float': 'gentleFloat 8s ease-in-out infinite',
        'fade-slow': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
}
