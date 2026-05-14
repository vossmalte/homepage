<script>
  import Fibonacci from '../../components/fibonacci/Fibonacci.svelte';

  //     style:transform="scale({20 / Math.pow(1.5, n)})"

  let n = 1;
  let clientWidth;
</script>

<h1>Fibonacci with TanStack Query</h1>
<label>
  <button on:click={() => (n = Math.min(n + 1, 30))} class="bounce-btn">+1</button><input
    type="range"
    step="1"
    bind:value={n}
    min="1"
    max="30"
  />{n}</label
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

  .bounce-btn {
    background-color: var(--color-interactive-200);
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
</style>
