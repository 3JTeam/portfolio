<template>
  <div class="skillset">
    <HelloWorld msg="Skill Set page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'skillset',
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
