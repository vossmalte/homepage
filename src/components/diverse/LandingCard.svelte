<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { tweened } from 'svelte/motion';

  let running = true;
  export let backgroundUrl = 'https://images.unsplash.com/photo-1512095662389-83dfa94f3e0b';
  export let backgroundSize = '400%';
  export let backgroundPosition = '55% 70%';
  export let backgroundAnimation: 'horizontal' | 'vertical' = 'horizontal';

  console.log(backgroundAnimation);

  // this is needed as background gradients cannot be animated with CSS
  // maybe another way is: https://stackoverflow.com/questions/62135395/css-background-image-w-rotate-repeat-and-opacity
  export const rotation = tweened(Math.random() * 360, {
    duration: 4000
  });

  $: {
    while (running) {
      running = false;
      rotation.set(0, { duration: 0 });
      rotation.set(360).then(() => {
        running = true;
      });
    }
  }

  onMount(() => {
    running = true;
  });

  onDestroy(() => {
    running = false;
  });
</script>

<div
  class="card"
  style={`background: linear-gradient(${
    $rotation + 217
  }deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),			linear-gradient(${
    $rotation + 127
  }deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),	linear-gradient(${
    $rotation + 336
  }deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);`}
>
  <div
    class="inner-card h-full"
    class:horizontal={backgroundAnimation === 'horizontal'}
    class:vertical={backgroundAnimation === 'vertical'}
    style:background-image="url({backgroundUrl})"
    style:background-size={backgroundSize}
    style:background-position={backgroundPosition}
  >
    <div class="cta"><slot /></div>
  </div>
</div>

<style lang="postcss">
  .card {
    width: 300px;
    height: 483px;
    background: red;
    clip-path: polygon(
      10% 0%,
      90% 0%,
      100% 6.21%,
      100% 93.8%,
      90% 100%,
      10% 100%,
      0% 93.8%,
      0% 6.21%
    );
    padding: 4px;
  }

  .inner-card {
    clip-path: polygon(
      10% 0%,
      90% 0%,
      100% 6.21%,
      100% 93.8%,
      90% 100%,
      10% 100%,
      0% 93.8%,
      0% 6.21%
    );
  }

  .cta {
    position: relative;
    top: 65%;
    margin: auto;
    width: fit-content;
  }

  @media (prefers-reduced-motion: no-preference) {
    .horizontal {
      animation: horizontal 30s linear infinite;
    }
    .vertical {
      animation: vertical 30s linear infinite;
    }
  }

  @keyframes horizontal {
    0% {
      background-position-x: 0%;
    }
    50% {
      background-position-x: 100%;
    }
    100% {
      background-position-x: 0%;
    }
  }
  @keyframes vertical {
    0% {
      background-position-y: 0%;
    }
    100% {
      background-position-y: 100%;
    }
  }
</style>
