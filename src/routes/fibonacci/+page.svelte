<script>
  import FibSquare from '../../components/fibonacci/FibSquare.svelte';

  let n = 8;
</script>

<h1>Fibonacci with TanStack Query</h1>
<label><input type="range" step="1" bind:value={n} min="1" max="50" />{n}</label>
<div style:transform="scale({20/Math.pow(1.5,n)})">
  {#key n}
    <FibSquare {n} />
  {/key}
</div>

<style>
  div {
    transform-origin: 0 0;
  }
</style>
