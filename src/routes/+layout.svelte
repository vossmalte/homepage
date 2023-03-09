<script>
  import '../lib/css/tailwind.css';
  import '../lib/css/css-reset.css';
  import '../lib/css/global.css';
  import Footer from '../components/layout/Footer.svelte';
  import Header from '../components/layout/Header.svelte';

  let headerheight = 0;
  let footerheight = 0;
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono" />
  <style>
    body {
      font-family: 'IBM Plex Mono', serif;
    }
  </style>
</svelte:head>
<Header bind:headerheight />
<div class="flex flex-row" style="min-height: calc(100vh - {headerheight}px - {footerheight}px);">
  <div class="w-0 bg-gradient-to-r from-interactive-200 to-background-50 sm:w-full" />
  <main class="p-4 bg-background-50 max-w-5xl w-full sm:min-w-[600px]">
    <slot />
  </main>
  <div class="w-0 bg-gradient-to-r from-background-50 to-secondary-200 sm:w-full" />
</div>
<Footer bind:footerheight />

<style global>
</style>
