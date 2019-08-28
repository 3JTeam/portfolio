<template>
  <main class="projects">
    <ProjectsCard
      v-for="(project, index) in projectsData"
      :key="index"
      :name="project.name"
      :imageSrc="project.imageSrc"
      :about="project.about"
      :gitHub="project.gitHub"
      :activeSite="project.activeSite"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import projectsData from '@/data/projectsData';
import ProjectsCard from '@/components/ProjectsCard.vue';

export default {
  name: 'projects',
  components: {
    ProjectsCard,
  },
  data() {
    return {
      projectsData,
    };
  },
};
</script>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: $backgroundColor;
}
</style>
