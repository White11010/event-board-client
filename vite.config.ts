import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/shared/styles/index.scss" as *;',
      },
    },
    modules: {
      localsConvention: 'camelCase'
    }
  },
  base: '/event-board-client'
});
