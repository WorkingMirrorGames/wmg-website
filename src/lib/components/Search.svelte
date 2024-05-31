<script lang="ts">
  import Icon from '@iconify/svelte';
  import { linear } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';

  import { type SearchResult } from '$lib/types';

  export let value = '';
  export let results: SearchResult[] = [];

  let search: HTMLDivElement | null = null;
  let input: HTMLInputElement | null = null;

  let collapsed = true;
  let open = false;

  const [send, receive] = crossfade({
    duration: 200,
    easing: linear
  });

  const key = 'button';

  function onClear() {
    value = '';
    input?.focus();
  }

  function onExpand() {
    collapsed = false;
    input?.focus();
  }

  function onChange() {
    open = !!value;
  }

  function onFocus() {
    if (value) {
      open = true;
    }
  }

  function onFocusLost(e: FocusEvent) {
    if (isChild(e.relatedTarget as HTMLElement)) {
      // Ignore clicks inside search bar.
      return;
    }

    if (value === '') {
      collapsed = true;
    }

    open = false;
  }

  function isChild(element: HTMLElement | null): boolean {
    let current = element;
    while (current !== null && current !== document.body) {
      if (current === search) {
        return true;
      }

      current = current.parentElement;
    }

    return false;
  }

  function onItemClicked() {
    value = '';
    open = false;
    collapsed = true;

    return true;
  }
</script>

<div
  bind:this={search}
  class="form-control dropdown dropdown-bottom flex-grow pl-10"
>
  <input
    bind:this={input}
    bind:value
    on:blur={onFocusLost}
    on:keyup={onChange}
    on:focus={onFocus}
    type="text"
    placeholder="Search"
    class="input input-bordered w-full pr-12"
    class:collapsed
  />

  {#if collapsed}
    <button
      on:click={onExpand}
      in:send={{ key }}
      out:receive={{ key }}
      class="btn btn-ghost btn-md btn-circle absolute top-0 right-2"
    >
      <Icon icon="material-symbols:search" height={32} />
    </button>
  {:else}
    <button
      on:click={onClear}
      in:send={{ key }}
      out:receive={{ key }}
      class="btn btn-ghost btn-sm btn-circle absolute top-2 right-2"
    >
      <Icon icon="material-symbols:close" height={24} />
    </button>
  {/if}

  {#if open && results.length > 0}
    <ul
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52"
    >
      {#each results as { text, url }}
        <li>
          <a href={url} on:click={() => onItemClicked()}>{text}</a>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  input {
    transform-origin: right;
    transition-property: scale opacity;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out linear;
  }

  .collapsed {
    opacity: 0;
    scale: 0 1;
  }
</style>
