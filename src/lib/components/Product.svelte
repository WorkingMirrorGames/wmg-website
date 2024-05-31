<script lang="ts">
  export let url: string;
  export let name: string;
  export let tags: string[];
</script>

<div
  class="card w-64 lg:w-80 xl:w-92 rounded-default bg-base-300 shadow hover:shadow-xl hover:scale-105 cursor-pointer"
>
  <figure>
    <img
      src="https://placehold.co/600x400"
      alt="Game"
      class="max-h-72 lg:max-h-96 object-cover"
    />
  </figure>

  <article class="card-body prose p-4 lg:p-8">
    <h2 class="card-title">{name}</h2>
    <div class="flex gap-2">
      {#each tags as tag}
        <div class="badge badge-outline">{tag}</div>
      {/each}
    </div>
  </article>

  <a href={url}>
    <span class="absolute inset-0 z-[1] hover:bg-opacity-10 hover:bg-white">
    </span>
  </a>
</div>

<style>
  .card {
    transition-property: box-shadow scale;
    transition-duration: 200ms;
    transition-timing-function: linear;
  }

  a,
  span {
    border-radius: inherit;
  }

  span {
    transition-property: background-color;
    transition-duration: 200ms;
    transition-timing-function: linear;
  }
</style>
