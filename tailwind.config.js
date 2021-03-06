module.exports = {
  mode: 'jit',
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '100px': '100px',
        '150px': '150px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
      },
      minHeight: {
        '4/5': '80%',
        '600px': '600px',
      },
      borderWidth: {
        3: '3px',
      },
      keyframes: {
        slideIn: {
          '0%': {
            right: '-100%',
          },
          '100%': {
            right: '32px',
          },
        },
        slideOut: {
          '0%': {
            right: '32px',
          },
          '100%': {
            right: '-100%',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out',
        slideOut: 'slideOut 1.2s ease-in-out',
      },
      inset: {
        '7/12': '58.33333333%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
