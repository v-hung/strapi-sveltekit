<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script lang="ts">
  import { getPhotoByGallery } from "$lib/api/photo";
  import { onMount } from "svelte";
  import { HOST_API } from "$lib/config";
  import Swiper, { Navigation, Autoplay } from 'swiper';
  Swiper.use([Navigation,Autoplay]);

  // get banner home

  let bannerHome = [];

  const getBannerHome = async () => {
    try {
      let result = await getPhotoByGallery({slug:'home-page', limit: 4})

      bannerHome = await result.data

    } catch (error) {
      console.log(error);
    }
  }

  // swiper banner home

  var swiperHomeBanner = null

  onMount(async() => {
    await getBannerHome()
    swiperHomeBanner = new Swiper('#homeBanner', {
      loop: true,
      // spaceBetween: 30,
      // autoplay: {
      //   delay: 5000,
      //   // disableOnInteraction: false,
      // },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
</script>

<svelte:head>
  <link rel="stylesheet" href="swiper-bundle.min.css">
</svelte:head>

<section class="banner-home bg-blue-50">
  <div class="relative aspect-[1/.52] overflow-hidden">
    <div id="homeBanner" class="swiper w-full h-full group">
      <div class="swiper-wrapper">
        <!-- Slides -->
        {#if bannerHome.length > 0}
          {#each bannerHome as banner (banner.id)}
            <div class="swiper-slide relative">
              <div class="absolute w-full h-full top-0 left-0">
                <img
                  src="{HOST_API}{banner.attributes.image.data.attributes.url || ''}"
                  alt="{banner.attributes.title || ''}"
                  class="w-full h-full object-cover">
              </div>
              <div class="relative w-full h-full max-w-7xl mx-auto px-4 flex items-center">
                <div class="banner-caption pl-12 max-w-lg text-white">
                  <h2 class="text-8xl font-semibold">
                    {banner.attributes.title || ''}
                  </h2>
                  <h3 class="text-8xl font-semibold w-min">
                    {banner.attributes.description || ''}
                  </h3>
                  <a href="{'#'}" class="banner-link">
                    Shopping now <i class='bx bx-right-arrow-alt' ></i>
                  </a>
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-x-4 transition-all ease-in-out duration-300">
        <span class="hover:border-primary-500 hover:text-primary-500">
          <i class='bx bx-left-arrow-alt'></i>
        </span>
      </div>
      <div class="swiper-button-next invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-translate-x-4 transition-all ease-in-out duration-300">
        <span class="hover:border-primary-500 hover:text-primary-500">
          <i class='bx bx-right-arrow-alt'></i>
        </span>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  :global(.swiper-button-prev,.swiper-button-next) {
    @apply !w-10 !h-10 !flex !items-center;
  }

  :global(.swiper-button-prev span,.swiper-button-next span) {
    @apply grid place-items-center w-full h-full rounded-full bg-transparent border border-gray-600 text-gray-600 text-2xl;
  }

  :global(.swiper-button-prev::after,.swiper-button-next::after) {
    @apply !content-none;
  }

  .banner-link {
    @apply uppercase text-sm font-semibold tracking-wider mt-12 hover:text-primary-500 transition-all ease-in-out duration-300 block;
  }
  .banner-link i {
    @apply translate-y-[1px] transition-all ease-in-out duration-300;
  }
  .banner-link:hover i {
    @apply translate-x-4;
  }


  .swiper-slide .banner-caption .banner-link {
    @apply opacity-0 translate-x-80 scale-50 transition-all ease-in-out duration-[.8s];
  }

  .swiper-slide.swiper-slide-active .banner-caption h2,
  .swiper-slide.swiper-slide-active .banner-caption h3 {
    animation: caption-title .8s ease-in-out forwards;
  }
  .swiper-slide.swiper-slide-active .banner-caption .banner-link {
    @apply opacity-100 translate-x-0 scale-100;
  }

  @keyframes caption-title {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }
</style>
