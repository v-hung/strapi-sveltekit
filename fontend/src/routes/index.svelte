<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script lang="ts">
  import Banner from "$lib/home/Banner.svelte";
  import BannerColleciton from "$lib/home/BannerColleciton.svelte";
  import ProductSilder from "$lib/home/ProductSilder.svelte";
  import CollectionSlider from "$lib/home/CollectionSlider.svelte";
  import ArticleSlider from "$lib/home/ArticleSlider.svelte";
  import Newsletter from "$lib/home/Newsletter.svelte";
  import BrandSlider from "$lib/home/BrandSlider.svelte";
  import { getSinglePageBySlug } from "$lib/api/singlePage";
  import { onMount } from "svelte";
  import BannerStatic from "$lib/home/BannerStatic.svelte";

  let homePage = []

  onMount(async() => {
    try {
      let result = await getSinglePageBySlug({slug: 'home-page'})
      homePage = result?.data?.attributes?.items || []

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
    <ProductSilder title={section?.title} type={section?.type} showCollections={section?.showCollections} collections={section?.collections?.data}/>
  {:else if section?.__component == 'home.list-collection'}
    <CollectionSlider collections={section?.collections?.data}/>
  {:else if section?.__component == 'home.list-article'}
    <ArticleSlider title={section?.title} blogs={section?.blogs?.data} showBlogs={section?.showBlogs} image={section?.image?.data}/>
  {:else if section?.__component == 'home.banner-static'}
    <BannerStatic img={section?.image?.data} url={section?.url}/>
  {:else if section?.__component == 'home.newsletter'}
    <Newsletter title={section?.title} description={section?.description} img={section?.image?.data}/>
  {:else if section?.__component == 'home.list-brand'}
    <BrandSlider />
  {/if}
{/each}
