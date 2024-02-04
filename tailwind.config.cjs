/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '15px'
		},
		extend: {
			zIndex: {
				px: '1',
				header: '50', // root header
				modal: '80', // a modal/dialog
				// sidebar: '92', // sidebar
				// float: '100', // floating buttons and such
				popup: '120', // tooltip, dropdown, popover etc
				overlay: '150', // a full screen overlay
				// command: '200', // command palette
				notification: '300' // notification
			},
		},
	},
	daisyui: {
		themes: ['light', 'dark'],
		darkTheme: 'dark',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root'
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
