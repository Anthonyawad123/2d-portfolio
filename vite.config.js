import { defineConfig } from "vite";

export default defineConfig({
  base: "/2d-portfolio/", // Update to your repository name
  build: {
    minify: "terser",
  },
});
