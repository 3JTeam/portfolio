<template>
  <main class="skillset">
    <PageTitle pageTitle="Skill Set" />
    <div class="skillCardDisplay">
      <SkillTitle v-for="(skillItem, index) in skillsData" :key="index" :title="skillItem.name" />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/PageTitle.vue';
import SkillTitle from '@/components/SkillTitle.vue';
// import SkillsCard from '@/components/SkillsCard.vue';
import skillsData from '@/data/skillsData';

export default {
  name: 'skillset',
  components: {
    PageTitle,
    SkillTitle,
    // SkillsCard,
  },
  data() {
    return {
      skillsData,
    };
  },
  computed: {
    selectedName() {
      return this.$store.getters.getSelectedName;
    },
  },
};
</script>

<style scoped lang="scss">
.skillset {
  // * {
  //   border: 1px solid red;
  // }
  background-color: $backgroundColor;

  .skillCardDisplay {
    margin-top: 5em;
    margin-bottom: 5em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
}
</style>
