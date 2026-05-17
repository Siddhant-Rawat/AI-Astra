/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#131313',
        'surface-dim': '#131313',
        'surface-bright': '#3a3939',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1c1b1b',
        'surface-container': '#201f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#c4c5d9',
        primary: '#b8c3ff',
        'on-primary': '#002387',
        'primary-container': '#2d5bff',
        secondary: '#d0bcff',
        'on-secondary': '#3c0091',
        'secondary-container': '#571bc1',
        tertiary: '#00dbe9',
        'on-tertiary': '#00363a',
        'tertiary-container': '#007981',
        outline: '#8e90a2',
        'outline-variant': '#434656',
        background: '#131313',
        'on-background': '#e5e2e1',
      },
      fontFamily: {
        sans: ['Geist Variable', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container-max': '1440px',
      },
      fontSize: {
        'display-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '600' }],
        'display-xl-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '500' }],
        'headline-md': ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'ambient-pulse': 'ambientPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        ambientPulse: {
          '0%, 100%': { opacity: '0.04', transform: 'scale(1)' },
          '50%': { opacity: '0.09', transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};
