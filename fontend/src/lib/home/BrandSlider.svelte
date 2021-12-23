<script lang="ts">
  import { HOST_API } from "$lib/config";
  import { getBrand } from "$lib/api/brand";
  import { onMount } from "svelte";
  import Image from "$lib/components/Image.svelte";
  let idComponent = 'listArticle' + new Date().getTime()
  import Swiper, { Navigation, Autoplay } from 'swiper';
  Swiper.use([Navigation,Autoplay]);

  let brands = []

  const getListBrand = async () => {
    try {
      let result = await getBrand({})
      brands = result?.data || []
    }
    catch (error){
      console.log(error);
    }
  }

  var swiperBrand = null

  onMount(async() => {
    await getListBrand()

    swiperBrand = new Swiper('#'+idComponent, {
      loop: true,
      observer: true,
      spaceBetween: 30,
      slidesPerView: 6,
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

<section class="brand-slider py-16">
  <div class="relative overflow-hidden">
    <div class="relative w-full max-w-7xl mx-auto px-4 md:px-8">

      <!-- slider -->
      <div class="slider relative group">
        <div id="{idComponent}" class="swiper w-full h-full overflow-hidden py-4">
          <div class="swiper-wrapper">
            {#each brands as brand (brand.id)}
              <div class="swiper-slide relative px-4 h-initial">
                <a href="brands/{brand?.attributes?.slug}" class="block w-full aspect-[5/3] relative">
                  <img src="{HOST_API}{brand?.attributes?.image?.data?.attributes?.url}" alt="{brand?.attributes?.image?.data?.attributes?.caption}" class="block w-full h-full object-cover">
                </a>
              </div>
            {:else}
              <p class="text-center py-4 w-full">Không có nhãn hiệu nào</p>
            {/each}
          </div>
        </div>

        <div class="swiper-button-prev left-4 group-hover:-translate-x-1/2" style="{brands.length > 0 ? '' : 'display: none'}">
          <span class="!bg-white shadow border-none hover:border-primary-500 hover:text-primary-500">
            <i class='bx bx-left-arrow-alt'></i>
          </span>
        </div>
        <div class="swiper-button-next right-4 group-hover:translate-x-1/2" style="{brands.length > 0 ? '' : 'display: none'}">
          <span class="!bg-white shadow border-none hover:border-primary-500 hover:text-primary-500">
            <i class='bx bx-right-arrow-alt'></i>
          </span>
        </div>
      </div>
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

