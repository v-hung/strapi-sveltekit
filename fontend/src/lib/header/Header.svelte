<script lang="ts">
	import { page } from '$app/stores';
	import { user, model } from '../../store';
	import { clickOutside } from '$lib/clickOutside';
	import { getMenuWithSlug } from '$lib/api/menu';
	import { onMount } from 'svelte';
  import { HOST_API } from "$lib/config";
  import { getPhotoByGallery } from "$lib/api/photo";
  import { breadcrumb } from "../../store";

	function handelClickOutside() {
		for (var key in $model) {
			$model[key] = false;
		}
	}

	function clickInside(key) {
		handelClickOutside();
		$model[key] = true;
	}

	let menu = [];

	const getHeaderMenu = async () => {
		try {
			let result = await getMenuWithSlug({ slug: 'header' });
			menu = result.data[0]?.attributes?.items || [];
		} catch (error) {
			// console.log(error);
		}
	};

	let breadcrumbImage = null;

	const getBreadcrumb = async () => {
		try {
			let result = await getPhotoByGallery({ slug: 'breadcrumb', limit: 1 });

			breadcrumbImage = (await result.data[0]) || null;
		} catch (error) {
			// console.log(error);
		}
	};

  $: if (breadcrumbImage && $page.path != '/' ) {
      if (headerBanner)
        headerBanner.style.backgroundImage = `url(${HOST_API}${breadcrumbImage?.attributes?.image?.data?.attributes?.url || ''})`
  } else {
    if (headerBanner)
      headerBanner.style.backgroundImage = 'none'
  }

  let headerBanner = null

	onMount(async () => {
    await Promise.all([
      await getHeaderMenu(),
      await getBreadcrumb()
    ])

	});

</script>

