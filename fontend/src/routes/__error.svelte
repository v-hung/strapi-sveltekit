<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${error.message}`
			}
		};
	}
</script>

<script lang="ts">
	export let title;
</script>

<section class="error h-full">
  <div class="w-full h-full max-w-7xl mx-auto px-4 flex items-center text-center">
    <h1>{title}</h1>
  </div>
</section>

<style lang="postcss">
  :global(main) {
    @apply bg-gradient-to-tr from-gray-700 to-gray-200;
  }
</style>
