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
  img {
    width: 2em;
    height: 2em;
    margin-top: 1em;
  }
}
</style>
