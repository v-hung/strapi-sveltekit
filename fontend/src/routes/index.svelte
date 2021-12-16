<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script lang="ts">
  import { browser } from "$app/env";
  import { getPhotoWithGallery } from "$lib/api/photo";
  import { onMount } from "svelte";
  import { each } from "svelte/internal";
  import { HOST_API } from "$lib/config";
  import Swiper, { Navigation, Autoplay } from 'swiper';
  Swiper.use([Navigation,Autoplay]);

  // get banner home

  let bannerHome = [];

  const getBannerHome = async () => {
    try {
      let result = await getPhotoWithGallery({slug:'home-page', limit: 4})

      bannerHome = await result.data

    } catch (error) {
      console.log(error);
    }
  }


  // swiper banner home

  var swiperHomeBanner = null

  if (browser) {
    (async() => {
      await getBannerHome()
    })()
  }

  onMount(async() => {
    swiperHomeBanner = new Swiper('#homeBanner', {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
</script>

<svelte:head>
	<title>Home</title>
  <link rel="stylesheet" href="swiper-bundle.min.css">
</svelte:head>

{ bannerHome }
<section class="banner-home">
  <div class="relative pb-[52%] overflow-hidden">
    <div id="homeBanner" class="swiper absolute w-full h-full top-0 left-0">
      <div class="swiper-wrapper">
        <!-- Slides -->
        {#if bannerHome.length > 0}
          {#each bannerHome as banner (banner.id)}
            <div class="swiper-slide">
              <div class="relative">
                <div class="absolute w-full h-full top-0 left-0">
                  <img src="{HOST_API}{banner.attributes.image.data.attributes.url}" alt="{banner.attributes.title}"
                    class="w-full h-full object-cover">
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev">
        <span class="hover:border-primary-500 hover:text-primary-500">
          <i class='bx bx-left-arrow-alt'></i>
        </span>
      </div>
      <div class="swiper-button-next">
        <span class="hover:border-primary-500 hover:text-primary-500">
          <i class='bx bx-right-arrow-alt'></i>
        </span>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  :global(.swiper-button-prev,.swiper-button-next) {
    @apply !w-inherit !flex !items-center;
  }

  :global(.swiper-button-prev span,.swiper-button-next span) {
    @apply grid place-items-center w-10 h-10 rounded-full bg-transparent border border-gray-600 text-gray-600 text-2xl;
  }

  :global(.swiper-button-prev::after,.swiper-button-next::after) {
    @apply !content-none;
  }
</style>
