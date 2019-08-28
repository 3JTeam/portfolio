<template>
  <div class="skillCard">
    <div class="cardHeader">
      <h3 class="title">{{ name }}</h3>
      <h4 class="subHeading">Used Since: {{ usedSince }}</h4>
    </div>
    <p v-if="moreStuff">more</p>
  </div>
</template>

<script>
export default {
  name: 'skillset',
  props: {
    name: String,
    usedSince: Number,
    blurb: String,
    moreStuff: Boolean,
  },
};
</script>

<style lang="scss" scoped>
* {
  border: 1px solid red;
}
.skillCard {
  height: 10em;
  width: 20em;
  margin: 0.5em;
}
</style>
