<script lang="ts">
  import { slide } from 'svelte/transition';
  import { createQuery, useQueryClient } from '@tanstack/svelte-query';
  import FibSquare from './FibSquare.svelte';

  let { n = 10 }: { n?: number } = $props();

  let client = useQueryClient();
  let cachedResult = $derived(client.getQueryData<number>(['fib', n]));
  let query = createQuery(() => ({ queryKey: ['fib', n] }));

  let flexDirection = $derived.by(() => {
    switch (n % 4) {
      case 0: {
        return 'column';
      }
      case 1: {
        return 'row';
      }
      case 2: {
        return 'column-reverse';
      }
      default: {
        return 'row-reverse';
      }
    }
  });

  let backgroundColor = $derived.by(() => {
    switch (n % 4) {
      case 0: {
        return 'red';
      }
      case 1: {
        return 'green';
      }
      case 2: {
        return 'yellow';
      }
      default: {
        return 'blue';
      }
    }
  });

  let r = $derived((query.data as number) ?? 0);
  let R = $derived(r * 10);
</script>

<div style:flex-direction={flexDirection}>
  {#if cachedResult || query.data}
    <div
      class="square"
      style:height="{R}px"
      style:width="{R}px"
      style:font-size="{r / 3}rem"
      style:background-color={backgroundColor}
      in:slide={{
        axis: n % 2 === 1 ? 'x' : 'y',
        duration: cachedResult === undefined ? 400 : 0,
        delay: cachedResult === undefined ? 400 : 0
      }}
    >
      <p>{query.data}</p>
    </div>
  {/if}
  {#if n > 1}
    <FibSquare n={n - 1} />
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
