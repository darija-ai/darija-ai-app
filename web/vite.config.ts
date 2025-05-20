import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/ui': path.resolve(__dirname, './src/shared/components/ui'),
      '@/components': path.resolve(__dirname, './src/shared/components'),
      '@/utils': path.resolve(__dirname, './src/lib/utils'),
      '@/hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@/shared': path.resolve(__dirname, './src/shared')
    }
  }
});
