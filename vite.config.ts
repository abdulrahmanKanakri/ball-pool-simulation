import { defineConfig } from "vite";
import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => ({
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [tsconfigPaths()],
  build: {
    brotliSize: false,
    manifest: false,
    minify: mode === "development" ? false : "terser",
    outDir: "dist",
    sourcemap: command === "serve" ? "inline" : false,
  },
}));
