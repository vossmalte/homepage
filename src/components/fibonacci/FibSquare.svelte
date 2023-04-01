<script lang="ts">
  export let n = 10;

  function fib(n: number): number {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  }
  let flexDirection: string;
  let backgroundColor: string;
  switch (n % 4) {
    case 0: {
      flexDirection = 'column';
      backgroundColor = 'red';
      break;
    }
    case 1: {
      flexDirection = 'row';
      backgroundColor = 'green';
      break;
    }
    case 2: {
      flexDirection = 'column-reverse';
      backgroundColor = 'yellow';
      break;
    }
    default: {
      flexDirection = 'row-reverse';
      backgroundColor = 'blue';
      break;
    }
  }
  const r = fib(n);
  const R = r * 10;
</script>

<div style:flex-direction={flexDirection}>
  <div
    class="square"
    style:height="{R}px"
    style:width="{R}px"
    style:font-size="{r / 3}rem"
    style:background-color={backgroundColor}
  >
    <p>{fib(n)}</p>
  </div>
  {#if n > 1}
    <svelte:self n={n - 1} />
  {/if}
</div>

<style>
  p {
    margin: auto;
  }
  .square {
    outline: 1px solid black;
  }
  div {
    display: flex;
    width: fit-content;
  }
</style>
