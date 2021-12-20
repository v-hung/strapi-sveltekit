<script lang="ts">
  // import Swiper from "swiper/svelte";
  import Product from "$lib/components/Product.svelte";

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
    <div class="flex flex-wrap -mx-4">
      <div class="w-1/4 px-4">
        <Product />
      </div>
    </div>
  </div>
</section>
