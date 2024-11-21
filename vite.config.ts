import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  optimizeDeps: {
    include: ['html-docx-js'] // Vite will optimize dependencies like this
  },
  base: mode === 'development' ? '/' : '/cv_wizardy/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      //'html-docx-js': require.resolve('html-docx-js'),
    },
  },
}));
