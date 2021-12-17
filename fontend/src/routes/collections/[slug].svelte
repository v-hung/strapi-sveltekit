<script context="module">
	import { getCollectionWithSlug } from "$lib/api/collection";
	export async function load({ page, fetch, session, stuff }) {
    try {
		  const result = await getCollectionWithSlug({slug: page.params.slug});

      if (result.data.length > 0) {
        return {
          props: {
            collection: await result
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
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
</script>

<Breadcrumb />
