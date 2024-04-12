<script lang="ts">
  import type { PageServerData } from './$types';
  export let data: PageServerData;
</script>

<h1>Malte's Blog</h1>
<svelte:head>
  <title>Malte's Blog</title>
</svelte:head>

<ul>
  {#each data.articles as { attributes, articleId }}
    <li><a href={'blog/article/' + articleId}>{attributes?.title ?? 'A blog article'}</a></li>
  {/each}
</ul>

<style>
  ul {
    gap: 1rem;
    list-style: '\1F4DD  ' inside;
  }
  li {
    margin-bottom: 1rem;
    padding-left: 4px;
  }
</style>
