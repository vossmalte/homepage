<script>
  import LandingCard from '../components/diverse/LandingCard.svelte';
</script>

<svelte:head>
  <title>Malte Voss</title>
</svelte:head>

<div class="flex flex-col md:flex-row gap-8 m-auto items-center">
  <LandingCard
    backgroundPosition="98% 70%"
    backgroundSize="400%"
    backgroundUrl="https://images.unsplash.com/photo-1512095662389-83dfa94f3e0b"
    backgroundAnimation="horizontal"
  >
    <a class="bg-interactive-300 text-primary-700 p-4 rounded-2xl" href="/frisbee">Frisbee</a>
  </LandingCard>
  <LandingCard
    backgroundUrl="https://steamuserimages-a.akamaihd.net/ugc/99477156185734595/177E7FD6085414F203634D4F96DE1F8B13F78B6F/"
    backgroundAnimation="vertical"
    backgroundSize="500%"
    backgroundPosition="50% 70%"
  >
    <a class="bg-background-500 text-interactive-50 p-4 rounded-2xl" href="/programming"
      >Programming</a
    >
  </LandingCard>
  <!-- TODO: Math -->
</div>
