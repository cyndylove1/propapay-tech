/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			labil: [
  				'Labil Grotesk Basic'
  			],
  			inter: [
  				'Inter'
  			]
  		},
  		colors: {
  			white: '#FFFFFF',
  			'neutral-base': '#1C1D1E',
  			'neutral-30': '#CBD2D9',
  			'neutral-50': '#F7F8F9',
  			'neutral-100': '#E6E8EA',
  			'neutral-200': '#DEE1E4',
  			'neutral-500': '#888D93',
  			'neutral-600': '#6B6F75',
  			'neutral-800': '#36393D',
  			'neutral-700': '#4E5257',
  			'brand-base': '#12725B',
  			'brand-50': '#EEFBF6',
  			'brand-100': '#D6F5E6',
  			'brand-200': '#AFEBD2',
  			'brand-500': '#23A681',
  			sulu: {
  				'400': '#88DD3E',
  				base: '#A8EB6B'
  			},
  			blue: {
  				'600': '#294CD6'
  			},
  			'negative-50': '#FDF3F3',
  			'negative-500': '#D84E4E',
  			'positive-50': '#F1FCF5',
  			'positive-200': '#C1F1D5',
  			'positive-500': '#32B56A',
  			'warning-50': '#FFFFEA',
  			'warning-500': '#FFC107',
  			'melRose-500': '#7C58FA',
  			darkGray: '#2E2E2E',
  			primaryColor: '#0F0F10',
  			grey: '#EAEDF2',
  			tertiaryColor: '#888E9E',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
