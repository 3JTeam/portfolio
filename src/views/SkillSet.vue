<template>
  <main class="skillset">
    <SkillSetHeader />
    <div class="skillCardDisplay">
      <SkillsCard
        v-for="(item, index) in skillsData[selectedTitle]"
        :name="item.name"
        :usedSince="item.usedSince"
        :blurb="item.blurb"
        :moreStuff="item.length() > 3"
        :key="index"
      />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import SkillSetHeader from '@/components/SkillSetHeader';
import SkillsCard from '@/components/SkillsCard.vue';
import skillsData from '@/data/skillsData';

export default {
  name: 'skillset',
  components: {
    SkillsCard,
    SkillSetHeader,
  },
  data() {
    return {
      skillsData,
    };
  },
  computed: {
    selectedTitle() {
      return this.$store.getters.getSelectedTitleName;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  border: 1px solid red;
}
.skillset {
  display: flex;
  flex-flow: column nowrap;
  background-color: $backgroundColor;

  .skillCardDisplay {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-self: center;
    margin-top: 5em;
    margin-bottom: 5em;
    max-width: 50%;
  }
}
</style>
