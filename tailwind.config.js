/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep cosmic void & midnight layers (60% dominant base)
        canvas: {
          abyss: '#060811',
          midnight: '#0b0f1d',
          surface: 'rgba(14, 18, 33, 0.75)',
          elevated: '#13182c',
        },
        // Midnight-blue, deep violet & lavender tones
        sanctuary: {
          violet: '#1e1a38',
          border: 'rgba(196, 181, 253, 0.08)',
          'border-subtle': 'rgba(196, 181, 253, 0.16)',
          'border-active': 'rgba(196, 181, 253, 0.35)',
          muted: '#8a829e',
          lavender: '#c4b5fd',
          soft: '#a78bfa',
          glow: '#d8b4fe',
          starlight: '#f5f3ff',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        sanctuary: '0 20px 50px -15px rgba(2, 4, 10, 0.85)',
        'lavender-glow': '0 0 30px -5px rgba(167, 139, 250, 0.15)',
        'subtle-inner': 'inset 0 1px 0 0 rgba(196, 181, 253, 0.08)',
      },
    },
  },
  plugins: [],
};
