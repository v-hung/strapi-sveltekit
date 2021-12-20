<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error: error,
        // status: status
			}
		};
	}
</script>

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { breadcrumb } from "../store";

  export let error

  $: if (error) {
    $breadcrumb = {
      title: 'Whoops, our bad...',
      description: `<p class="">
          The page you requested does not exist.
          <a href="/" class="font-semibold hover:text-primary-500">Click here</a> to continue shopping.
        </p>`,
      data: []
    }
  }

  onDestroy(() => {
    $breadcrumb = {
      title: '',
      description: ``,
      data: []
    }
  })
</script>

<!-- <Breadcrumb data={breadcrumb}/> -->

<section class="error ">
  <div class="w-full max-w-7xl mx-auto px-4 text-center py-8">
    <!-- <h1 class="text-7xl font-semibold">404 Page Not Found</h1>
    <p class="">The page you requested does not exist. Click here to continue shopping.</p> -->

  </div>
</section>
