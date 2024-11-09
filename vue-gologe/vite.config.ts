import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";
import alias from "@rollup/plugin-alias";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  plugins: [
    vue(),

    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(dirname, "./src"),
        },
      ],
    }),
  ],
  server: {
    proxy: {
      '/users': {
        target: 'https://gologe-72d19-default-rtdb.europe-west1.firebasedatabase.app',
        changeOrigin: true,
        secure: false, 
        rewrite: (path) => path.replace(/^\/users/, '')
      }
    }
  }
});
