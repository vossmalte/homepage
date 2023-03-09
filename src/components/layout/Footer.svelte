<script lang="ts">
  export let footerheight: number;
</script>

<footer bind:clientHeight={footerheight}><span> Contact me via my form </span></footer>

<style lang="postcss">
  footer {
    display: grid;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;
    justify-items: center;

    @apply bg-background-400;
    @apply text-primary-700;
  }
</style>
