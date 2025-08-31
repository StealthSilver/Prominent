import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // ✅ enables `expect`, `test`, `describe`
    environment: "jsdom", // ✅ simulate browser environment
    setupFiles: "./src/setupTests.ts",
  },
});
