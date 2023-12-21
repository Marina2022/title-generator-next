import tailwindScrollbar from 'tailwind-scrollbar'
import tailwindcssAnimate from "tailwindcss-animate"
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20BCC1',
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
    tailwindcssAnimate
  ],
}
export default config
