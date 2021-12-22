<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script lang="ts">
  import Banner from "$lib/home/Banner.svelte";
  import BannerColleciton from "$lib/home/BannerColleciton.svelte";
  import ProductSilder from "$lib/home/ProductSilder.svelte";
  import { getSinglePageBySlug } from "$lib/api/singlePage";
  import { onMount } from "svelte";

  let homePage = []

  onMount(async() => {
    try {
      let result = await getSinglePageBySlug({slug: 'home-page'})
      homePage = result?.data?.attributes?.items || []
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

{#each homePage as section, i (i)}
  {#if section?.__component == 'home.list-product'}
    <ProductSilder title={section?.title} description={section?.description} showCollections={section?.showCollections} collections={section?.collections?.data}/>
  {/if}
{/each}
