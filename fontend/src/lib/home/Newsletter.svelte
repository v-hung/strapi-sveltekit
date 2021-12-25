<script lang="ts">
  import { HOST_API } from "$lib/config";
  import Image from "$lib/components/Image.svelte";

  export let title = ''
  export let description = ''
  export let img

</script>

<selection class="newsletter py-8">
  <div class="w-full max-w-7xl mx-auto px-4 relative flex justify-end">
    <div class="absolute w-full h-full top-0 left-0">
      <Image img={img} />
    </div>
    <div class="w-6/12 relative py-8">
      <div class="text-center py-8">
        <span class="text-4xl">
          <i class='bx bxs-bookmark-alt-plus' ></i>
        </span>
        <h2 class="relative uppercase font-semibold text-2xl pt-2 pb-8">
          {title}
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2.5 border-y-2 skew-x-[70deg]"></span>
        </h2>
      </div>

      <p class="py-4 text-center">{description}</p>

      <form class="mt-4 flex border border-stone-300 focus-within:border-primary-500">
        <input type="text" class="flex-grow border-none focus:outline-none px-4 py-3 bg-transparent text-sm" placeholder="Enter your email address">
        <button class="flex-none bg-stone-700 text-white hover:bg-primary-500 px-4 py-3 font-semibold -m-[1px]">Subscribe</button>
      </form>
    </div>
  </div>
</selection>
