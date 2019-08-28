<template>
  <main class="whoiam">
    <img src="@/assets/images/JimProfilePic.jpg" alt="Jim Strother" />
    <div v-for="(aboutMeItem, index) in aboutMeData" :key="index" class="meCardDisplay">
      <MeCard
        :imageSrc="getImageURL(aboutMeItem.imageSrc)"
        :altText="aboutMeItem.altText"
        :title="aboutMeItem.title"
        :bodyText="aboutMeItem.bodyText"
      />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import MeCard from '@/components/MeCard.vue';
import aboutMeData from '@/data/aboutMeData';

export default {
  name: 'whoiam',
  components: {
    MeCard,
  },
  data() {
    return {
      aboutMeData,
    };
  },
  methods: {
    getImageURL(imageSrc) {
      if (imageSrc) {
        return require(`@/assets/images/${imageSrc}`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.whoiam {
  background-color: $backgroundColor;

  img {
    width: 10em;
    height: 10em;
  }

  .meCardDisplay {
    background-color: darken($backgroundColor, 7%);
    margin: 1em;
    margin-left: 4em;
    margin-right: 4em;
    padding: 2em;
  }
}
</style>
