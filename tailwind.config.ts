import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "absolute",
    "right-[10%]",
    "top-[15%]",
	"left-[5%]",
	"bottom-[20%]",
	"left-[15%]",
	"top-[10%]",
	"right-[5%]",
	"bottom-[10%]",
	"left-[40%]",
    "w-[300px]",
    "h-[300px]",
	"w-[350px]",
    "h-[350px]",
	"w-[400px]",
	"h-[400px]",
	"w-[450px]",
	"h-[450px]",
	"rounded-full",
	"blur-[40px]",
	"blur-[50px]",
	"blur-[60px]",
	"blur-[65px]",
	"blur-[70px]",
	"blur-[75px]",
	"bg-gradient-to-br",
	"bg-gradient-to-tr",
	"bg-gradient-to-bl",
	"bg-gradient-to-tl",
	"from-blue-500/40",
	"to-purple-500/50",
	"from-cyan-500/30",
	"to-blue-500/60",
	"from-indigo-500/35",
	"to-violet-500/50",
	"from-rose-500/30",
	"to-orange-500/60",
	"from-teal-500/30",
	"to-green-500/40",
  ],
  
  theme: {
  	extend: {
  		colors: {
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
export default config;
