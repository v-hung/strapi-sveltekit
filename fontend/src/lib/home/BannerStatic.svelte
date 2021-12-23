<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import { HOST_API } from "$lib/config";
  export let img = null
  export let url = ''
</script>

<section class="newsletter py-8">
  <div class="block w-full aspect-[5/2] overflow-hidden">
    <a href="{url}" class="block w-full h-full relative hover:scale-110 transition-all duration-500 ease-in-out">
      <Image img={img} />
    </a>
  </div>
</section>
