<template>
  <div
    class="skillSetHeader"
    v-if="title !== '__ob__' && (selectedTitle === null || selectedTitle === title)"
  >
    <!-- the above v-if is to check for the __ob__ key on Vue objects. don't need to display them -->
    <h2 @click="setTitleName(title)" class="title">
      {{ title }}
    </h2>
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
.header {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  .skillSetHeader {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    .title {
      background-color: $backgroundColor;
      cursor: pointer;
      padding: 0.5em;
    }
  }
  p {
    font-weight: bold;
    background-color: $backgroundColor;
    width: 30%;
    align-self: center;
  }
}
</style>
