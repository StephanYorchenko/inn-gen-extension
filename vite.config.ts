import { defineConfig } from "vite";
import progress from "vite-plugin-progress";
import solidPlugin from "vite-plugin-solid";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [
    solidPlugin(),
    progress(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: "build",
  },
});
