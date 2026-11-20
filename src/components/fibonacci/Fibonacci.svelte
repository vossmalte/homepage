<script lang="ts">
  import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
  import FibSquare from './FibSquare.svelte';

  let { n, clientWidth = 300 }: { n: number; clientWidth?: number } = $props();

  let client = new QueryClient();

  client.setQueryData(['fib', 0], 0);
  client.setQueryData(['fib', 1], 1);

  client.setDefaultOptions({
    queries: {
      queryFn: async ({ queryKey }) => {
        let n = queryKey[1] as number;
        if (n < 1) return 0;
        let n1: number = await client.ensureQueryData({ queryKey: ['fib', n - 1] });
        let n2: number = await client.ensureQueryData({ queryKey: ['fib', n - 2] });
        // return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => n1 + n2);
        return n1 + n2;
      },
      staleTime: Infinity
    }
  });
  function fib(n: number): number {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
  }
</script>

<QueryClientProvider {client}>
  <div class="inner" style:transform={`scale(${clientWidth / fib(n + 1) / 10})`}>
    {#key n}
      <FibSquare {n} />
    {/key}
  </div>
</QueryClientProvider>

<style>
  .inner {
    transition: all 0.6s linear;
    transform-origin: 0 0;
  }
</style>
