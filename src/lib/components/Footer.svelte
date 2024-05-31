<script lang="ts">
  import Icon from '@iconify/svelte';

  import LogoIcon from '$lib/components/LogoIcon.svelte';
</script>

<div class="flex flex-col items-center p-5 sm:p-10 gap-5 sm:gap-10 bg-base-300">
  <footer class="footer max-w-screen-lg text-base-content">
    <nav class="prose">
      <h6 class="footer-title">Products</h6>
      <a href="/games" class="link link-hover">Games</a>
      <a href="/assets" class="link link-hover">Assets</a>
    </nav>
    <nav class="prose">
      <h6 class="footer-title">Company</h6>
      <a href="/about" class="link link-hover">About</a>
      <a href="/contact" class="link link-hover">Contact</a>
    </nav>
    <nav class="prose">
      <h6 class="footer-title">Legal</h6>
      <a href="/terms-conditions" class="link link-hover">Terms & Conditions</a>
      <a href="/privacy-policy" class="link link-hover">Privacy Policy</a>
    </nav>
    <nav class="prose">
      <h6 class="footer-title">Connect</h6>
      <div class="grid grid-flow-col gap-4">
        <div class="tooltip" data-tip="Discord">
          <a
            href="https://discord.com/users/1245837408424038505"
            target="_blank"
            rel="noopener"
          >
            <Icon icon="ic:baseline-discord" height="32" />
          </a>
        </div>
        <div class="tooltip" data-tip="Steam">
          <a
            href="https://steamcommunity.com/profiles/76561199690211191"
            target="_blank"
            rel="noopener"
          >
            <Icon icon="mdi:steam" height="32" />
          </a>
        </div>
        <div class="tooltip" data-tip="GitHub">
          <a
            href="https://www.github.com/workingmirrorgames"
            target="_blank"
            rel="noopener"
          >
            <Icon icon="mdi:github" height="32" />
          </a>
        </div>
      </div>
    </nav>
  </footer>

  <footer class="footer items-center max-w-screen-lg text-base-content">
    <aside class="prose prose-img:m-0 prose-p:m-0 items-center grid-flow-col">
      <LogoIcon />
      <p>
        <span class="text-2xl">&#169;</span> 2024 Working Mirror Games
        e.&nbsp;K.
        <br />
        All rights reserved.
      </p>
    </aside>
    <nav class="flex items-center md:justify-self-end">
      <p class="prose">Website powered by</p>
      <a href="https://github.com/sveltejs/svelte/">
        <img
          src="/svelte-logo.svg"
          width={48}
          height={48}
          alt="Svelte Logo"
          class="inline"
        />
      </a>
    </nav>
  </footer>
</div>
