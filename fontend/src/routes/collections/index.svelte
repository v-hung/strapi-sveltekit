<script lang="ts">
  import { page } from "$app/stores";
  import { getCollectionInPage } from "$lib/api/collection";
  import { HOST_API } from "$lib/config";
  import { onMount } from "svelte";
  import { breadcrumb } from "../../store";

  let collections = []
  let pagination = null

  const getCollections = async () => {
    try {
      let result = await getCollectionInPage({
        page: $page.query.get('page') || '1'
      })

      collections = await result?.data || []
      pagination = await result?.meta?.pagination || null
    }
    catch (err) {
      console.log(err);
    }
  }

  onMount(async() => {
    await getCollections()

    $breadcrumb.title = 'List Collections'
    $breadcrumb.description =  `There are a total of ${pagination.total} collections `
    $breadcrumb.data = [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'List collections',
        url: '/collections'
      }
    ]
  })
</script>

<section class="list-collections py-12">
  <div class="w-full max-w-7xl px-4 mx-auto">
    <div class="flex flex-wrap -mx-4">
      {#each collections as collection (collection.id)}
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4">
          <a href="collections/{collection?.attributes?.slug}" class="block group relative aspect-[3/4] rounded-md overflow-hidden">
            <div class="absolute w-full h-full top-0 left-0 bg-blue-100">
              <img
                src="{HOST_API}{collection?.attributes?.image?.data?.attributes?.url}"
                alt="{collection?.attributes?.image?.data?.attributes?.caption}"
                class="w-full h-full object-cover group-hover:scale-150 transition-transform ease-linear duration-500 group-hover:duration-[5s]">
            </div>

            <div class="absolute w-full h-full top-0 left-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 flex items-center p-4">
              <div class="w-full text-center text-white translate-y-10 group-hover:translate-y-0 transition-transform ease-in-out duration-300">
                <h1 class="text-xl font-semibold">{collection?.attributes?.title}</h1>
                <h3 class="">{collection?.attributes?.description}</h3>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
