import { defineConfig } from 'vite';
import { TailwindCSSVitePlugin } from 'tailwindcss-vite-plugin';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solidPlugin(),
    // TailwindCSSVitePlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: "build",
  },
});
