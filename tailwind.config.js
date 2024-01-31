/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '768px',
			md: '1024px',
			lg: '1280px',
			xl: '1440px',
			'2xl': '1920px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '1.5rem',
				lg: '2rem',
				xl: '4rem',
				'2xl': '5rem'
			}
		},
		zIndex: {
			'-1': -1,
			0: 0,
			10: 10,
			20: 20,
			30: 30,
			40: 40,
			50: 50,
			100: 100,
			999: 999
		},
		extend: {
			colors: {
				primary: '#134394',
				accent: '#21CD98',
				alert: '#d53a39',
				success: '#4caf50',
				neutral: '#f3f3f2',
				gray: '#aaaaaa',
				grey: '#aaaaaa',
				black: '#282838',
				light: '#f3f6fa',
				white: '#ffffff',

				thermotransfer: '#a3c940',
				thermodirekt: '#fffe54',
				thermokunststoff: '#d7feff',
				inkjet: '#b9aadb',
				textil: '#c0c0c0',
				kassenrollen: '#808080',
				papierrollen: '#d9d9d9',
				rfid: '#d9d9d9'
			},
			fontSize: {
				xs: ['14px', { letterSpacing: '0' }],
				sm: ['16px', { letterSpacing: '0' }],
				base: ['18px', { letterSpacing: '0' }],
				lg: ['24px', { letterSpacing: '0' }],
				xl: ['28px', { letterSpacing: '0' }],
				'2xl': ['36px', { letterSpacing: '0' }],
				'3xl': ['42px', { letterSpacing: '0' }],
				'4xl': ['60px', { letterSpacing: '0' }]
			},
			fontFamily: {
				sans: ['Open Sans Variable', 'Helvetica', 'Arial', 'sans-serif'],
				heading: ['Open Sans Variable', 'sans-serif']
			},
			boxShadow: {
				ades: '0 10px 25px 0px rgba(19,67,148,0.05)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
				'ades-dark': '0 0px 25px -5px rgba(0,0,0,0.5)'
			}
		}
	},
	plugins: []
};
