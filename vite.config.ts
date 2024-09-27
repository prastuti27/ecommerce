import { defineConfig } from "vite";
import path from "path";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({
      eslint: {
        lintCommand: "eslint src", // Command to run ESLint
        // You can add more options here if needed
      },
      overlay: false, // Disable overlay for errors
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"), // Added __dirname for clarity
    },
  },
});
