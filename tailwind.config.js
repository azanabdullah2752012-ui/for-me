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
        // Deep tactile basalt & archival charcoal (Demolishing generic purple-blue void)
        cosmic: {
          void: '#0C0D0F',
          deep: '#101215',
          surface: '#15171C',
          elevated: '#1C1F26',
          hover: '#242832',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-subtle': 'rgba(255, 255, 255, 0.035)',
          glow: 'rgba(226, 90, 56, 0.12)',
        },
        starlight: {
          lavender: '#E25A38', // Mapped to warm ochre accent for authentic craftsmanship
          violet: '#E25A38',
          indigo: '#D4A359',
          silver: '#E8E8EA',
          muted: '#9DA1AB',
          faint: '#606470',
        },
        paper: {
          bg: 'var(--bg-primary, #0C0D0F)',
          surface: 'var(--bg-surface, #15171C)',
          elevated: 'var(--bg-elevated, #1C1F26)',
          hover: 'var(--bg-hover, #242832)',
          border: 'var(--border-fine, rgba(255, 255, 255, 0.07))',
          'border-subtle': 'var(--border-subtle, rgba(255, 255, 255, 0.035))',
          ink: 'var(--text-ink, #F3F3F5)',
          secondary: 'var(--text-secondary, #A0A4AF)',
          muted: 'var(--text-muted, #666A76)',
          faint: 'var(--text-faint, #444752)',
        },
        forest: {
          DEFAULT: '#3D7A5D',
          hover: '#2D6048',
          light: 'rgba(61, 122, 93, 0.15)',
          border: 'rgba(61, 122, 93, 0.3)',
        },
        olive: {
          DEFAULT: '#657454',
          light: 'rgba(101, 116, 84, 0.15)',
        },
        accent: {
          DEFAULT: 'var(--accent-color, #E25A38)',
          muted: 'var(--accent-muted, rgba(226, 90, 56, 0.14))',
          hover: 'var(--accent-hover, #F06543)',
          glow: 'var(--accent-glow, rgba(226, 90, 56, 0.20))',
        },
        dark: {
          950: '#0C0D0F',
          900: '#15171C',
          850: '#1C1F26',
          800: '#242832',
          700: 'rgba(255, 255, 255, 0.07)',
          600: '#9DA1AB',
        },
        surface: {
          DEFAULT: 'var(--bg-surface, #15171C)',
          raised: 'var(--bg-elevated, #1C1F26)',
          sunken: 'var(--bg-hover, #090A0C)',
          border: 'var(--border-fine, rgba(255, 255, 255, 0.07))',
          'border-subtle': 'var(--border-subtle, rgba(255, 255, 255, 0.035))',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Newsreader"', 'Georgia', 'serif'],
        editorial: ['"Instrument Serif"', '"Newsreader"', 'serif'],
        display: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SF Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'journal': '0 2px 6px -1px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
        'journal-md': '0 6px 18px -3px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'journal-lg': '0 16px 36px -6px rgba(0, 0, 0, 0.75), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
        'modal': '0 32px 64px -16px rgba(0, 0, 0, 0.85), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'cosmic-glow': '0 0 20px -3px rgba(226, 90, 56, 0.22)',
      }
    },
  },
  plugins: [],
}
