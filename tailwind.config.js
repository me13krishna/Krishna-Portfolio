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
        obsidian: '#0E0E10',
        surface: '#151518',
        surfaceElevated: '#1C1C21',
        surfaceHover: '#23232A',
        borderSubtle: 'rgba(255, 255, 255, 0.08)',
        borderCard: 'rgba(255, 255, 255, 0.06)',
        
        // Warm Cream & Linen Typography
        linen: {
          DEFAULT: '#F7F6F2',
          dim: '#E3E1D8',
          muted: '#9B988E',
          faint: '#65635C',
        },

        // Soft Amber-Gold & Natural Accents
        amberGold: {
          DEFAULT: '#E2A866',
          light: '#ECC08C',
          dark: '#B87F40',
          glow: 'rgba(226, 168, 102, 0.15)',
        },

        // Muted Sage & Olive (matching his jacket & outdoor tree)
        sage: {
          DEFAULT: '#728A7C',
          light: '#8FA699',
          dark: '#546A5E',
          glow: 'rgba(114, 138, 124, 0.15)',
        },

        // Warm Terracotta / Sand
        terracotta: {
          DEFAULT: '#C48B71',
          light: '#D9A38C',
          dark: '#A66F56',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-lift': '0 20px 45px -12px rgba(0, 0, 0, 0.45)',
        'soft-card': '0 10px 30px -8px rgba(0, 0, 0, 0.35)',
        'amber-glow': '0 0 40px rgba(226, 168, 102, 0.12)',
        'sage-glow': '0 0 40px rgba(114, 138, 124, 0.12)',
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
