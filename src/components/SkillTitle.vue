<template>
  <h2 @click="setSkillName(title)" class="title">
    <span v-if="selectedName === null">{{ title }}</span>
    <span v-else-if="selectedName != title">{{ title }}</span>
    <!-- <span v-else class="hidden">{{ title }}</span> -->
  </h2>
</template>

<script>
export default {
  name: 'skillTitle',
  props: {
    title: String,
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

<style lang="scss" scoped>
.title {
  cursor: pointer;

  .centered {
    width: 100%;
  }

  .hidden {
    width: 0%;
  }
}
</style>
