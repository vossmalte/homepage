<script>
  import ExternalLink from '../../components/ExternalLink.svelte';
</script>

<svelte:head>
  <title>Malte @ Math</title>
</svelte:head>

<h1>Math</h1>
<article>
  <p>
    Math is versatile. Most people are first exposed to Mathematics before school. You learn to
    count - this is already a powerful tool. About 50'000 years ago mankind started using <ExternalLink
      href="https://bar.wikipedia.org/wiki/Keabhoiz">tally sticks</ExternalLink
    > to count. It uses a principle that is still useful today: the bijection. A bijection puts to sets
    into relation by uniquely assigning each element from one set to an element of the other set. If
    you count your sheep using a tally stick, each sheep is assigned to a notch - and vice-versa: each
    notch is assigned to a sheep. Counting in your head applies the same principle: each sheep is assigned
    a unique number - the numbers itself are a new concept on their own. Since there is a bijection between
    the set of sheep and notches (or numbers), both have the same size (<i>number</i> of elements). When
    counting, the last number uttered coincides with size of the set. This is a very practical coincidence
    that only works when working with bijections where one set are the natural numbers (a finite subset
    of them). The next time counting does not work out for you, be sure: you did your best, but you probably
    missed constructing a bijection by counting an element twice (you got a surjection) or skipped one
    element (hey, at least you got an injection - in a mathematical sense).
  </p>
  <p>
    I enjoy doing recreational Math. <ExternalLink href="https://www.youtube.com/@3blue1brown"
      >There</ExternalLink
    >
    <ExternalLink href="https://www.youtube.com/@blackpenredpen">are</ExternalLink>
    <ExternalLink href="https://www.youtube.com/@MichaelPennMath">some</ExternalLink> channels on YouTube
    I can recommend for tinkering around mathematics. There are different styles of tasks:
  </p>
  <ul>
    <li class="apply">
      Applying something you already know to generate insight about a specific problem.
    </li>
    <li class="new">
      Learning about a new problem and developing tools to tackle it. I love the story about <ExternalLink
        href="https://en.wikipedia.org/wiki/Grigori_Perelman">Grigori Perelman</ExternalLink
      > who solved the only Millenium problem to date. It took researchers three years to verify his
      proof...
    </li>
    <li class="merge">
      Combining two topics, e.g. try calculating ln(i) with your knowledge from analysis and complex
      numbers.
    </li>
  </ul>
  <p>
    Sometimes, I also write (or code) about math. Maybe you want to see <a href="/fibonacci"
      >the fibonacci squares live in action</a
    >. Also, talking about math and solving problems together is a fulfilling bonding activity. On
    my first job at E.ON I started a math exchange which worked out quite nicely.
  </p>
</article>

<style>
  ul {
    list-style-type: square;
    list-style-position: inside;
  }
  .apply {
    list-style-type: '\1F477';
  }
  .new {
    list-style-type: '\1F4A1';
  }
  .merge {
    list-style-type: '\1F92F';
  }

  p {
    margin-top: 1rem;
  }
</style>
