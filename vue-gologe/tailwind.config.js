/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
		screens: {
			'ph': {'min': '360px', 'max': '480px'},
			'sm': {'min': '360px','max': '767px'},
			'md': {'min': '768px', 'max': '1379px'},
			'lg': {'min': '1380px'}
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
			"red": "#FF8682",
			"lightGray": "#D7E2EE"
		},
		fontFamily: {
			'serrat': ['Montserrat','sans'],
		},
	},
  },
  plugins: [],
}

