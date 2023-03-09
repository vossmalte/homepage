<script lang="ts">
  import FollowMouse from '../../components/diverse/FollowMouse.svelte';
  import FrisbeePlayer from '../../components/diverse/FrisbeePlayer.svelte';
  import type { Spring } from 'svelte/motion';
  import ExternalLink from '../../components/ExternalLink.svelte';

  let followPosition: Spring<{ x: number; y: number }>;
  function throwFrisbee() {
    const oldPosition = $followPosition;
    followPosition
      .set({
        x: $followPosition.x + (Math.random() - 0.5) * 600,
        y: $followPosition.y + (Math.random() - 0.5) * 600
      })
      // boomerang
      .then(() => followPosition.set(oldPosition, { soft: 1 }));
  }
</script>

<svelte:head>
  <title>Malte @ Frisbee</title>
</svelte:head>

<FollowMouse bind:position={followPosition}
  ><button class="frisbee-emoji" on:click={throwFrisbee}>🥏</button></FollowMouse
>
<h1>Frisbee</h1>
<FrisbeePlayer />
<p>
  I am a frisbee enthusiast. The flight of a disc seems to defeat gravity. I hope you can catch the
  disc following your mouse. Click it to throw.
</p>
<p>
  I started playing <ExternalLink href="https://wfdf.sport/disciplines/ultimate"
    >Ultimate Frisbee</ExternalLink
  > when I was 14 years old. Since then, I have participated in over a hundred tournaments. The community
  is my favorite part of playing Ultimate. There are many magnificent players that I always admired.
  They put a lot of effort and passion into growing the sport, their team and individual players. I am
  privileged to have played with these people.
</p>
<p>
  I achieved my biggest successes with my <ExternalLink href="https://ultimatekarlsruhe.de"
    >club team in Karlsruhe</ExternalLink
  >. After finishing second in 2017 we won the German Mixed National Championship in 2018 and 2019.
  We also participated in the World Championship in 2018 and 2022. In 2016, I started coaching a
  <ExternalLink href="https://piratos.ultimatekarlsruhe.de">youth team</ExternalLink>. Some of these
  young guns already take over key roles in the adults team. I take pride in calling them my team
  mates after being their coach for a few years. I have also played for the <ExternalLink
    href="https://www.frisbeesportverband.de">German National Team</ExternalLink
  >. Being part of a select elite group to represent the German Ultimate community at World
  Championships is an extraordinary experience. After a long preparation phase every player is at
  their performance peak. Competing against the world's best to play on the highest possible level
  is what makes the national team special to me.
</p>
<p>
  There is so much more to Ultimate than the game itself. I have experience in organizing
  tournaments for up to 400 people. I organized team events to strengthen our cohesion. To promote
  Ultimate to a broader audience I set up <ExternalLink
    href="https://www.youtube.com/watch?v=ZxOtA3BUwRs">livestreams</ExternalLink
  > of <ExternalLink href="https://www.youtube.com/watch?v=ZESNW4MbrtI">tournaments</ExternalLink>.
  As a captain I was responsible for what we play in regards of tactics. As a coach I introduced
  many players to weight lifting and run trainings.
</p>
<p>
  Recently, I got into disc golf. I especially enjoy the highly technical aspects of the game and
  the mentally demanding situations one can only solve themselves.
</p>

<style>
  .frisbee-emoji {
    cursor: grab;
    font-size: 2rem;
    text-shadow: 8px 8px 8px gray;
    transform: rotate(45deg);
    user-select: none;
  }
  p {
    margin-bottom: 1rem;
  }
</style>
