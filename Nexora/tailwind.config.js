/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nexora: {
          950: '#030206',
          900: '#06050b',
          850: '#0a0815',
          800: '#110e22',
          750: '#181432',
          700: '#221c46',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-bright': 'rgba(168, 85, 247, 0.3)',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          purple: '#a855f7',
          neon: '#c084fc',
          electric: '#38bdf8',
          gold: '#fbbf24',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-violet-sm': '0 0 20px rgba(139, 92, 246, 0.25)',
        'glow-violet-md': '0 0 40px rgba(139, 92, 246, 0.35)',
        'glow-violet-lg': '0 0 70px rgba(139, 92, 246, 0.45)',
        'glow-cyan-sm': '0 0 20px rgba(6, 182, 212, 0.25)',
        'glow-cyan-md': '0 0 40px rgba(6, 182, 212, 0.35)',
        'glow-dual': '0 0 45px rgba(139, 92, 246, 0.3), 0 0 80px rgba(6, 182, 212, 0.2)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glass-card-hover': '0 16px 48px 0 rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(168, 85, 247, 0.35), 0 0 30px rgba(139, 92, 246, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
