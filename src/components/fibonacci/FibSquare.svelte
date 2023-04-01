<script lang="ts">
  export let n = 10;
  import { slide } from 'svelte/transition';
  import { createQuery, useQueryClient } from '@tanstack/svelte-query';
  let client = useQueryClient();
  let getResult = client.getQueryData<number>(['fib', n]);
  let query = createQuery({ queryKey: ['fib', n] });

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
  let r: number;
  $: r = ($query.data as number) ?? 0;
  $: R = r * 10;
</script>

<div style:flex-direction={flexDirection}>
  {#if getResult || $query.data}
    <div
      class="square"
      style:height="{R}px"
      style:width="{R}px"
      style:font-size="{r / 3}rem"
      style:background-color={backgroundColor}
      in:slide={{
        axis: n % 2 === 1 ? 'x' : 'y',
        duration: getResult === undefined ? 400 : 0,
        delay: getResult === undefined ? 400 : 0
      }}
    >
      <p>{$query.data}</p>
    </div>
  {/if}
  {#if n > 1}
    <svelte:self n={n - 1} />
  {/if}
</div>

<style>
  p {
    margin: auto;
    text-overflow: ellipsis;
  }
  div {
    display: flex;
    width: fit-content;
    overflow: hidden;
  }
</style>
