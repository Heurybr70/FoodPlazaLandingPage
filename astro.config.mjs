import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.code === "UNUSED_EXTERNAL_IMPORT" &&
            typeof warning.message === "string" &&
            warning.message.includes("@astrojs/internal-helpers/remote")
          ) {
            return;
          }

          warn(warning);
        }
      }
    }
  }
});
