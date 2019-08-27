<template>
  <div class="skillCard">
    <div class="cardHeader">
      <h1 class="title">{{ name }}</h1>
      <h3 class="subHeading">Used Since: {{ usedSince }}</h3>
      <p>{{ blurb }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skillset',
  props: {
    name: String,
    usedSince: Number,
    blurb: String,
  },
};
</script>

<style lang="scss" scoped></style>
