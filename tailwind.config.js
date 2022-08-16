module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'jet-blue': {
            light:'#00A9E2',
            DEFAULT: '#3A3F55',
            dark: '#2D3142'
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }