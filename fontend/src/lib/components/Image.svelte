<script lang="ts">
  import { HOST_API } from "$lib/config";
  export let img;

  const onImageError = (e) => {
    e.target.classList.add('img-error')
  }
</script>

{#if img}
  <div
    class="absolute w-full h-full top-0 left-0 bg-no-repeat bg-cover gradient-loading"
    style=""
  >
    <img
      src="{HOST_API}{img?.src}"
      alt="{img?.caption}"
      on:error="{onImageError}"
      class="absolute w-full h-full top-0 left-0"
      loading="lazy"
    >
    <span class="has-error absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center bg-white text-stone-600">
      <span class="text-3xl">
        <i class='bx bxs-message-error'></i>
      </span>
      <span>Can't load image</span>
    </span>
  </div>

{/if}

<style lang="postcss">
  .has-error {
    @apply hidden;
  }
  :global(.img-error ~ .has-error) {
    @apply flex;
  }
</style>
