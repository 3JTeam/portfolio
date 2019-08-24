<template>
  <div class="card">
    <div class="cardHeader">
      <img :src="imageSrc" :alt="altText" />
      <h2>{{ title }}</h2>
    </div>
    <p>{{ bodyText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    altText: String,
    title: String,
    bodyText: String,
  },
};
</script>

<style lang="scss" scoped>
.cardHeader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  img {
    width: 2em;
    height: 2em;
    padding-top: 1em;
    padding-right: 0.5em;
  }
}
</style>
