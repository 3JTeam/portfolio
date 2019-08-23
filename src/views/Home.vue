<template>
  <div class="home">
    <PageTitle pageTitle="Jim Strother" />
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/PageTitle.vue';

export default {
  name: 'home',
  components: {
    PageTitle,
  },
};
</script>

<style scoped lang="scss">
home {
  background-color: $backGroundColor;
}
</style>
