<script>
  import { resolve } from '$app/paths';
  import LandingCard from '../components/diverse/LandingCard.svelte';
  import '../lib/css/landing-card-animation.css';
</script>

<svelte:head>
  <title>Malte Breitzmann | Web Developer, Mathematician, Frisbee Enthusiast | Tech Blog</title>
</svelte:head>

<nav class="card-container two-cols">
  <LandingCard
    backgroundPosition="98% 70%"
    backgroundSize="400%"
    backgroundUrl="/landingcard/frisbee.webp"
    backgroundAnimation="frisbee"
  >
    <a class="card-frisbee" href={resolve('/frisbee')}>Frisbee</a>
  </LandingCard>
  <LandingCard
    backgroundUrl="/landingcard/programming.webp"
    backgroundAnimation="programming"
    backgroundSize="500%"
    backgroundPosition="50% 70%"
  >
    <a class="card-programming" href={resolve('/programming')}>Programming</a>
  </LandingCard>
  <LandingCard
    backgroundUrl="/landingcard/math.webp"
    backgroundAnimation="math"
    backgroundSize="240%"
    backgroundPosition="50% 70%"
  >
    <a class="card-math" href={resolve('/math')}>Math</a>
  </LandingCard>
  <LandingCard backgroundUrl="/landingcard/blog.webp" backgroundAnimation="blog">
    <a class="card-blog" href={resolve('/blog')}>Blog</a>
  </LandingCard>
</nav>

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

  .card-frisbee {
    background-color: var(--color-primary-300);
    color: var(--color-primary-700);
    border-radius: 1rem;
    padding: 1rem;
  }

  .card-programming {
    background-color: var(--color-background-500);
    color: var(--color-interactive-50);
    border-radius: 1rem;
    padding: 1rem;
  }

  .card-math {
    background-color: var(--color-interactive-300);
    color: var(--color-primary-900);
    border-radius: 1rem;
    padding: 1rem;
  }

  .card-blog {
    background-color: var(--color-primary-700);
    color: var(--color-primary-100);
    border-radius: 1rem;
    padding: 1rem;
  }
</style>
