<script lang="ts">
  export let title: string;
  export let flip = false;
</script>

<div class="flex flex-1 justify-center">
  <div
    class="flex justify-between w-full gap-4 md:gap-8"
    class:flex-row-reverse={flip}
  >
    <div class="prose md:prose-xl">
      <h2>{title}</h2>
      <p class="max-w-screen-sm">
        Quaerat fugiat ut assumenda excepturi exercitationem quasi.
      </p>
    </div>
    <img
      src="https://placehold.co/800x800"
      alt="Attract"
      class="max-h-40 sm:max-h-56 md:max-h-72 lg:max-h-96"
    />
  </div>
</div>
