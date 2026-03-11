import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [wasm(), topLevelAwait()],
    optimizeDeps: {
      exclude: ["@aiamitsuri/interoperability-ffi-wasm"]
    }
  }
});
//ramramjiramramjuramramji
//ramramjiramramjuramramji
//ramramjiramramjuramramji