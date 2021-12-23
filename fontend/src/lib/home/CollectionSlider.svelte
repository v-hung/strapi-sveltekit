<script lang="ts">
  import { onMount } from "svelte";
  import Loading2 from "$lib/loading/Loading2.svelte";
  import Image from "$lib/components/Image.svelte";
  import Swiper, { Navigation, Autoplay } from 'swiper';
  Swiper.use([Navigation,Autoplay]);

  export let collections = []
  let idComponent = 'listCollection' + new Date().getTime()
  let swiperListCollection = null
  onMount(async() => {
    swiperListCollection = new Swiper('#'+idComponent, {
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

<section class="collection-slider pt-16 pb-8">
  <div id="{idComponent}" class="swiper w-full h-full overflow-hidden py-4 group">
    <div class="swiper-wrapper">
      {#each collections as collection (collection.id)}
        <div class="swiper-slide">
          <a href="/collections/{collection?.attributes?.slug}" class="block w-full aspect-[3/4] relative">
            <div class="block w-full h-full relative">
              <Image img="{collection?.attributes?.image?.data}"/>
            </div>

            <span class="bg-slide absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center bg-transparent transition-all duration-500 ease-in-out"></span>

            <div class="bg-content opacity-0 absolute w-full h-full top-0 left-0 flex items-center">
              <div class="text-white p-4 w-full text-center text-sm">
                <h2 class="text-lg uppercase font-semibold">{collection?.attributes?.title}</h2>
                <p class="pt-2 pb-12 translate-y-10 transition-all duration-700 ease-in-out">{collection?.attributes?.description}</p>
                <a href="/collections/{collection?.attributes?.slug}" class="block uppercase text-primary-500 font-semibold translate-y-6 transition-all duration-700 ease-in-out delay-100">view collection</a>
              </div>
            </div>
          </a>
        </div>
      {:else}
        <p class="text-center py-4 w-full">Không có sản phẩm nào</p>
      {/each}
    </div>

    <div class="swiper-button-prev left-4 group-hover:left-0" style="{collections.length > 0 ? '' : 'display: none'}">
      <span class="!bg-white shadow border-none hover:border-primary-500 hover:text-primary-500">
        <i class='bx bx-left-arrow-alt'></i>
      </span>
    </div>
    <div class="swiper-button-next right-4 group-hover:right-0" style="{collections.length > 0 ? '' : 'display: none'}">
      <span class="!bg-white shadow border-none hover:border-primary-500 hover:text-primary-500">
        <i class='bx bx-right-arrow-alt'></i>
      </span>
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

  .swiper-slide:hover .bg-slide {
    @apply w-full h-full bg-black/60;
  }

  .swiper-slide:hover .bg-content {
    @apply opacity-100;
  }
  .swiper-slide:hover .bg-content p{
    @apply translate-y-0;
  }
  .swiper-slide:hover .bg-content a{
    @apply translate-y-0;
  }
</style>
