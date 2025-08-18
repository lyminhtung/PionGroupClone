// tailwind.config.ts
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {}, // để custom spacing, font... nếu cần
    colors: {
      ...colors, // giữ lại toàn bộ bảng màu gốc Tailwind
      primary: '#000000', // màu đen
    },
  },
  plugins: [],
}

export default config
