import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    // Node version 25+ has its own localStorage, this collides with jsdom. Line under solves this.
    execArgv: ["--no-experimental-webstorage"],
  },
});
