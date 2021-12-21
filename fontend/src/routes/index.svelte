<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script lang="ts">
  import Banner from "$lib/home/Banner.svelte";
  import BannerColleciton from "$lib/home/BannerColleciton.svelte";
  import ProductSilder from "$lib/components/ProductSilder.svelte";
  import { getSinglePageBySlug } from "$lib/api/singlePage";
  import { onMount } from "svelte";

  let homePage = null

  onMount(async() => {
    try {
      let result = await getSinglePageBySlug({slug: 'home-page'})
      homePage = result?.data?.attributes?.items || null
      console.log(homePage);

    } catch (error) {
      console.log(error);
    }
  })
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Banner />
<BannerColleciton />

{#each homePage as section, i (section?.id || i)}
  {#if section?.__component == 'home.list-product'}
    <ProductSilder collections={section?.collections?.data}/>
  {/if}
{/each}
