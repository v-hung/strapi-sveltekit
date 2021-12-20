<script lang="ts">
  import { getCollectionWithType } from "$lib/api/collection";
  import { onMount } from "svelte";
  import { HOST_API } from "$lib/config";

  let collections = []

  const getCollection = async () => {
    try {
      let result = await getCollectionWithType({type:'temporary', limit: 3})

      collections = await result.data

    } catch (error) {
      console.log(error);
    }
  }

  onMount(async() => {
    await getCollection()

  })
</script>

<section class="banner-static relative z-10 bg-gray-50">
  <div class="w-full max-w-7xl mx-auto px-4 -mt-36">
    <div class="flex p-6 space-x-6 bg-white shadow-sm">
      {#each collections as colletion, i (colletion.id)}
        <a href="{(colletion.attributes.slug) ? `collections/${colletion.attributes.slug}` : '#'}" class="{(i==1) ? 'w-1/2 aspect-[1.6379310344827587/1] bg-primary-100' : 'w-1/4 aspect-[0.7758620689655172/1]'} relative overflow-hidden flex items-center justify-center group">
          <div class="absolute w-full h-full top-0 left-0">
            <img
              src="{HOST_API}{colletion.attributes.image.data.attributes.url || ''}"
              alt="{colletion.attributes.title || ''}"
              class="w-full h-full object-cover group-hover:scale-125 transition-transform ease-in-out duration-1000">
          </div>
          <div class="relative p-4 text-white text-center">
            <h2 class="uppercase font-semibold text-2xl">{colletion.attributes.title || ''}</h2>
            <h3 class="uppercase text-base">{colletion.attributes.description || ''}</h3>
          </div>
        </a>
      {/each}

    </div>
  </div>
</section>
