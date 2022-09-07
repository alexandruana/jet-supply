module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'jet': {
					light: '#00A9E2',
					DEFAULT: '#3A3F55',
					dark: '#2D3142'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-tui': 'radial-gradient(164.75% 100% at 50% 0,#334155 0,#0f172a 48.73%)'
			},
			dropShadow: {
				'custom': [
					'0 2px 7px rgba(0, 0, 0, 0.5)',
					'0 2px 7px rgba(0, 0, 0, 0.2)',
				],
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)'
				]
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}