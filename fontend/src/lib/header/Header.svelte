<script lang="ts">
  import { page } from '$app/stores'
  import { user } from '../../store'
</script>

<header class="flex-none">
	<nav class="flex space-x-4 justify-center shadow-md">
    <a href="/" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/') ? 'border-blue-500' : 'border-transparent' } hover:border-blue-500">Home</a>
    <a href="/about" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/about') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">About</a>

    {#if $user}
      <a href="/profile" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/profile') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">{$user.username}</a>
    {:else}
      <a href="/auth/login" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/auth/login') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">Login</a>
      <a href="/auth/register" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/auth/register') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">Register</a>
    {/if}

  </nav>
</header>
