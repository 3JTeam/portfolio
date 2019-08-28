<template>
  <div class="skillCard">
    <div class="cardHeader">
      <h3 class="title">{{ name }}</h3>
      <h4 class="subHeading">Used Since: {{ usedSince }}</h4>
    </div>
    <p class="blurb">{{ blurb }}</p>
    <div v-if="moreStuff" class="showMore">
      <hr />
      <p @click="setTitleName(name)" class="more">more info</p>
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
    moreStuff: Boolean,
  },
  methods: {
    setTitleName(titleName) {
      this.$store.commit('setTitleName', titleName);
    },
  },
};
</script>

<style lang="scss" scoped>
.skillCard {
  height: 10em;
  width: 20em;
  margin: 0.5em;
  padding: 0.5em;
  background-color: $backgroundColor;
  border: 1px solid black;

  .cardHeader {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  .more {
    cursor: pointer;
  }
}
</style>
