<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>{data.attributes?.title} by Malte's Blog</title>
</svelte:head>

<article>
  <span class="article-date">
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

<style global>
  article :global {
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

      background-color: var(--color-interactive-200);
    }

    p,
    pre {
      margin-bottom: 1rem;
    }

    pre code {
      font-size: 0.9rem;
      background-color: transparent;
    }

    code {
      padding: 0 0.25rem;
      border-radius: 0.25rem;

      background-color: var(--color-interactive-100);
    }
    ul {
      list-style: disc inside;
    }
    pre {
      white-space: pre-wrap;
    }

    .article-date {
      font-size: 0.75rem;
      line-height: 1rem;
      color: var(--color-secondary-500);
    }
  }
</style>
