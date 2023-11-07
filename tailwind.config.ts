/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-0': 'var(--primary-0)',

        'success-100': 'var(--success-100)',
        'success-200': 'var(--success-200)',
        'success-300': 'var(--success-300)',
        'success-400': 'var(--success-400)',
        'success-500': 'var(--success-500)',
        'success-600': 'var(--success-600)',
        'success-700': 'var(--success-700)',
        'success-800': 'var(--success-800)',
        'success-900': 'var(--success-900)',

        'error-100': 'var(--error-100)',
        'error-200': 'var(--error-200)',
        'error-300': 'var(--error-300)',
        'error-400': 'var(--error-400)',
        'error-500': 'var(--error-500)',
        'error-600': 'var(--error-600)',
        'error-700': 'var(--error-700)',
        'error-800': 'var(--error-800)',
        'error-900': 'var(--error-900)',

        'warning-100': 'var(--warning-100)',
        'warning-200': 'var(--warning-200)',
        'warning-300': 'var(--warning-300)',
        'warning-400': 'var(--warning-400)',
        'warning-500': 'var(--warning-500)',
        'warning-600': 'var(--warning-600)',
        'warning-700': 'var(--warning-700)',
        'warning-800': 'var(--warning-800)',
        'warning-900': 'var(--warning-900)',

        'information-100': 'var(--information-100)',
        'information-200': 'var(--information-200)',
        'information-300': 'var(--information-300)',
        'information-400': 'var(--information-400)',
        'information-500': 'var(--information-500)',
        'information-600': 'var(--information-600)',
        'information-700': 'var(--information-700)',
        'information-800': 'var(--information-800)',
        'information-900': 'var(--information-900)',

        'secondary-100': 'var(--secondary-100)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-300': 'var(--secondary-300)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-500': 'var(--secondary-500)',
        'secondary-600': 'var(--secondary-600)',
        'secondary-700': 'var(--secondary-700)',
        'secondary-800': 'var(--secondary-800)',
        'secondary-900': 'var(--secondary-900)',
        primary: {
          DEFAULT: 'var(--primary-500)',
          foreground: 'var(--primary-0)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'var(--primary-500)',
          foreground: 'var(--primary-0)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
