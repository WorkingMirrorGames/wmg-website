<script lang="ts">
  import Feature from '$lib/components/Feature.svelte';
</script>

<svelte:head>
  <title>Working Mirror Games - Home</title>
</svelte:head>

<div class="hero">
  <div class="hero-overlay bg-opacity-60"></div>
  <div
    class="hero-content gap-12 max-w-screen-lg w-full justify-start text-neutral-content"
  >
    <div class="flex-grow prose-2xl">
      <h1 class="mb-5 font-bold">Hello there</h1>
      <p class="mb-16 max-w-screen-sm">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <div class="flex justify-end gap-8">
        <a href="/games">
          <button class="btn btn-accent btn-lg">Browse Games</button>
        </a>
        <a href="/assets">
          <button class="btn btn-outline btn-lg">Browse Assets</button>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div
    class="flex flex-grow flex-col gap-20 md:gap-40 lg:gap-60 max-w-screen-lg p-5 sm:p-10"
  >
    <Feature title="Innovation" flip />
    <Feature title="Excitement" />
  </div>
</div>

<style>
  .hero {
    min-height: calc(100vh - 64px);
    background-image: none;
  }

  button {
    min-width: 180px;
  }
</style>
