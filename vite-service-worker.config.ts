import { defineConfig, loadEnv } from "vite";
import {fileURLToPath} from "node:url";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    publicDir: false,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      cache: false,
      emptyOutDir: false,
      outDir: "build",
      rollupOptions: {
        input: {
          "service-worker": "./src/service-worker.js",
        },
        output: {
          entryFileNames: "[name].js",
        },
      },
    },
    esbuild: {
      legalComments: "none",
    },
  };
});7