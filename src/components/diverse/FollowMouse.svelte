<script lang="ts">
  import { spring, tweened } from 'svelte/motion';
  import { coordinateMinus, coordinateRadians, type Coordinate } from '$lib/ts/math';
  import { sineOut } from 'svelte/easing';

  export const position = spring<Coordinate>(
    { x: -100, y: 200 },
    { stiffness: 0.05, precision: 0.5 }
  );
  export const rotation = tweened(0, { easing: sineOut });

  let clientWidth = 0;
  let clientHeight = 0;

  function setRotation(mousePosition: Coordinate) {
    let result = coordinateRadians(coordinateMinus(mousePosition, $position));
    // x < result < y
    result = Math.min(Math.PI / 3, Math.max(-Math.PI / 3, result));
    if (!Number.isNaN(result)) rotation.set(result);
  }
</script>

<svelte:body
  on:mousemove={(event) => {
    // mousePosition = [e.x, e.y];
    setRotation(event);
    position.set(event, { soft: 0.5 });
  }}
/>

<div
  bind:clientWidth
  bind:clientHeight
  draggable="false"
  on:mouseover={() => rotation.set(0)}
  on:focus={() => rotation.set(0)}
  style="top: {$position.y - clientHeight / 2}px; left: {$position.x -
    clientWidth / 2}px; transform: rotate({$rotation}rad);"
>
  <slot />
</div>

<style lang="postcss">
  div {
    position: fixed;
  }
</style>
