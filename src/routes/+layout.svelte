<script lang="ts">
  import '../lib/css/variables.css';
  import '../lib/css/css-reset.css';
  import '../lib/css/global.css';
  import Header from '../components/layout/Header.svelte';

  let headerheight: number;
  let footerheight = 0;
</script>

<Header bind:headerheight />
<div class="layout-row" style="min-height: calc(100vh - {headerheight}px - {footerheight}px);">
  <div class="sidebar-left"></div>
  <main
    class="content"
    style:padding-bottom="{footerheight + 8}px"
  >
    <slot />
  </main>
  <div class="sidebar-right"></div>
</div>

<style>
  .layout-row {
    display: flex;
    flex-direction: row;
  }

  .sidebar-left {
    width: 0;
    background: linear-gradient(to right, var(--color-interactive-200), var(--color-background-50));
  }

  .sidebar-right {
    width: 0;
    background: linear-gradient(to right, var(--color-background-50), var(--color-secondary-200));
  }

  main.content {
    width: 100%;
    max-width: 64rem;
    background-color: var(--color-background-50);
    padding: 1rem;
  }

  @media (min-width: 640px) {
    .sidebar-left { width: 100%; }
    .sidebar-right { width: 100%; }
    main.content { min-width: 620px; }
  }
</style>
