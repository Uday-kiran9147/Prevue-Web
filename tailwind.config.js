/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          subtle: '#F1F5F9',
          border: '#E2E8F0',
          dark: '#0F172A',
          darkSurface: '#1E293B',
        },
        brand: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'pill': '0 2px 10px rgba(0, 0, 0, 0.06)',
        'studio': '0 0 0 1px rgba(0, 0, 0, 0.06), 0 8px 30px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}


