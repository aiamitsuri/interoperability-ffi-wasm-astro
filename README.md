# interoperability-ffi-wasm-astro

# Create Astro project with Svelte integration
- npm create astro@latest interoperability-ffi-wasm-astro -- --template minimal
- npx astro add svelte

# Install package and Vite Wasm plugins
- npm install @aiamitsuri/interoperability-ffi-wasm@0.1.12
- npm install -D vite-plugin-wasm vite-plugin-top-level-await

# Run
- npm run dev
