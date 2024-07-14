<script lang="ts">
  export let backgroundUrl = 'https://images.unsplash.com/photo-1512095662389-83dfa94f3e0b';
  export let backgroundSize = '400%';
  export let backgroundPosition = '55% 70%';
  export let backgroundAnimation = 'frisbee';
</script>

<div class="card">
  <div class="hue-rotate">
    <div
      class="inner-card {backgroundAnimation}"
      style:background-image="url({backgroundUrl})"
      style:background-size={backgroundSize}
      style:background-position={backgroundPosition}
    >
      <div class="blurry">
        <div class="cta"><slot /></div>
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    width: 300px;
    height: 483px;
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
    /* TODO: maybe a nicer gradient with hue values will result in nicer rotation */
    background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
      linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  }

  .hue-rotate:hover,
  .hue-rotate:focus-within {
    padding: 16px;
  }

  .hue-rotate {
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
    transition: padding 1s ease-in;
    height: 100%;
    animation: color-rotate 10s linear infinite;
  }

  .blurry {
    height: 100%;
    overflow: clip;
    backdrop-filter: blur(10px);
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
    transition: backdrop-filter 1s ease-in;
  }
  .blurry:hover,
  .blurry:focus-within {
    backdrop-filter: blur(0px);
  }

  .inner-card {
    height: 100%;
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
    transition: 0.2s ease-in-out;
  }

  .inner-card:hover .cta,
  .inner-card:focus-within .cta {
    scale: 1.3;
  }

  @keyframes color-rotate {
    0% {
      backdrop-filter: hue-rotate(0deg);
    }
    100% {
      backdrop-filter: hue-rotate(359deg);
    }
  }
</style>
