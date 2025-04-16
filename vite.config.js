import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        city: resolve(__dirname, "src/public/city/index.html"),
        about: resolve(__dirname, "src/public/about/index.html"),
        blog: resolve(__dirname,"src/public/blog/index.html",),
      },
    },
  },
});
