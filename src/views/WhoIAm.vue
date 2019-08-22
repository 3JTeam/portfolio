<template>
  <div class="whoiam">
    <HelloWorld msg="Who I Am" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'whoiam',
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
