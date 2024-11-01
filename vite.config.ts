import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PORT = 5173;
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
})
