<script>
  import { onMount } from 'svelte';
  import * as wasm from "@aiamitsuri/interoperability-ffi-wasm";

  let results = $state(null);
  let loading = $state(true);
  let error = $state(null);

  async function loadData() {
    loading = true;
    error = null;
    try {
      await wasm.default();
      const data = await wasm.fetch_from_js({ 
        language: "node", 
        integration: "done" 
      });
      results = data;
    } catch (err) {
      error = err.toString();
    } finally {
      loading = false;
    }
  }

  onMount(loadData);
</script>

<div class="wasm-card">
  <h2>Astro/Svelte + Rust Wasm</h2>
  
  <button onclick={loadData} disabled={loading}>
    {loading ? 'Fetching...' : '🔄 Refresh Rust Logic'}
  </button>

  {#if loading && !results}
    <p>Loading Wasm module...</p>
  {:else if error}
    <p class="error">Error: {error}</p>
  {:else if results}
    <div class="results">
      <p>Found <strong>{results.pagination.total_items}</strong> items.</p>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  {/if}
</div>

<style>
  .wasm-card { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
  pre { background: #f4f4f4; padding: 0.5rem; overflow: auto; max-height: 400px; }
  .error { color: red; }
</style>