<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Working Mirror Games - {data.asset.name}</title>
</svelte:head>

<article class="prose xl:prose-lg">
  <h1>{data.asset.name}</h1>
  <div>{data.asset.description}</div>
</article>