<header class="flex-none z-50">
	<div
    bind:this="{headerBanner}"
		class="{$page.path == '/'
			? 'absolute'
			: `bg-no-repeat bg-cover`}
      w-full top-0 left-0 text-white"
	>
		<div class="w-full max-w-7xl mx-auto px-4">
			<div class="w-full flex items-center justify-between py-6 border-b border-white">
				<div class="flex-1 flex items-center space-x-4">
					<div use:clickOutside={() => handelClickOutside()} class="relative text-sm py-2">
						<div
							on:click|stopPropagation={() => clickInside('money')}
							class="flex items-center space-x-2 cursor-pointer font-semibold"
						>
							USD <i class="bx bx-chevron-down -translate-y-0.5" />
						</div>
						{#if $model['money']}
							<div class="absolute top-full left-0 w-40 bg-white shadow text-[#444]">
								<div class="flex flex-col">
									<span class="cursor-pointer px-6 py-1 hover:text-primary-500">USD</span>
									<span class="cursor-pointer px-6 py-1 hover:text-primary-500">VND</span>
								</div>
							</div>
						{/if}
					</div>

					<div use:clickOutside={() => handelClickOutside()} class="relative text-sm py-2">
						<div
							on:click|stopPropagation={() => clickInside('language')}
							class="flex items-center space-x-2 cursor-pointer font-semibold"
						>
							LANGUAGE <i class="bx bx-chevron-down -translate-y-0.5" />
						</div>
						{#if $model['language']}
							<div class="absolute top-full left-0 w-40 bg-white shadow text-[#444]">
								<div class="flex flex-col">
									<span class="cursor-pointer px-6 py-1 hover:text-primary-500">english</span>
									<span class="cursor-pointer px-6 py-1 hover:text-primary-500">vietnamese</span>
								</div>
							</div>
						{/if}
					</div>
				</div>

				<div class="flex-none">
					<h1 class="text-3xl font-semibold font-mono uppercase">Việt Hùng</h1>
				</div>

				<div class="flex-1 flex justify-end items-center space-x-2">
					<div
						use:clickOutside={() => handelClickOutside()}
						class="relative inline-flex hover:cursor-pointer py-1.5"
					>
						<div
							on:click|stopPropagation={() => clickInside('user')}
							class="inline-flex text-2xl hover:text-primary-500"
						>
							<i class="bx bxs-user" />
						</div>
						{#if $model['user']}
							<div class="absolute top-full right-0 w-44 bg-white shadow text-[#444]">
								<div class="flex flex-col">
									<span class="cursor-pointer px-6 py-1 hover:text-primary-500">My account</span>
									<span class="cursor-pointer px-6 py-1 hover:text-primary-500">My wishlist</span>
									<span class="cursor-pointer px-6 py-1 hover:text-primary-500">Logout</span>
								</div>
							</div>
						{/if}
					</div>

					<div use:clickOutside={() => handelClickOutside()} class="relative inline-flex py-1.5">
						<div
							on:click|stopPropagation={() => clickInside('search')}
							class="inline-flex text-2xl hover:text-primary-500 hover:cursor-pointer"
						>
							<i class="bx bx-search-alt" />
						</div>
						{#if $model['search']}
							<div
								on:click|stopPropagation|preventDefault={() => {}}
								class="fixed w-full h-full top-0 left-0 bg-black/90 text-white z-10"
							>
								<div class="flex w-full h-full justify-center items-center relative">
									<div class="relative w-full max-w-5xl border-b border-white">
										<input
											type="text"
											class="pl-4 py-3 pr-10 bg-transparent w-full focus:outline-none text-lg"
										/>
										<button class="absolute right-0 text-2xl p-2 hover:text-primary-500"
											><i class="bx bx-search-alt" /></button
										>
									</div>

									<button
										on:click|preventDefault|stopPropagation={() => ($model['search'] = false)}
										class="absolute right-4 top-4 hover:text-primary-500 flex items-center font-semibold uppercase text-sm"
									>
										<span class="inline-flex">Close</span>
										<span class="inline-flex text-2xl"><i class="bx bx-x" /></span>
									</button>
								</div>
							</div>
						{/if}
					</div>

					<div
						use:clickOutside={() => handelClickOutside()}
						class="relative inline-flex hover:cursor-pointer py-1.5"
					>
						<div
							on:click|stopPropagation={() => clickInside('cart')}
							class="inline-flex text-2xl hover:text-primary-500"
						>
							<i class="bx bx-cart-alt" />
							<div class="relative ml-2 flex items-center text-white">
								<div
									class="absolute h-1.5 w-1.5 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 bg-primary-500"
								/>
								<div class="px-1 min-w-[18px] h-[18px] bg-primary-500 text-sm leading-[1.125]">
									0
								</div>
							</div>
						</div>
						{#if $model['cart']}
							<div class="absolute top-full right-0 w-80 sm:w-96 bg-white shadow text-[#444]">
								<p class="px-4 py-12">You have no items in your shopping cart.</p>
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="w-full flex items-center justify-center border-b">
				{#each menu as item (item.id)}
					<a
						href={item.url}
						sveltekit:prefetch
						class="px-4 py-5 font-semibold uppercase font-mono hover:text-primary-400 {$page.path ==
						item.url
							? 'text-primary-400'
							: ''}">{item.title}</a
					>
				{/each}
			</div>

			<!-- breadcrumb -->
      {#if $page.path != '/'}
			  <div class="w-full py-14 text-center">
          <h2 class="text-5xl font-semibold capitalize">{$breadcrumb.title}</h2>
          <h3 class="text-xl py-4">{@html $breadcrumb.description}</h3>
          <div class="flex items-center justify-center space-x-2">
            {#each $breadcrumb.data as item, i}
              {#if i > 0}
                <span class="inline-flex">
                  <i class='bx bx-chevron-right'></i>
                </span>
              {/if}
              <a
                href="{item?.url || ''}"
                class="capitalize hover:text-primary-500 {($breadcrumb.data.length - 1 == i) ? 'text-primary-500' : ''}"
              >{item?.title || '' }</a>
            {/each}
          </div>
        </div>
      {/if}
		</div>
	</div>
</header>
