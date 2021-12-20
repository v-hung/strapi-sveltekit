<script lang="ts">
  import Product from "$lib/components/Product.svelte";
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  let array = 2;
</script>

<section class="product-slider py-8 bg-gray-50">
  <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
    <div class="text-center py-8">
      <span class="text-4xl">
        <i class='bx bxs-bookmark-alt-plus' ></i>
      </span>
      <h2 class="relative uppercase font-semibold text-2xl pt-2 pb-8">
        bestseller products
        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2.5 border-y-2 skew-x-[70deg]"></span>
      </h2>
    </div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      on:slideChange={() => console.log('slide change')}
      on:swiper={(e) => console.log(e.detail[0])}
    >
      <!-- <div class="w-full h-full"> -->
        {#each Array(12) as _,i}
          <SwiperSlide>
            <Product />
          </SwiperSlide>
        {/each}
      <!-- </div> -->
    </Swiper>
  </div>
</section>
