import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    // Node version 25+ has its own localStorage, this collides with jsdom. Line under solves this.
    execArgv: ["--no-experimental-webstorage"],
    // Exclude the playwright e2e test folder
    exclude: ["**/node_modules/**", "**/tests/e2e"],
  },
});
