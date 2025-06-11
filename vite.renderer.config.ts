import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import { version } from './package.json'

// https://vitejs.dev/config
export default defineConfig(async () => {
  const tailwindcssVite = (await import('@tailwindcss/vite')).default

  return {
    plugins: [react(), tailwindcssVite()],
    define: {
      __VERSION__: JSON.stringify(version),
    },
  }
})
