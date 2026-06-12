import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua 'tea-places' pelo nome exato do seu repositório no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/tea-places/',
})
