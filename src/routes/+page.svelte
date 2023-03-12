<script>
  import LandingCard from '../components/diverse/LandingCard.svelte';
  import '../lib/css/landing-card-animation.css';
</script>

<svelte:head>
  <title>Malte Voss</title>
</svelte:head>

<div class="card-container two-cols">
  <LandingCard
    backgroundPosition="98% 70%"
    backgroundSize="400%"
    backgroundUrl="/landingcard/frisbee.webp"
    backgroundAnimation="frisbee"
  >
    <a class="rounded-2xl bg-primary-300 p-4 text-primary-700" href="/frisbee">Frisbee</a>
  </LandingCard>
  <LandingCard
    backgroundUrl="https://steamuserimages-a.akamaihd.net/ugc/99477156185734595/177E7FD6085414F203634D4F96DE1F8B13F78B6F/"
    backgroundAnimation="programming"
    backgroundSize="500%"
    backgroundPosition="50% 70%"
  >
    <a class="rounded-2xl bg-background-500 p-4 text-interactive-50" href="/programming"
      >Programming</a
    >
  </LandingCard>
  <LandingCard
    backgroundUrl="/landingcard/math.webp"
    backgroundAnimation="math"
    backgroundSize="240%"
    backgroundPosition="50% 70%"
  >
    <a class="rounded-2xl bg-interactive-300 p-4 text-primary-900" href="/math">Math</a>
  </LandingCard>
  <LandingCard
    backgroundUrl="/landingcard/blog.webp"
    backgroundAnimation="blog"
  >
    <a class="rounded-2xl bg-primary-700 p-4 text-primary-100" href="/blog">Blog</a>
  </LandingCard>
</div>

<style>
  .card-container {
    margin: auto;
    display: grid;
    gap: 18px;
    width: fit-content;
    grid-template-columns: 300px;
  }

  @media (min-width: 768px) {
    .two-cols {
      grid-template-columns: 300px 300px;
    }
  }
</style>
