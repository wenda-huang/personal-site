import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from https://wenda-huang.github.io/personal-site/
  // If you rename the repo or use a custom domain, update this (use "/" for a custom domain).
  base: "/personal-site/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
