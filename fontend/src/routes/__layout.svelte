<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />
<main class="flex-grow">
  <slot />
</main>

<footer class="flex-none bg-blue-500 text-white text-center">
  <p class="px-4 py-2">Việt Hùng Developer</p>
</footer>

<style lang="postcss">
  :global(body) {
    @apply h-screen;
  }

  :global(#svelte) {
    @apply flex flex-col min-h-full;
  }
</style>
