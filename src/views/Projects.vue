<template>
  <div class="projects">
    <HelloWorld msg="Projects page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'projects',
  components: {
    HelloWorld,
  },
};
</script>

<style scoped lang="scss">
home {
  background-color: $backGroundColor;
}
</style>
