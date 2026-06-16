import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Settin
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Changing the server port to 3000
  server: {
    port: 3000,
  },
})
