<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div transition:fade class="absolute w-full h-full top-0 left-0 z-50 flex justify-center items-center bg-black/20">
  <div class="box rounded-full bg-white flex space-x-2 items-center p-2">
    <span class="inline-flex text-primary-500 text-4xl"><i class='bx bx-loader-alt bx-spin' ></i></span>
    <span class="text-sm pr-4 font-semibold text-gray-600">Loadding...</span>
  </div>
</div>

<style>
  .box {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
</style>
