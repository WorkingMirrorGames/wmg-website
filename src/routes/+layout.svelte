<script lang="ts">
  import { page } from '$app/stores';

  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />

  {#if $page.url.pathname === '/'}
    <slot />
  {:else}
    <div class="flex flex-grow justify-center p-5 sm:p-10">
      <div class="w-full max-w-screen-lg">
        <slot />
      </div>
    </div>
  {/if}
</div>

<Footer />
