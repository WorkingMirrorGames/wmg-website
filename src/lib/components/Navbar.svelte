<script lang="ts">
  import Icon from '@iconify/svelte';
  import FlexSearch from 'flexsearch';

  import { page } from '$app/stores';
  import Logo from '$lib/components/Logo.svelte';
  import LogoIcon from '$lib/components/LogoIcon.svelte';
  import Search from '$lib/components/Search.svelte';
  import products from '$lib/data/products.json';
  import type { Products, SearchResult } from '$lib/types';

  const items = [
    { name: 'Home', icon: 'mdi:home', path: '/' },
    { name: 'Games', icon: 'gg:games', path: '/games', alias: ['/game'] },
    { name: 'Assets', icon: 'fa:gears', path: '/assets', alias: ['/asset'] },
    { name: 'Contact', icon: 'mdi:contact', path: '/contact' }
  ];

  const index = new FlexSearch.Document({
    document: {
      id: 'id',
      index: [
        {
          field: 'name',
          tokenize: 'full'
        },
        {
          field: 'tags',
          tokenize: 'strict'
        }
      ]
    }
  });

  Object.values(products).forEach(product => index.add(product));

  let searchTerm = '';
  let searchResults: SearchResult[] = [];

  $: updateSearchResults(searchTerm);

  function updateSearchResults(query: string) {
    const results = index.search(searchTerm, {
      limit: 8,
      suggest: true
    });

    searchResults = results.reduce((prev, curr) => {
      const arr = curr.result.map(id => {
        const product = (products as Products)[id];

        return {
          text: product.name,
          url: `${product.type === 'Asset' ? '/asset' : '/game'}/${product.id}`
        };
      });

      prev.push(...arr);

      return prev;
    }, [] as SearchResult[]);
  }

  function isActive(
    url: string,
    path: string,
    alias: string[] | undefined
  ): boolean {
    // Special case since every link starts width '/'.
    if (url === '/' || path === '/') {
      return url === path;
    }

    if (alias) {
      return url.startsWith(path) || alias.some(p => url.startsWith(p));
    }

    return url.startsWith(path);
  }
</script>

<div class="flex justify-center bg-primary px-2">
  <div class="flex flex-1 justify-end self-center">
    <LogoIcon class="hidden xl:flex" />
  </div>
  <div class="navbar basis-screen-lg p-0">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <Icon icon="material-symbols:menu" height={32} />
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {#each items as { name, icon, path, alias }}
            <li>
              <a
                href={path}
                class="text-lg"
                class:active={isActive($page.url.pathname, path, alias)}
              >
                <Icon {icon} />
                {name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <Logo class="hidden lg:inline-flex" />
    </div>
    <div class="navbar-center hidden sm:max-lg:flex">
      <Logo class="sm:max-md:text-base" />
    </div>
    <div class="navbar-center hidden lg:flex">
      <div role="tablist" class="tabs tabs-bordered tabs-lg">
        {#each items as { name, icon, path, alias }}
          <a
            href={path}
            role="tab"
            class="tab"
            class:tab-active={isActive($page.url.pathname, path, alias)}
          >
            <Icon {icon} class="mr-2" width={24} />
            {name}
          </a>
        {/each}
      </div>
    </div>
    <div class="navbar-end flex">
      <Search bind:value={searchTerm} results={searchResults} />
    </div>
  </div>
  <div class="flex-1"></div>
</div>
