<script lang="ts">
  import '../lib/css/tailwind.css';
  import '../lib/css/css-reset.css';
  import '../lib/css/global.css';
  import Header from '../components/layout/Header.svelte';

  let headerheight: number;
  let footerheight = 0;
</script>

<Header bind:headerheight />
<div class="flex flex-row" style="min-height: calc(100vh - {headerheight}px - {footerheight}px);">
  <div class="w-0 bg-gradient-to-r from-interactive-200 to-background-50 sm:w-full"></div>
  <main
    class="w-full max-w-5xl bg-background-50 p-4 sm:min-w-[620px]"
    style:padding-bottom="{footerheight + 8}px"
  >
    <slot />
  </main>
  <div class="w-0 bg-gradient-to-r from-background-50 to-secondary-200 sm:w-full"></div>
</div>
