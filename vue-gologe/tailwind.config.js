/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
		screens: {
			'sm': {'min': '200px','max': '767px'},
			'md': {'min': '768px', 'max': '1279px'},
			'lg': {'min': '1280px'}
		},

		colors: {
			'default': '#FFFFFF',
			'buttonGreen': '#8DD3BB',
			'black' : '#000',
			'green' : '#112211',
			"bg-second": "#D7E2EE",
			"gray": "#79747E",
			"background": "#FAFBFC",
			"lightGreen": "#CDEAE1",
			"red": "#FF8682"
		},
		fontFamily: {
			'serrat': ['Montserrat','sans'],
		},
	},
  },
  plugins: [],
}

