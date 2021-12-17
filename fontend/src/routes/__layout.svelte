<script lang="ts">
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
  import { cookies } from '$lib/config'
  import { user } from "../store";
  import { loggerAPI } from "$lib/api/auth";
  import { browser } from '$app/env';

  if (browser) {
  }

</script>

<Header />
<main class="flex-grow flex flex-col">
  <slot />
</main>

<footer class="flex-none border-t text-center">
  <p class="px-4 py-2">Việt Hùng Developer</p>
</footer>

<style lang="postcss">
  :global(boody) {
    color: #444;
  }

  :global(#svelte) {
    @apply flex flex-col min-h-screen relative;
  }
</style>
