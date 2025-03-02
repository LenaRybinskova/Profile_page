import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Profile_page",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Теперь @ ссылается на src
    },
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
