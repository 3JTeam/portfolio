<template>
  <main class="skillset">
    <div class="header" :class="{ nullAdjustment: !selectedTitle }">
      <SkillSetHeader
        v-for="(title, index) in Object.getOwnPropertyNames(skillsData)"
        :title="title"
        :key="index"
      />
    </div>
    <h4 v-show="selectedTitle != null" @click="setTitleName(null)" class="reset">Reset</h4>
    <p v-show="selectedTitle === null">Click title above to view more info</p>
    <div class="skillCardDisplay">
      <SkillsCard
        v-for="(item, index) in skillsData[selectedTitle]"
        :name="item.name"
        :since="item.since"
        :imageSrc="item.imageSrc"
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
  methods: {
    setTitleName(titleName) {
      this.$store.commit('setTitleName', titleName);
    },
  },
  computed: {
    selectedTitle() {
      return this.$store.getters.getSelectedTitleName;
    },
  },
};
</script>

<style scoped lang="scss">
.skillset {
  display: flex;
  flex-flow: column nowrap;
  background: $backgroundColor;

  .header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .skillCardDisplay {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-self: center;
    margin-top: 5em;
    margin-bottom: 5em;
    max-width: 75%;
  }

  .nullAdjustment {
    padding-top: 7em;
    padding-bottom: 5em;
  }

  .reset {
    cursor: pointer;
  }
}
</style>
