/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          void: '#050608',
          base: '#07080B',
          panel: '#0D0F16',
          surface: '#12151F',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        terracotta: {
          DEFAULT: '#E56A38',
          hover: '#D9531E',
          glow: 'rgba(229, 106, 56, 0.40)',
          dim: 'rgba(229, 106, 56, 0.15)',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Newsreader', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
