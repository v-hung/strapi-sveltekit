<script lang="ts">
  import { getPhotoWithGallery } from "$lib/api/photo";
  import { onMount } from "svelte";
  import { HOST_API } from "$lib/config";

  // get banner home

  let breadcrumb = null;

  const betBreadcrumb = async () => {
    try {
      let result = await getPhotoWithGallery({slug:'breadcrumb', limit: 1})

      breadcrumb = await result.data[0] || null

    } catch (error) {
      console.log(error);
    }
  }

  onMount(async() => {
    await betBreadcrumb()
  })
</script>

<svelte:head>
  <link rel="stylesheet" href="swiper-bundle.min.css">
</svelte:head>

<section class="breadcrumb bg-blue-50">
  <div class="relative aspect-[1/.22] overflow-hidden">
    <div class="relative w-full h-full">
      <div class="absolute w-full h-full top-0 left-0">
        {#if breadcrumb}
          <img
            src="{HOST_API}{breadcrumb.attributes.image.data.attributes.url || ''}"
            alt="{breadcrumb.attributes.title || ''}"
            class="w-full h-full object-cover">
        {/if}
      </div>
    </div>
  </div>
</section>
