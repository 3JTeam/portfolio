<template>
  <div class="skillset">
    <PageTitle pageTitle="Skill Set page" />
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/PageTitle.vue';

export default {
  name: 'skillset',
  components: {
    PageTitle,
  },
};
</script>

<style scoped lang="scss">
.skillset {
  background-color: $backGroundColor;
}
</style>
