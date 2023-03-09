<script lang="ts">
  import { onMount } from 'svelte';

  export let sensitivity = 45;
  let maxH = 2;
  let maxW = 2;
  let x = 1;
  let y = 1;
  $: dx = -trimAndTranslate(x, maxW) * sensitivity;
  $: dy = trimAndTranslate(y, maxH) * sensitivity;
  function trimAndTranslate(value: number, max: number) {
    // map to interval [-1,1]
    return (value - max / 2) / (max / 2);
  }
  onMount(() => {
    x = maxW / 2;
    y = maxH / 2;
  });
</script>

<svelte:body
  on:mousemove={(event) => {
    x = event.x;
    y = event.y;
  }}
/>
<svelte:window bind:innerWidth={maxW} bind:innerHeight={maxH} />

<div style="transform: rotateX({dy}deg) rotateY({dx}deg);">
  <slot />
</div>

<style lang="postcss">
  div {
    box-shadow: 8px 8px 8px theme(colors.primary.500);
    width: fit-content;
    transition: 0.2s ease-in-out;
  }
  div:hover {
    scale: 1.1;
  }
</style>
