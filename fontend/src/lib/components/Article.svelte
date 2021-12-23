<script lang="ts">
  import Image from "./Image.svelte";
  import { formatTime } from "$lib/utils/time";

  export let article
  export let blogSlug
</script>

<div class="relative h-full">
  <div class="article p-5 bg-white h-full flex flex-wrap">
    <div class="w-full relative pt-[75%] overflow-hidden">
      <a href="{'#'}" class="absolute block w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300">
        <Image img="{article?.attributes?.image?.data}"/>
      </a>
    </div>

    <p class="w-full py-4 text-sm font-semibold text-stone-400">{formatTime(article?.attributes?.createdAt)}</p>
    <h2 class="w-full uppercase font-semibold line-clamp-2 hover:text-primary-500">
      <a href="/blogs/{blogSlug}/{article?.attributes?.slug}">{ article?.attributes?.title }</a>
    </h2>
    {#if article?.attributes?.description}
      <p class="w-full py-4 line-clamp-3 text-stone-500">{ article?.attributes?.description }</p>
    {/if}

    <a href="/blogs/{blogSlug}/{article?.attributes?.slug}" class="text-sm font-semibold border-b border-stone-300 hover:text-primary-500 hover:border-primary-500 self-end">Read more</a>
  </div>
</div>

<style lang="postcss">
  .article {
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.05);
    @apply transition-all ease-in-out duration-300;
  }

  .article:hover {
    box-shadow: 7px 7px 15px 0 rgba(0, 0, 0, 0.1);
  }
</style>
