import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Na Vercel pode ser "/"; manter essa lógica ajuda abrir dist localmente também
  base: process.env.VERCEL ? "/" : "./",
  plugins: [react()],
  server: { strictPort: false, open: true },
  preview: { strictPort: false, open: true },
  build: { outDir: "dist", emptyOutDir: true }
});
