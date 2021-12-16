<script lang="ts">
	import { user } from '../store'
	import { goto } from '$app/navigation';
  import { browser } from '$app/env';

	if (browser) {
    if ($user == null) {
      goto('/')
    }
  }
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if $user}
	<div>{$user.username}</div>
{/if}
