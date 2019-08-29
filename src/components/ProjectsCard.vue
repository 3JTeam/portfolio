<template>
  <div class="projectsCard">
    <h3>{{ name }}</h3>
    <img :src="getImageURL(imageSrc)" :alt="name + ' Image'" />
    <p class="about">{{ about }}</p>
    <div class="code">
      <a :href="activeSite" target="_blank">See it live!</a>
      <a :href="gitHub" target="_blank">Check out the repo...</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectsCard',
  props: {
    name: String,
    imageSrc: String,
    about: String,
    gitHub: String,
    activeSite: String,
  },
  methods: {
    getImageURL(image) {
      if (image) {
        return require(`@/assets/images/${image}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.projectsCard {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 5em;
  width: 50%;

  @media (min-width: $gtMobile) {
    width: 30em;
  }

  img {
    width: 15em;
    height: 10em;
    align-self: center;
    border: $standardBorder;
    border-radius: $standardBorderRadius;
  }

  .about {
    width: 100%;
    line-height: 1.5;
  }

  .code {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 2em;

    a {
      text-decoration: none;
      font-weight: bold;
      color: $baseTextColor;
      background: $darkBackgroundColor;
      border: $standardBorder;
      border-radius: $standardBorderRadius;
      margin: 0.5em;
      padding: 0.5em;
    }
  }
}
</style>
