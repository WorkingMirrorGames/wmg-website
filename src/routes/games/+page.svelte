<script lang="ts">
  import type { PageData } from './$types';
  import Product from '$lib/components/Product.svelte';
  import ProductGrid from '$lib/components/ProductGrid.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>Working Mirror Games - Games Catalog</title>
</svelte:head>

<ProductGrid>
  {#each data.games as { id, ...game }}
    <Product url={`/game/${id}`} {...game} />
  {/each}
</ProductGrid>
