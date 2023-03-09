<script lang="ts">
  import ObjectCard from '../../components/diverse/ObjectCard.svelte';
  import PerspectiveFollowMouse from '../../components/diverse/PerspectiveFollowMouse.svelte';
</script>

<svelte:head>
  <title>Malte Voss</title>
</svelte:head>

<h1>About me</h1>
<p class="m-auto w-fit">
  <PerspectiveFollowMouse sensitivity={30}>
    <ObjectCard name="Malte Voss">
      <ul slot="attributes">
        <li>nerd: true</li>
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
</p>

<style>
  li:hover {
    font-weight: 700;
  }
</style>
