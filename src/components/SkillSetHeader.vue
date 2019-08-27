<template>
  <div class="header">
    <div class="skillSetHeader">
      <h2
        v-show="selectedTitle === null || selectedTitle === 'languages'"
        @click="setTitleName('languages')"
        class="title"
      >
        Languages
      </h2>
      <h2
        v-show="selectedTitle === null || selectedTitle === 'otherSkills'"
        @click="setTitleName('otherSkills')"
        class="title"
      >
        Other Skills
      </h2>
      <h4 v-show="selectedTitle != null" @click="setTitleName(null)" class="reset">Reset</h4>
    </div>
    <p v-show="selectedTitle === null">Click title above to view more info</p>
  </div>
</template>

<script>
import skillsData from '@/data/skillsData';

export default {
  name: 'skillSetHeader',
  props: {
    title: String,
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

<style lang="scss" scoped>
* {
  border: 1px solid red;
}
.skillSetHeader {
  .title,
  .reset {
    padding: 0.5em;
    cursor: pointer;
  }
}
</style>
