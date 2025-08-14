import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css,scss}"
  ],
  theme: {
    colors: {
      ...colors, // giữ các màu mặc định
      primary: '#000000', // ✅ Ghi đè primary
      lightblue: '#AED0FF',
      lightgreen: '#C9DC82',
      textcolor: '#000000',
      background: '#FFFFFF',
      success: '#198754',
      warning: '#FFC107',
      danger: '#DC3545',
      secondary: '#6c757d',
      dark: '#000000',
    },
  },
  plugins: [],
}

export default config
