/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // All colors read from CSS variables — switching .dark on <html> updates everything
        background:                  'rgb(var(--color-background)            / <alpha-value>)',
        surface:                     'rgb(var(--color-surface)               / <alpha-value>)',
        'surface-dim':               'rgb(var(--color-surface-dim)           / <alpha-value>)',
        'surface-container-lowest':  'rgb(var(--color-scl)                   / <alpha-value>)',
        'surface-container-low':     'rgb(var(--color-sclo)                  / <alpha-value>)',
        'surface-container':         'rgb(var(--color-sc)                    / <alpha-value>)',
        'surface-container-high':    'rgb(var(--color-sch)                   / <alpha-value>)',
        'surface-container-highest': 'rgb(var(--color-schh)                  / <alpha-value>)',
        'on-surface':                'rgb(var(--color-on-surface)            / <alpha-value>)',
        'on-surface-variant':        'rgb(var(--color-on-surface-variant)    / <alpha-value>)',
        primary:                     'rgb(var(--color-primary)               / <alpha-value>)',
        'on-primary':                'rgb(var(--color-on-primary)            / <alpha-value>)',
        'primary-container':         'rgb(var(--color-primary-container)     / <alpha-value>)',
        secondary:                   'rgb(var(--color-secondary)             / <alpha-value>)',
        'on-secondary':              'rgb(var(--color-on-secondary)          / <alpha-value>)',
        'secondary-container':       'rgb(var(--color-secondary-container)   / <alpha-value>)',
        tertiary:                    'rgb(var(--color-tertiary)              / <alpha-value>)',
        'on-tertiary':               'rgb(var(--color-on-tertiary)           / <alpha-value>)',
        'tertiary-container':        'rgb(var(--color-tertiary-container)    / <alpha-value>)',
        outline:                     'rgb(var(--color-outline)               / <alpha-value>)',
        'outline-variant':           'rgb(var(--color-outline-variant)       / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Geist Variable', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container-max': '1440px',
      },
      fontSize: {
        'display-xl':        ['64px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '600' }],
        'display-xl-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-lg':       ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '500' }],
        'headline-md':       ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg':           ['18px', { lineHeight: '1.6', letterSpacing: '0',       fontWeight: '400' }],
        'body-md':           ['16px', { lineHeight: '1.5', letterSpacing: '0',       fontWeight: '400' }],
        'label-sm':          ['12px', { lineHeight: '1',   letterSpacing: '0.05em',  fontWeight: '600' }],
      },
      animation: {
        float:           'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'ambient-pulse': 'ambientPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        ambientPulse: {
          '0%, 100%': { opacity: '0.04', transform: 'scale(1)' },
          '50%':      { opacity: '0.09', transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};
