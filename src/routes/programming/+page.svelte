<svelte:head>
  <title>Malte @ Programming</title>
</svelte:head>
<h1>Programming<span class="blink">_</span></h1>
<article>
  <p>
    My first experience with a terminal was on Windows when I started exploring batch scripting. In
    school, I was introduced to programming through <a
      href="https://www.inf-schule.de/infschule/softwarewerkzeuge/karol">Robot Karol</a
    >, where we were tasked with solving concrete problems by writing programs to manipulate the
    environment. I found it quite challenging at first. However, later, I had an exceptional teacher
    who taught us programming using Python 3 and
    <a href="https://vpython.org/index6.html">VPython</a>, which made the experience enjoyable as I
    could re-implement some video games I loved.
  </p>
  <p>
    In university, all beginners are required to learn Java, and after completing the course, I
    became a teaching assistant for a few years. However, I noticed that the course's instructions
    were unclear to most students. While the students wanted to learn how to use programming as a
    tool, the course mainly focused on software engineering, such as writing readable code, using
    abstractions, thinking in OOP, etc. These are excellent goals, but the course lacked motivation
    on why to do this. All homework and final tasks were written and read only once, so it was
    challenging to convince the students to care about conventions and rules such as CheckStyle and
    maintainability when they had a fixed submission deadline. As a teaching assistant, I always
    encouraged my students to collaborate, which helped them understand the reasons for these
    conventions and rules.
  </p>
  <p>
    For my bachelor's thesis, I used TensorFlow in Python 3 to do machine learning, where the
    intersection between math and programming became important. Implementing algorithms that I
    understand from a mathematical perspective brings me joy ✨. I also had the opportunity to learn
    Haskell and Prolog in advanced courses, and I loved how solving specific problems felt like
    proving a theorem in mathematics. I look forward to learning more cutting-edge tools like these.
  </p>
  <p>
    Currently, I work as a web developer for an energy supplier, where we use TypeScript and React
    to build a multi-tenant white-label solution for managing construction contractors. I am part of
    a highly skilled team, and it is a pleasure to contribute to a tool that accelerates the rollout
    of renewable energies. Additionally, using and contributing to open-source software gives me the
    feeling of <a href="https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants"
      >standing on the shoulders of giants</a
    >.
  </p>
</article>

<style>
  p {
    margin-bottom: 1rem;
    writing-mode: sideways-lr;
  }
  @media (prefers-reduced-motion: no-preference) {
    .blink {
      opacity: 0;
      animation: blink 1s steps(2, jump-none) 1s infinite;
    }
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
