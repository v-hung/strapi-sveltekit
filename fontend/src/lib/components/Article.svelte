<script lang="ts">
  import { HOST_API } from "$lib/config";
  import Image from "./Image.svelte";

  export let article
  console.log(article);

</script>

<div class="relative">
  <div class="article p-4">

  </div>
  <a href="{'#'}" class="relative block w-full aspect-[4/3] overflow-hidden select-none">
    <Image img="{article?.attributes?.image?.data}"/>
  </a>

    <!-- action -->
    <div class="action absolute right-4 top-14 bottom-14 flex flex-col justify-center space-y-2">
      <a href="/" style="--delay: 0s" class="w-9 h-9">
        <span class="">
          <i class='bx bx-cart' ></i>
        </span>
      </a>
      <a href="/" style="--delay: 0.05s" class="grid w-9 h-9">
        <span class="">
          <i class='bx bx-heart'></i>
        </span>
      </a>
      <a href="/" style="--delay: 0.1s" class="grid w-9 h-9">
        <span class="">
          <i class='bx bx-collapse-alt' ></i>
        </span>
      </a>
      <a href="/" style="--delay: 0.15s" class="grid w-9 h-9">
        <span class="">
          <i class='bx bx-search-alt-2' ></i>
        </span>
      </a>
    </div>

    <!-- price -->
    <div class="absolute right-4 bottom-4 shadow rounded-sm px-3 py-1">
      {#if article?.attributes?.cost}
        <span class="font-semibold">${article?.attributes?.cost}</span>
      {/if}
      <span class="text-stone-600 line-through text-sm">${article?.attributes?.price}</span>
    </div>

  <h2 class="font-semibold pt-5 pb-1">
    <a href="{article?.attributes?.url}">{article?.attributes?.title}</a>
  </h2>
  <p class="inline relative">
    <span class="inline-flex text-stone-400 text-sm">
      <i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i>
    </span>
    <span style="width: 69%;" class="absolute whitespace-nowrap w-full h-full top-0 left-0 overflow-hidden text-primary-600 text-sm">
      <i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i>
    </span>
  </p>
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
