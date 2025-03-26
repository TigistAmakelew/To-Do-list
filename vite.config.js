import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/To-Do-list/', // Ensure the base URL includes leading and trailing slashes
  plugins: [react()],
})