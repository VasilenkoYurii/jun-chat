import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Импортируем модуль path для работы с путями

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Создаем алиас для корневой папки src
      components: path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
});
