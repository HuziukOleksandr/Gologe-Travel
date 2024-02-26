/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
		screens: {
			'tablet': '640px',
			// => @media (min-width: 640px) { ... }

			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }

			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
		},

		colors: {
			'deafult': '#FFFFFF',
			'button': '#8DD3BB',
			'black' : '#000',
			'green' : '#112211',
			"bg-second": "#D7E2EE",
			"grey": "#79747E",
			"background": "#FAFBFC",
			"lightGreen": "#CDEAE1"
		},
		fontFamily: {
			'serrat': ['Montserrat','sans'],
		},
	},

		
			
  },
  plugins: [],
}

