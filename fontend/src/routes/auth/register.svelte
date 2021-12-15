<script lang="ts">
  import {registerAPI} from '$lib/api/auth'

  let username:string = '',
    email:string = '',
    password:string = '',
    rePassword:string = ''

  const validateRegister = ():boolean => {
    if (username.length < 6 || email.length < 6 || password.length < 8 || password != rePassword) {
      return false
    }
    return true
  }

  const register = async () => {
    if (!validateRegister) return
    try {
      let result = await registerAPI({
        username,
        email,
        password
      })

      console.log(result);
    }
    catch (error) {
      console.log(error);
    }
  }
</script>

<div class="flex flex-col space-y-3 border p-6 rounded-md max-w-xl mx-auto">
  <div class="flex flex-col space-y-2">
    <label for="username" class="text-zinc-700 text-sm">Username</label>
    <input bind:value={username} type="text" id="username" placeholder="Username" class="border px-4 py-2 focus:border-primary-500 rounded-md">
  </div>

  <div class="flex flex-col space-y-2">
    <label for="email" class="text-zinc-700 text-sm">Email</label>
    <input bind:value={email} type="email" id="email" placeholder="Email" class="border px-4 py-2 focus:border-primary-500 rounded-md">
  </div>

  <div class="flex flex-col space-y-2">
    <label for="password" class="text-zinc-700 text-sm">Password</label>
    <input bind:value={password} type="password" id="password" placeholder="Password" class="border px-4 py-2 focus:border-primary-500 rounded-md">
  </div>

  <div class="flex flex-col space-y-2">
    <label for="rePassword" class="text-zinc-700 text-sm">RePassword</label>
    <input bind:value={rePassword} type="password" id="rePassword" placeholder="RePassword" class="border px-4 py-2 focus:border-primary-500 rounded-md">
  </div>

  <button on:click={register} class="border-0 bg-primary-500 text-white rounded-md px-4 py-2 mt-2">Register</button>
</div>
