<script lang="ts">
  import { goto } from '$app/navigation';
  import {registerAPI} from '$lib/api/auth'
  import { cookies, validate } from '$lib/config'
  import { user } from '../../store'

  let username:string = '',
    email:string = '',
    password:string = '',
    rePassword:string = '',
    error:string[] = [],
    validateEmail:boolean = true,
    validateUsername:boolean = true,
    validatePassword:boolean = true,
    validateRePassword:boolean = true,
    submitting:boolean = false

  const validateRegister = ():boolean => {
    let checkValidate = true
    validateUsername = true
    validateEmail = true
    validatePassword = true
    validateRePassword = true

    username = validate.trimFull(username)
    if (!validate.isLength(username, {min: 6, max: 20})) {
      error = [...error,'* Name length must be from 6 to 20']
      validateUsername = false
      checkValidate = false
    }

    if (!validate.isEmail(email)) {
      error = [...error,'* Incorrect email format']
      validateEmail = false
      checkValidate = false
    }

    if (!validate.isStrongPassword(password)) {
      error = [...error,'* Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.']
      validatePassword = false
      checkValidate = false
    }

    if (rePassword != password) {
      error = [...error,'* The re-entered password is not the same as the password']
      validateRePassword = false
      checkValidate = false
    }

    return checkValidate
  }

  const register = async () => {
    try {
      if (submitting) return
      submitting = true
      error = []
      if (!validateRegister()) return

      let result = await registerAPI({
        username,
        email,
        password
      })

      cookies.set('jwt', await result.jwt)
      $user = await result.user
      goto('/')
    }
    catch (err) {
      error = [...error,'* ' + err.message]
    }
    finally {
      submitting = false
    }
  }
</script>

<form id="register" on:submit|preventDefault={() => register()} class="flex flex-col space-y-3 border p-6 rounded-md max-w-xl mx-auto">
  <div class="flex flex-col space-y-2">
    <label for="username" class="text-zinc-700 text-sm">Name</label>
    <input bind:value={username} type="text" id="username" placeholder="Name"
      class="border px-4 py-2 focus:border-primary-500 rounded-md {(!validateUsername) ? 'border-red-500' : ''}">
  </div>

  <div class="flex flex-col space-y-2">
    <label for="email" class="text-zinc-700 text-sm">Email</label>
    <input bind:value={email} type="email" id="email" placeholder="Email"
      class="border px-4 py-2 focus:border-primary-500 rounded-md {(!validateEmail) ? 'border-red-500' : ''}">
  </div>

  <div class="flex flex-col space-y-2">
    <label for="password" class="text-zinc-700 text-sm">Password</label>
    <input bind:value={password} type="password" id="password" placeholder="Password"
      class="border px-4 py-2 focus:border-primary-500 rounded-md {(!validatePassword) ? 'border-red-500' : ''}">
  </div>

  <div class="flex flex-col space-y-2">
    <label for="rePassword" class="text-zinc-700 text-sm">RePassword</label>
    <input bind:value={rePassword} type="password" id="rePassword" placeholder="RePassword"
      class="border px-4 py-2 focus:border-primary-500 rounded-md {(!validateRePassword) ? 'border-red-500' : ''}">
  </div>

  {#if error.length > 0}
    {#each error as err}
      <div class="flex flex-col space-y-2 px-4 text-red-500">
        {err}
      </div>
    {/each}
  {/if}

  <button type="submit" class="relative border-0 bg-primary-500 text-white rounded-md px-4 py-2">
    <span class="{(submitting) ? 'opacity-0' : ''} pointer-events-none">Login</span>
    <span class="{(submitting) ? 'inline' : 'hidden'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl pointer-events-none">
      <i class='bx bx-loader-alt bx-spin' ></i>
    </span>
  </button>
</form>
