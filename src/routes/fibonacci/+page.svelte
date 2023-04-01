<script>
  import Fibonacci from '../../components/fibonacci/Fibonacci.svelte';

  //     style:transform="scale({20 / Math.pow(1.5, n)})"

  let n = 1;
  let clientWidth;
</script>

<h1>Fibonacci with TanStack Query</h1>
<label>
  <button on:click={() => (n = Math.min(n + 1, 30))} class="animate-bounce bg-interactive-200"
    >+1</button
  ><input type="range" step="1" bind:value={n} min="1" max="30" />{n}</label
>
<div class="outer" bind:clientWidth>
  <Fibonacci {n} {clientWidth} />
</div>

<style>
  .outer {
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
  }
  label {
    display: flex;
    gap: 4px;
    margin: 8px 0;
  }
</style>
