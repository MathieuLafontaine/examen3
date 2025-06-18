import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: "3000",
    open: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "pages/about.html"),
      },
    },
  },
});
