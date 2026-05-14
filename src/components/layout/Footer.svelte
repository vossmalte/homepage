<script lang="ts">
  export let footerheight: number;
</script>

<footer bind:clientHeight={footerheight}><span> Contact me via my form </span></footer>

<style>
  footer {
    display: grid;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;
    justify-items: center;

    background-color: var(--color-background-400);
    color: var(--color-primary-700);
  }
</style>
