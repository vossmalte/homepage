<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>{data.attributes?.title} | Malte's Blog</title>
</svelte:head>

<article>
  <span class="text-xs text-secondary-500">
    {data.attributes?.createdAt &&
      new Date(data.attributes.createdAt).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
  </span>
  <!-- this does not lead to CSS attacks as the data is gathered at compile time -->
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html data.articleHtml}
</article>

<style lang="postcss" global>
  h1,
  h2,
  h3 {
    font-weight: 700;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  pre {
    border-radius: 0.5rem;

    @apply bg-interactive-200;
  }

  article p,
  article pre {
    margin-bottom: 1rem;
  }

  pre code {
    font-size: 0.9rem;
    background-color: transparent;
  }

  code {
    padding: 0 0.25rem;
    border-radius: 0.25rem;

    @apply bg-interactive-100;
  }
  ul {
    list-style: disc inside;
  }
  pre {
    white-space: pre-wrap;
  }
</style>
