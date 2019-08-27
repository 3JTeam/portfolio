<template>
  <footer>
    <a href="https://twitter.com/jimcodesjs" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-twitter-square"></i>
    </a>
    <a href="https://github.com/jstrother" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-github-square"></i>
    </a>
    <a href="https://www.linkedin.com/in/jimstrother/" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-linkedin"></i>
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  color: $textColor;
  text-align: center;

  i {
    color: $textColor;
    font-size: 3em;
    margin: 0.5em;
    cursor: pointer;
  }
}
</style>
