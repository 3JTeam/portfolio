<template>
  <main class="whoiam">
    <img src="@/assets/images/JimProfilePic.jpg" alt="Jim Strother" />
    <div class="meCardDisplay">
      <MeCard
        v-for="(aboutMeItem, index) in aboutMeData"
        :key="index"
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
    getImageURL(image) {
      if (image) {
        return require(`@/assets/images/${image}`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.whoiam {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  background-color: $backgroundColor;

  img {
    align-self: center;
    width: 10em;
    height: 10em;
    border-radius: $standardBorderRadius;
  }

  .meCardDisplay {
    align-self: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 3em;
  }
}
</style>
