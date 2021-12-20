<script lang="ts">
  import { HOST_API } from "$lib/config";

  let product
</script>
<div class="relative aspect-[3/4]">
  <a href="{'#'}" class="product block w-full h-full bg-white rounded-sm">
    <div
      class="absolute w-full h-full top-0 left-0 bg-no-repeat bg-cover gradient-loading"
      style=""
    >
      <img src="{HOST_API}{product?.attributes?.images?.data[0]?.attributes?.url}" onerror="this.classList.add('image-error')" class="w-full h-full object-cover" loading="lazy">
    </div>

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

    <!-- price -->
    <div class="absolute right-4 bottom-4 shadow rounded-sm px-3 py-1">
      <span class="font-semibold">$49.00</span>
      <span class="text-stone-600">$60.00</span>
    </div>
  </a>
</div>

<style lang="postcss">
  .product {
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.05);
    @apply transition-all ease-in-out duration-300;
  }

  .product:hover {
    box-shadow: 7px 7px 15px 0 rgba(0, 0, 0, 0.1);
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
