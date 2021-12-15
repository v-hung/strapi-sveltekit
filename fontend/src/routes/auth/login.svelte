<script lang="ts">
  import {loginAPI} from '$lib/api/auth'
  import {cookies} from '$lib/config'
  import { user } from '../../store'

  let email:string = '',
    password:string = '',
    error:string = '',
    submitting:boolean = false,
    validateEmail:boolean = false,
    validatePassword:boolean = false

  const login = async () => {
    try {
      error = ''
      submitting = true

      const result = await loginAPI({
        email,
        password
      })

      cookies.set('jwt', await result.jwt)
      $user = await result.user
    }
    catch (err) {
      error = '* ' + err.message
    }
    finally {
      submitting = false
    }
  }
</script>

<div class="flex flex-col space-y-3 border p-6 rounded-md max-w-xl mx-auto">
  <div class="flex flex-col space-y-2">
    <label for="email" class="text-zinc-700 text-sm">Email</label>
    <input bind:value={email} type="email" id="email" placeholder="Email" autocomplete="new-password"
      class="border px-4 py-2 focus:border-primary-500 rounded-md {(validateEmail) ? 'border-red-500' : ''}">
  </div>

  <div class="flex flex-col space-y-2">
    <label for="password" class="text-zinc-700 text-sm">Password</label>
    <input bind:value={password} type="password" id="password" placeholder="Password" autocomplete="new-password"
      class="border px-4 py-2 focus:border-primary-500 rounded-md {(validatePassword) ? 'border-red-500' : ''}">
  </div>

  {#if error.length > 0}
    <div class="flex flex-col space-y-2 px-4 text-red-500">
      {error}
    </div>
  {/if}

  <button on:click|preventDefault={ () => login() } class="relative border-0 bg-primary-500 text-white rounded-md px-4 py-2">
    <span class="{(submitting) ? 'opacity-0' : ''} pointer-events-none">Login</span>
    <span class="{(submitting) ? 'inline' : 'hidden'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl pointer-events-none">
      <i class='bx bx-loader-alt bx-spin' ></i>
    </span>
  </button>
</div>

<style lang="postcss">
  :global(input) {
    @apply placeholder:text-sm focus:outline-none focus:border-primary-500;
  }
</style>
