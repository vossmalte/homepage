<script lang="ts">
  export let headerheight: number;
</script>

<header bind:clientHeight={headerheight}>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<style lang="postcss">
  header {
    position: sticky;
    z-index: 99;
    top: 0;
    width: 100%;
    background-color: var(--color-background-300);

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
    color: var(--color-primary-600);

    font-size: 1rem;
    text-decoration-line: none;
    position: relative;
  }

  a:hover {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
      var(--color-primary-400),
      9.6%,
      var(--color-interactive-400) 93.6%
    );
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
</style>
