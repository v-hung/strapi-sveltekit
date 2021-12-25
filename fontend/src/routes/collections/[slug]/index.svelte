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
  import Product from "$lib/components/Product.svelte";

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
    $breadcrumb.description = collection?.attributes?.description
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
      <div class="w-full md:w-3/4">
        <div class="toolbar flex py-3 border-y-2 border-stone-300">
          <div class="flex space-x-3">
            <button class="active flex-none grid p-2 grid-cols-2 grid-rows-2 border text-stone-600 hover:text-primary-500 border-current gap-[1px]">
              {#each Array(4) as _}
                <span class="w-2 h-2 bg-current"></span>
              {/each}
            </button>
            <button class="flex-none grid p-2 grid-cols-2 grid-rows-3 text-stone-600 hover:text-primary-500 border border-current gap-[1px]">
              {#each Array(6) as _,i}
                <span class="{(i % 2 == 0) ? 'w-1' : 'w-4 -ml-[5px]'} h-1 bg-current"></span>
              {/each}
            </button>
          </div>
        </div>

        <div class="flex flex-wrap -mx-4 mt-8">
          {#each products as product}
            <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4">
              <Product product={product} />
            </div>
          {/each}
        </div>

        <!-- paginate -->
      </div>

      <!-- side bar -->
      <div class="w-full md:w-1/4 md:order-first">
        left siebar
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .toolbar button.active {
    @apply text-stone-800;
  }
</style>
