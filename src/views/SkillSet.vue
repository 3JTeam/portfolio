<template>
  <main class="skillset">
    <PageTitle pageTitle="Skill Set" />
    <div class="skillCardDisplay">
      <h2
        v-show="selectedName === null || selectedName === 'languages'"
        @click="setSkillName('languages')"
      >
        Languages
      </h2>
      <h2
        v-show="selectedName === null || selectedName === 'otherSkills'"
        @click="setSkillName('otherSkills')"
      >
        Other Skills
      </h2>
      <h2 v-show="selectedName != null" @click="setSkillName(null)">Back</h2>
    </div>
    <p v-show="selectedName === null">Click to view</p>
  </main>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/PageTitle.vue';
// import SkillsCard from '@/components/SkillsCard.vue';
import skillsData from '@/data/skillsData';

export default {
  name: 'skillset',
  components: {
    PageTitle,
    // SkillsCard,
  },
  data() {
    return {
      skillsData,
    };
  },
  methods: {
    setSkillName(skillName) {
      this.$store.commit('setSkillName', skillName);
    },
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
  * {
    border: 1px solid red;
  }
  background-color: $backgroundColor;

  .skillCardDisplay {
    margin-top: 5em;
    margin-bottom: 5em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;

    h2 {
      cursor: pointer;
    }
  }
}
</style>
