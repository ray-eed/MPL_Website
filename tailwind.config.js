export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy:    '#0A2342',
        gold:    '#C9A84C',
        cream:   '#F5F3EE',
        surface: '#FFFFFF',
        dark:    '#070F1C',
        muted:   '#8A8A8A',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero':  ['clamp(3rem,7vw,6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'xl2':   ['clamp(2rem,4vw,3.5rem)', { lineHeight: '1.1' }],
        'section': ['clamp(1.8rem,3vw,2.8rem)', { lineHeight: '1.15' }],
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
