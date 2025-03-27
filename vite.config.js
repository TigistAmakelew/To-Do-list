import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to root for user site
export default defineConfig({
  base: '/', 
  plugins: [react()],
})