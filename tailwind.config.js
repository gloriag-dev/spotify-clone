/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
theme: {
  extend: {
    borderRadius: {
      lg: '10px',
      md: '8px',
      sm: '4px'
    },
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
        DEFAULT: '#121212',
        foreground: '#ffffff',
      },
      secondary: {
        DEFAULT: 'white',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      tertiary: {
        DEFAULT: '#1ed760',
        foreground: 'hsl(var(--tertiary-foreground))'
      },
      custom : {
        DEFAULT: '#c6c6c6',
        foreground: 'hsl(var(--custom-foreground))'
      },
      muted: {
        DEFAULT: '#c6c6c6',
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
    }
  }
},
plugins: [require("tailwindcss-animate")],
}
