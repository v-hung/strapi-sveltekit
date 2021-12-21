<script lang="ts">
  import { HOST_API } from "$lib/config";
  import Image from "$lib/components/Image.svelte";

  let product
  let img = {}
</script>
<div class="relative aspect-[3/4]">
  <a href="{'#'}" class="product relative block w-full h-full bg-white rounded-sm overflow-hidden select-none">
    <Image img="{img}"/>

    <!-- badge -->
    <div class="badge badge-new space-x-2">
      <span class="inline-flex text-[4px]"><i class='bx bxs-circle'></i></span>
      <span class="text-xs font-semibold">-9%</span>
    </div>
    <div class="badge badge-sale space-x-2">
      <span class="inline-flex text-[4px]"><i class='bx bxs-circle'></i></span>
      <span class="text-xs font-semibold">-9%</span>
    </div>

    <!-- action -->
    <div class="action absolute right-4 top-14 bottom-14 flex flex-col justify-center space-y-2">
      <a href="/" style="--delay: 0s" class="w-9 h-9">
        <span class="">
          <i class='bx bx-cart' ></i>
        </span>
      </a>
      <a href="/" style="--delay: 0.05s" class="grid w-9 h-9">
        <span class="">
          <i class='bx bx-heart'></i>
        </span>
      </a>
      <a href="/" style="--delay: 0.1s" class="grid w-9 h-9">
        <span class="">
          <i class='bx bx-collapse-alt' ></i>
        </span>
      </a>
      <a href="/" style="--delay: 0.15s" class="grid w-9 h-9">
        <span class="">
          <i class='bx bx-search-alt-2' ></i>
        </span>
      </a>
    </div>

    <!-- price -->
    <div class="absolute right-4 bottom-4 shadow rounded-sm px-3 py-1">
      <span class="font-semibold">$49.00</span>
      <span class="text-stone-600">$60.00</span>
    </div>
  </a>

  <h2 class="font-semibold pt-5 pb-1">
    <a href="{product?.url}">Hollister Backyard</a>
  </h2>
  <p class="inline relative">
    <span class="inline-flex text-stone-400 text-sm">
      <i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i>
    </span>
    <span style="width: 69%;" class="absolute whitespace-nowrap w-full h-full top-0 left-0 overflow-hidden text-primary-600 text-sm">
      <i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i><i class='bx bx-star'></i>
    </span>
  </p>
</div>

<style lang="postcss">
  .product {
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.05);
    @apply transition-all ease-in-out duration-300;
  }

  .product:hover {
    box-shadow: 7px 7px 15px 0 rgba(0, 0, 0, 0.1);
  }

  .product .action a {
    @apply inline-flex transition-all ease-in-out duration-500 translate-x-16 delay-[var(--delay)];
  }

  .product:hover .action a {
    @apply translate-x-0;
  }

  .product .action a span{
    @apply grid transition-all ease-in-out duration-100 w-full h-full rounded-full bg-gray-100 place-content-center hover:bg-primary-500 hover:text-white;
  }

  .badge {
    @apply absolute right-4 top-4 flex items-center text-white px-2 py-1.5 rounded;
  }
  .badge::before {
    @apply content-[''] absolute w-2 h-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rotate-45;
  }

  .badge.badge-sale {
    @apply bg-amber-500;
  }
  .badge.badge-sale::before {
    @apply bg-amber-500;
  }

  .badge.badge-new {
    @apply bg-green-500;
  }
  .badge.badge-new::before {
    @apply bg-green-500;
  }
</style>
