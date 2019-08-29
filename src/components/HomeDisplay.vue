<template>
  <div class="homeDisplay"></div>
</template>

<style lang="scss" scoped>
.homeDisplay {
  background: url('../assets/images/background.jpg') center/100% no-repeat;
  width: 100%;
  height: 100%;
  margin-top: -5em;

  @media (min-width: $gtMobile) {
    margin-top: auto;
  }
}
</style>
