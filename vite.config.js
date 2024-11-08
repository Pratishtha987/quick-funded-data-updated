

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // external: ["lucide-react", "react-router-dom"],
      // external: ["lucide-react"],
      // external: ["react-router-dom"], // Explicitly mark it as external if needed
    },
  },
});