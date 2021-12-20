<script lang="ts">
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import { cookies } from '$lib/config';
	import { user } from '../store';
	import { loggerAPI } from '$lib/api/auth';
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
	:global(body) {
		@apply text-stone-800;
	}

	:global(#svelte) {
		@apply flex flex-col min-h-screen relative;
	}

  :global(img) {
    border: 1px solid transparent;
  }

	:global(.gradient-loading) {
		animation-duration: 1.8s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-name: placeHolderShimmer;
		animation-timing-function: linear;
		background: #f6f7f8;
		background: linear-gradient(to right, #fff 8%, #ececec 38%, #fffdfd 54%);
		background-size: 1000px 640px;
		position: relative;
	}

	@keyframes -global-placeHolderShimmer {
		0% {
			background-position: -468px 0;
		}
		100% {
			background-position: 468px 0;
		}
	}
</style>
