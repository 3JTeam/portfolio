<template>
  <main class="skillset">
    <PageTitle pageTitle="Skill Set" />
    <SkillSetHeader />
    <div class="skillCardDisplay">
      <SkillsCard
        v-for="(item, index) in skillsData[selectedTitle]"
        :name="item.name"
        :usedSince="item.usedSince"
        :blurb="item.blurb"
        :key="index"
      />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/PageTitle.vue';
import SkillSetHeader from '@/components/SkillSetHeader';
import SkillsCard from '@/components/SkillsCard.vue';
import skillsData from '@/data/skillsData';

export default {
  name: 'skillset',
  components: {
    PageTitle,
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
  background-color: $backgroundColor;

  .skillCardDisplay {
    margin-top: 5em;
    margin-bottom: 5em;
    max-width: 50%;
  }
}
</style>
