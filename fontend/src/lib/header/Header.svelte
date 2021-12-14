<script lang="ts">
  import { page } from '$app/stores'

  console.log($page.path);
</script>

<header class="flex-none">
	<nav class="flex space-x-4 justify-center shadow-md">
    <a href="/" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/') ? 'border-blue-500' : 'border-transparent' } hover:border-blue-500">Home</a>
    <a href="/login" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/login') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">Login</a>
    <a href="/logout" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/logout') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">Logout</a>
    <a href="/about" sveltekit:prefetch class="px-2 py-3 border-b-[3px] { ($page.path == '/about') ? 'border-blue-500' : 'border-transparent' } border-transparent hover:border-blue-500">About</a>
  </nav>
</header>
