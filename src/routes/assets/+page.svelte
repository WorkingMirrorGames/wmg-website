<script lang="ts">
  import type { PageData } from './$types';
  import Product from '$lib/components/Product.svelte';
  import ProductGrid from '$lib/components/ProductGrid.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>Working Mirror Games - Asset Catalog</title>
</svelte:head>

<ProductGrid>
  {#each data.assets as { id, ...asset }}
    <Product url={`/asset/${id}`} {...asset} />
  {/each}
</ProductGrid>
