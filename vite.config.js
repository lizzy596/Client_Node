import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import config from './config.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: config.env === "production" ? config.apiServerUrlProduction : config.apiServerUrlDevelopment,
        changeOrigin: true,
      }
    }
  }
})
