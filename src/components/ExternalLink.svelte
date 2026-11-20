<script lang="ts">
  export let href: `https://${string}`;
</script>

<!-- ExternalLink only accepts absolute HTTPS URLs. -->
<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a {href} target="_blank" rel="noreferrer"><slot /></a>
