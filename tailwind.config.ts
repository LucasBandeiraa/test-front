import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'red': '#ea2a2e',
      'black': '#171923',
      'gray': '#edf2f7',
      'light-gray': '#718096'
    }
  }
}
export default config
