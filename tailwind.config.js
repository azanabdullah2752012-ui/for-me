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
        cosmic: {
          void: '#05070E',
          deep: '#090D18',
          surface: '#0F1626',
          elevated: '#172033',
          hover: '#1E293F',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-subtle': 'rgba(255, 255, 255, 0.04)',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        starlight: {
          lavender: '#C4B5FD',
          violet: '#8B5CF6',
          indigo: '#6366F1',
          silver: '#E2E8F0',
          muted: '#94A3B8',
          faint: '#64748B',
        },
        paper: {
          bg: 'var(--bg-primary, #05070E)',
          surface: 'var(--bg-surface, #0B0F19)',
          elevated: 'var(--bg-elevated, #131A29)',
          hover: 'var(--bg-hover, #1C263A)',
          border: 'var(--border-fine, rgba(255, 255, 255, 0.08))',
          'border-subtle': 'var(--border-subtle, rgba(255, 255, 255, 0.04))',
          ink: 'var(--text-ink, #F1F5F9)',
          secondary: 'var(--text-secondary, #CBD5E1)',
          muted: 'var(--text-muted, #94A3B8)',
          faint: 'var(--text-faint, #64748B)',
        },
        forest: {
          DEFAULT: '#34D399',
          hover: '#10B981',
          light: 'rgba(52, 211, 153, 0.15)',
          border: 'rgba(52, 211, 153, 0.3)',
        },
        olive: {
          DEFAULT: '#8B5CF6',
          light: 'rgba(139, 92, 246, 0.15)',
        },
        accent: {
          DEFAULT: 'var(--accent-color, #8B5CF6)',
          muted: 'var(--accent-muted, rgba(139, 92, 246, 0.15))',
          hover: 'var(--accent-hover, #A78BFA)',
          glow: 'var(--accent-glow, rgba(139, 92, 246, 0.25))',
        },
        dark: {
          950: '#05070E',
          900: '#0B0F19',
          850: '#131A29',
          800: '#1C263A',
          700: 'rgba(255, 255, 255, 0.08)',
          600: '#94A3B8',
        },
        surface: {
          DEFAULT: 'var(--bg-surface, #0B0F19)',
          raised: 'var(--bg-elevated, #131A29)',
          sunken: 'var(--bg-hover, #1C263A)',
          border: 'var(--border-fine, rgba(255, 255, 255, 0.08))',
          'border-subtle': 'var(--border-subtle, rgba(255, 255, 255, 0.04))',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SF Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'journal': '0 2px 8px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'journal-md': '0 4px 16px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)',
        'journal-lg': '0 12px 28px -6px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.09)',
        'modal': '0 24px 48px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'cosmic-glow': '0 0 25px -5px rgba(139, 92, 246, 0.25)',
      }
    },
  },
  plugins: [],
}
