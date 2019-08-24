<template>
  <div class="footer">
    <a href="https://twitter.com/jimcodesjs" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-twitter-square"></i>
    </a>
    <a href="https://github.com/jstrother" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-github-square"></i>
    </a>
    <a href="https://www.linkedin.com/in/jimstrother/" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: $textColor;
  // margin: auto;
  padding-top: 4em;
  text-align: center;

  i {
    color: $textColor;
    font-size: 3em;
    margin: 1.5em;
    margin-top: 0.1em;
    cursor: pointer;
  }
}
</style>
