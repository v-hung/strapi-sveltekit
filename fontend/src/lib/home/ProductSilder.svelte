<script lang="ts">
  import Product from "$lib/components/Product.svelte";
  import { onMount } from "svelte";
  import { getProductByCollection, getProductByLatest } from "$lib/api/product";
  import Loading2 from "$lib/loading/Loading2.svelte";
  import Swiper, { Navigation, Autoplay } from 'swiper';
  Swiper.use([Navigation,Autoplay]);

  export let title = 'Feature Products'
  export let type = null
  export let showCollections = true
  export let collections = []
  let loading = false
  let products = []
  let collectionSelected = collections[0]?.attributes?.slug || null
  let idComponent = 'listProduct' + new Date().getTime()

  const getProducts = async (slug) => {
    try {
      if (type) {
        if (type == 'latest') {
          loading = true
          let result = await getProductByLatest({})
          products = result?.data || []
        }
      } else {

        if (loading || !slug) return

        loading = true
        let result = await getProductByCollection({slug:slug})
        products = result?.data || []
      }
    }
    catch (error){
      console.log(error);
    }
    finally {
      loading = false
    }
  }

  const selectCollection = async (slug) => {
    collectionSelected = slug
    await getProducts(slug)
    swiperListProduct.loopDestroy()
    swiperListProduct.loopCreate()
  }

  let swiperListProduct = null

  onMount(async() => {
    await getProducts((collections.length > 0) ? collections[0]?.attributes?.slug : '')

    swiperListProduct = new Swiper('#'+idComponent, {
      loop: true,
      observer: true,
      slidesPerView: 4,
      autoplay: {
        delay: 5000,
        // disableOnInteraction: false,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


  })
</script>

<section class="product-slider py-8">
  <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
    <div class="text-center py-8">
      <span class="text-4xl">
        <i class='bx bxs-bookmark-alt-plus' ></i>
      </span>
      <h2 class="relative uppercase font-semibold text-2xl pt-2 pb-8">
        {title}
        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2.5 border-y-2 skew-x-[70deg]"></span>
      </h2>
    </div>

    {#if showCollections}
      <div class="flex justify-center pt-2 pb-10">
        {#each collections as collection (collection.id)}
          <a
            on:click|preventDefault="{() => selectCollection(collection?.attributes?.slug)}"
            href="collections/{collection?.attributes?.slug}"
            class="{collectionSelected == collection?.attributes?.slug ? 'text-primary-500' : ''} px-4 uppercase text-stone-400 hover:text-primary-500 text-sm font-semibold"
          >{collection?.attributes?.title}</a>
        {/each}
      </div>
    {/if}

    <!-- slider -->
    <div class="slider relative group">
      <div id="{idComponent}" class="swiper w-full h-full overflow-hidden py-4">
        <div class="swiper-wrapper">
          {#each products as product (product.id)}
            <div class="swiper-slide relative px-4">
              <Product product={product} collection_slug={collectionSelected}/>
            </div>
          {:else}
            <p class="text-center py-4 w-full">Không có sản phẩm nào</p>
          {/each}
        </div>
      </div>

      <div class="swiper-button-prev left-4 group-hover:-translate-x-1/2" style="{products.length > 0 ? '' : 'display: none'}">
        <span class="!bg-white shadow border-none hover:border-primary-500 hover:text-primary-500">
          <i class='bx bx-left-arrow-alt'></i>
        </span>
      </div>
      <div class="swiper-button-next right-4 group-hover:translate-x-1/2" style="{products.length > 0 ? '' : 'display: none'}">
        <span class="!bg-white shadow border-none hover:border-primary-500 hover:text-primary-500">
          <i class='bx bx-right-arrow-alt'></i>
        </span>
      </div>

      <!-- loading -->

      {#if loading}
        <Loading2 />
      {/if}
    </div>
  </div>
</section>

<style lang="postcss">
  .swiper-button-prev,
  .swiper-button-next {
    @apply invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition-all ease-in-out duration-300;
  }

  :global(.swiper-button-prev,.swiper-button-next) {
    @apply !w-12 !h-12;
  }
</style>
