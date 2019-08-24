<template>
  <div class="projects">
    <PageTitle pageTitle="Projects page" />
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/PageTitle.vue';

export default {
  name: 'projects',
  components: {
    PageTitle,
  },
};
</script>

<style scoped lang="scss">
.projects {
  background-color: $backgroundColor;
}
</style>
