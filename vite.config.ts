import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@application", replacement: path.resolve(__dirname, "src/application") },
      { find: "@ui", replacement: path.resolve(__dirname, "src/application/ui") },
    ],
  },
});
