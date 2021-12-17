<script lang="ts">
	import { page } from '$app/stores';
	import { user, model } from '../../store';
	import { clickOutside } from '$lib/clickOutside';

	function handelClickOutside() {
		for (var key in $model) {
			$model[key] = false;
		}
	}

	function clickInside(key) {
		handelClickOutside();
		$model[key] = true;
	}
</script>

<header class="flex-none z-50">
	<div class="absolute w-full top-0 left-0 text-white">
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

          <div
						use:clickOutside={() => handelClickOutside()}
						class="relative inline-flex py-1.5"
					>
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
                    <input type="text" class="pl-4 py-3 pr-10 bg-transparent w-full focus:outline-none text-lg">
                    <button class="absolute right-0 text-2xl p-2 hover:text-primary-500"><i class="bx bx-search-alt"></i></button>
                  </div>

                  <button
                    on:click|preventDefault|stopPropagation={() => $model['search'] = false}
                    class="absolute right-4 top-4 hover:text-primary-500 flex items-center font-semibold uppercase text-sm"
                  >
                    <span class="inline-flex">Close</span>
                    <span class="inline-flex text-2xl"><i class='bx bx-x' ></i></span>
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
				<a
					href="/"
					sveltekit:prefetch
					class="px-4 py-5 font-semibold uppercase font-mono hover:text-primary-400 {$page.path ==
					'/'
						? 'text-primary-400'
						: ''}">Home</a
				>
				<a
					href="/collection"
					sveltekit:prefetch
					class="px-4 py-5 font-semibold uppercase font-mono hover:text-primary-400 {$page.path ==
					'/collection'
						? 'text-primary-400'
						: ''}">Collection</a
				>
				<a
					href="/product"
					sveltekit:prefetch
					class="px-4 py-5 font-semibold uppercase font-mono hover:text-primary-400 {$page.path ==
					'/product'
						? 'text-primary-400'
						: ''}">Product</a
				>
				<a
					href="/contact"
					sveltekit:prefetch
					class="px-4 py-5 font-semibold uppercase font-mono hover:text-primary-400 {$page.path ==
					'/contact'
						? 'text-primary-400'
						: ''}">Contact</a
				>
				<a
					href="/blog"
					sveltekit:prefetch
					class="px-4 py-5 font-semibold uppercase font-mono hover:text-primary-400 {$page.path ==
					'/blog'
						? 'text-primary-400'
						: ''}">BLog</a
				>
			</div>
		</div>
	</div>

	<!-- <nav class="flex space-x-4 justify-center shadow-md">
    <a href="/" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/') ? 'border-blue-500' : 'border-transparent' } hover:border-blue-500">Home</a>
    <a href="/about" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/about') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">About</a>

    {#if $user}
      <a href="/profile" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/profile') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">{$user.username}</a>
    {:else}
      <a href="/auth/login" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/auth/login') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">Login</a>
      <a href="/auth/register" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/auth/register') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">Register</a>
    {/if}

  </nav> -->
</header>
