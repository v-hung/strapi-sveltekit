<script lang="ts">
	import { getMenuBySlug } from '$lib/api/menu';
	import { onMount } from 'svelte';
  import { HOST_API } from "$lib/config";

	let menu = [];

	const getFooterMenu = async () => {
		try {
			let result = await getMenuBySlug({ slug: 'footer' });
			menu = result.data[0]?.attributes?.items || [];
		} catch (error) {
			console.log(error);
		}
	};

	onMount(async () => {
    await Promise.all([
      await getFooterMenu()
    ])

	});

</script>

<footer class="flex-none bg-[#191919] text-gray-500">
  <div class="py-14">
    <h1 class="text-3xl font-semibold font-mono uppercase text-center text-white">Việt Hùng</h1>
    {#if menu.length > 0}
      <div class="flex justify-center py-8 text-sm">
        {#each menu as item (item.id)}
          <a href="{item?.url}" class="uppercase font-semibold px-6 hover:text-primary-500">{item?.title}</a>
        {/each}
      </div>
    {/if}
    <div class="flex justify-center space-x-4 text-xl">
      <a href="/" class="grid place-items-center border rounded-full h-8 w-8 border-gray-500 text-gray-500 hover:text-primary-500 hover:border-primary-500">
        <i class='bx bxl-twitter'></i>
      </a>
      <a href="/" class="grid place-items-center border rounded-full h-8 w-8 border-gray-500 text-gray-500 hover:text-primary-500 hover:border-primary-500">
        <i class='bx bxl-google-plus' ></i>
      </a>
      <a href="/" class="grid place-items-center border rounded-full h-8 w-8 border-gray-500 text-gray-500 hover:text-primary-500 hover:border-primary-500">
        <i class='bx bxl-facebook' ></i>
      </a>
      <a href="/" class="grid place-items-center border rounded-full h-8 w-8 border-gray-500 text-gray-500 hover:text-primary-500 hover:border-primary-500">
        <i class='bx bxl-youtube' ></i>
      </a>
      <a href="/" class="grid place-items-center border rounded-full h-8 w-8 border-gray-500 text-gray-500 hover:text-primary-500 hover:border-primary-500">
        <i class='bx bxl-discord-alt' ></i>
      </a>
      <a href="/" class="grid place-items-center border rounded-full h-8 w-8 border-gray-500 text-gray-500 hover:text-primary-500 hover:border-primary-500">
        <i class='bx bxl-linkedin' ></i>
      </a>
    </div>
  </div>
  <p class="py-4 border-t border-dotted text-center text-sm border-gray-500">Copyright © VietHung. All rights reserved.</p>
</footer>
