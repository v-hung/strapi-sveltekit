<script lang="ts">
  import { HOST_API } from "$lib/config"
  import Article from "$lib/components/Article.svelte";
  import { onMount } from "svelte";
  import { getArticleByBlog } from "$lib/api/article";
  import Loading2 from "$lib/loading/Loading2.svelte";
  import Swiper, { Navigation, Autoplay } from 'swiper';
  Swiper.use([Navigation,Autoplay]);

  export let title = ''
  export let blogs = []
  export let image = null
  export let showBlogs = false
  let loading = false
  let blog = []
  let blogsSelected = blogs[0]?.attributes?.slug || null
  let idComponent = 'listArticle' + new Date().getTime()

  const getArticles = async (slug) => {
    try {
      if (loading || !slug) return

      loading = true
      let result = await getArticleByBlog({slug:slug})
      blog = result?.data || []
    }
    catch (error){
      console.log(error);
    }
    finally {
      loading = false
    }
  }

  const selectBlog = async (slug) => {
    blogsSelected = slug
    await getArticles(slug)
    swiperListProduct.loopDestroy()
    swiperListProduct.loopCreate()
  }

  var swiperListProduct = null

  onMount(async() => {
    await getArticles((blogs.length > 0) ? blogs[0]?.attributes?.slug : '')

    swiperListProduct = new Swiper('#'+idComponent, {
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

<section class="article-slider py-8">
  <div class="pt-20 relative overflow-hidden">
    <div class="absolute w-full top-0 left-0">
      <img src="{HOST_API}{image?.attributes?.url}" alt="{image?.attributes?.caption}" class="w-full ">
    </div>
    <div class="relative w-full max-w-7xl mx-auto px-4 md:px-8">
      <div class="text-center py-8 text-white">
        <span class="text-4xl">
          <i class='bx bxs-bookmark-alt-plus' ></i>
        </span>
        <h2 class="relative uppercase font-semibold text-2xl pt-2 pb-8">
          {title}
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2.5 border-y-2 skew-x-[70deg]"></span>
        </h2>
      </div>

      {#if showBlogs}
        <div class="relative flex justify-center pt-2 pb-10">
          {#each blogs as collection (collection.id)}
            <a
              on:click|preventDefault="{() => selectBlog(collection?.attributes?.slug)}"
              href="blogs/{collection?.attributes?.slug}"
              class="{blogsSelected == collection?.attributes?.slug ? 'text-primary-500' : ''} px-4 uppercase text-stone-400 hover:text-primary-500 text-sm font-semibold"
            >{collection?.attributes?.title}</a>
          {/each}
        </div>
      {/if}

      <!-- slider -->
      <div class="slider relative group">
        <div id="{idComponent}" class="swiper w-full h-full overflow-hidden py-4">
          <div class="swiper-wrapper">
            {#each blog as article (article.id)}
              <div class="swiper-slide relative px-4">
                <Article article={article}/>
              </div>
            {:else}
              <p class="text-center py-4 w-full">Không có sản phẩm nào</p>
            {/each}
          </div>
        </div>

        <div class="swiper-button-prev left-4 group-hover:-translate-x-1/2" style="{blog.length > 0 ? '' : 'display: none'}">
          <span class="!bg-white shadow border-none hover:border-primary-500 hover:text-primary-500">
            <i class='bx bx-left-arrow-alt'></i>
          </span>
        </div>
        <div class="swiper-button-next right-4 group-hover:translate-x-1/2" style="{blog.length > 0 ? '' : 'display: none'}">
          <span class="!bg-white shadow border-none hover:border-primary-500 hover:text-primary-500">
            <i class='bx bx-right-arrow-alt'></i>
          </span>
        </div>

        <!-- loading -->

        {#if loading}
          <Loading2 />
        {/if}
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
