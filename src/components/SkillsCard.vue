<template>
  <div class="skillCard">
    <img :src="getImageURL(imageSrc)" :alt="name + ' Logo'" />
    <div class="info">
      <p>{{ name }}</p>
      <p>Since {{ since }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skillset',
  props: {
    name: String,
    since: Number,
    imageSrc: String,
  },
  methods: {
    setTitleName(titleName) {
      this.$store.commit('setTitleName', titleName);
    },
    getImageURL(image) {
      if (image) {
        return require(`@/assets/images/${image}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.skillCard {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  height: 7em;
  width: 20em;
  margin: 0.5em;
  padding: 0.5em;
  border: $standardBorder;
  border-radius: $standardBorderRadius;

  img {
    width: 5em;
    height: 5em;
  }

  .more {
    cursor: pointer;
  }
}
</style>
