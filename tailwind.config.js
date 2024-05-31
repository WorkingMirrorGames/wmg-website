import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      default: '4px'
    },
    fontSize: {
      ...defaultTheme.fontSize,
      base: ['1rem', '1.5', '0.00938em', 400]
    },
    screens: {
      xs: '480px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
      '2xl': '1920px'
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono]
      },
      spacing: {
        92: '23rem',
        100: '25rem',
        'screen-lg': '1200px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: colors.violet[600],
          'primary-content': '#fff',
          secondary: colors.sky[500],
          'secondary-content': 'rgba(255, 255, 255, 0.7)',
          accent: '#42a5f5',
          'accent-content': 'rgba(0, 0, 0, 0.87)',
          neutral: '#1c1c1c',
          error: '#d32f2f',
          'error-content': '#fff',
          warning: '#f57c00',
          'warning-content': 'rgba(0, 0, 0, 0.87)',
          info: '#0288d1',
          'info-content': 'rgba(0, 0, 0, 0.87)',
          success: '#388e3c',
          'success-content': 'rgba(0, 0, 0, 0.87)',
          'base-100': '#121212',
          'base-content': '#fff'
        }
      }
    ]
  }
};
