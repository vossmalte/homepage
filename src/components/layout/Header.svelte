<script lang="ts">
  export let headerheight: number;
</script>

<header bind:clientHeight={headerheight}>
  <nav>
    <a href="/">Home</a>
    <a href="/frisbee">Frisbee</a>
    <a href="/programming">Programming</a>
    <a href="/about">About</a>
  </nav>
</header>

<style lang="postcss">
  header {
    position: sticky;
    z-index: 99;
    top: 0;
    width: 100%;
    @apply bg-background-300;
    padding: 4px;
    display: flex;
    justify-content: right;
    align-items: flex-end;
  }
  nav {
    justify-self: right;
    align-items: center;
    height: 2rem;
  }
  a {
    font-size: 1rem;
    @apply text-primary-600;
    text-decoration-line: none;
    position: relative;
  }
  a:hover {
    @apply animate-pulse;
  }
  a:hover::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 80%;
    width: 100%;
    left: 0;
    height: 5px;
    border-radius: 2px;
    background: linear-gradient(
      111.3deg,
      theme(colors.primary.400),
      9.6%,
      theme(colors.interactive.400) 93.6%
    );
  }
</style>
