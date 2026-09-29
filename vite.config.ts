import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/scripts/**',
        '**/portofolio/**',
        '**/resume/**',
        '**/.npm-cache/**',
        '**/.cache-npm/**',
        '**/public/portfolio/**/raw/**',
      ],
    },
  },
})
