import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        city: resolve(__dirname, "src/city/index.html"),
        about: resolve(__dirname, "src/about/index.html"),
        blog: resolve(__dirname,"src/blog/index.html",),
      },
    },
  },
});
