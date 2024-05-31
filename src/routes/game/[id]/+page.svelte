<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Working Mirror Games - {data.game.name}</title>
</svelte:head>

<article class="prose xl:prose-lg">
  <h1>{data.game.name}</h1>
  <div>{data.game.description}</div>
</article>
