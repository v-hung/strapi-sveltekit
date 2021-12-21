<script context="module">
	import { getCollectionBySlug } from "$lib/api/collection";
	export async function load({ page, fetch, session, stuff }) {
    try {
		  const result = await getCollectionBySlug({slug: page.params.slug});

      if (result.data.length > 0) {
        return {
          props: {
            collection: await result.data[0]
          }
        };
      } else {
        return {
        status: 404,
			  error: new Error(`Not found collection`)
      };
      }

    }
    catch (error) {
      return {
        status: 503,
			  error: new Error(`Could not load collection`)
      };
    }
	}
</script>

<script lang="ts">
  import { page } from "$app/stores";
  import { HOST_API } from "$lib/config";
  import { onMount } from "svelte";
  import { breadcrumb } from "../../../store";
  import { getProductByCollection } from "$lib/api/product";

  export let collection = null
  let pagination = null
  let products = []

  const getProduct = async () => {
    try {
      let result = await getProductByCollection({slug: collection?.attributes?.slug})
      products = await result?.data || []
    }
    catch (error) {
      console.log(error);
    }
  }

  const checkSaleProduct = (product) => {
    if (product?.attributes?.price == product?.attributes?.cost) {

    }
  }

  onMount(async() => {
    $breadcrumb.title = collection?.attributes?.title
    $breadcrumb.description = collection?.attributes?.title
    $breadcrumb.data = [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: collection?.attributes?.title,
        url: collection?.attributes?.slug
      }
    ]

    await getProduct()
  })
</script>


<section class="collection py-12 bg-gray-100">
  <div class="w-full max-w-7xl mx-auto px-4">
    <div class="flex flex-wrap md:flex-nowrap">
      <div class="w-3/4">
        <div class="flex flex-wrap -mx-4">
          {#each products as product}
            <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <a
                href="/products/{product?.attributes?.slug}"
                class="block relative shadow bg-white aspect-[3/4]">
                <div
                  class="absolute w-full h-full top-0 left-0 bg-primary-50 bg-no-repeat bg-cover"
                  style="background-image: url({HOST_API}{product?.attributes?.images?.data[0]?.attributes?.url});"
                ></div>

                <div class="badge badge-new space-x-2">
                  <span class="inline-flex text-[4px]"><i class='bx bxs-circle'></i></span>
                  <span class="text-xs font-semibold">-9%</span>
                </div>
                <div class="badge badge-sale space-x-2">
                  <span class="inline-flex text-[4px]"><i class='bx bxs-circle'></i></span>
                  <span class="text-xs font-semibold">-9%</span>
                </div>
              </a>
            </div>
          {/each}
        </div>
      </div>

      <!-- side bar -->
      <div class="w-1/4 md:order-first">
        left siebar
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
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
