import path from 'path';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@public', replacement: path.resolve(__dirname, 'public') },
    ],
  },
  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/shared/styles/box.scss";
          @import "@/shared/styles/colors.scss";
          @import "@/shared/styles/fonts.scss";
          @import "@/shared/styles/skeleton.scss";
        `,
      },
    },
  },
});
