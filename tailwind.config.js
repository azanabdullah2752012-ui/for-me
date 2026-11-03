/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#06070a',
          900: '#090a0f',
          850: '#0e1017',
          800: '#141721',
          700: '#1e2230',
          600: '#2c3245',
        },
        amber: {
          brand: '#ff6b35',
          glow: '#f97316',
          warm: '#e5a96a',
          parchment: '#f5efeb',
        },
        card: {
          bg: 'rgba(15, 17, 24, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'amber-glow': '0 0 25px -5px rgba(255, 107, 53, 0.25)',
        'inner-subtle': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
