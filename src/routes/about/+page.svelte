<script lang="ts">
  import ObjectCard from '../../components/diverse/ObjectCard.svelte';
  import PerspectiveFollowMouse from '../../components/diverse/PerspectiveFollowMouse.svelte';
  import ExternalLink from '../../components/ExternalLink.svelte';
</script>

<svelte:head>
  <title>Malte Breitzmann</title>
</svelte:head>

<h1>About me</h1>
<PerspectiveFollowMouse sensitivity={30}>
  <ObjectCard name="Malte Breitzmann">
    <ul slot="attributes">
      <li>nerd: true</li>
      <li>
        <ExternalLink href="https://github.com/vossmalte">github: vossmalte</ExternalLink>
      </li>
      <li>employer: E.ON</li>
      <li>location: Karlsruhe 🇩🇪</li>
    </ul>
    <ul slot="methods">
      <li><a href="/programming">writeCode()</a></li>
      <li>reviewCode()</li>
      <li><a href="/frisbee">playFrisbee()</a></li>
      <li>learn()</li>
    </ul>
  </ObjectCard>
</PerspectiveFollowMouse>
<div class="spacer"></div>
<a class="bottom" href="/impressum">Impressum</a>

<style>
  .spacer {
    height: 20px;
  }
  li:hover {
    font-weight: 700;
  }
</style>
