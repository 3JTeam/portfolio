<template>
  <div class="home">
    <PageTitle pageTitle="Jim Strother" />
    <HomeDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/PageTitle.vue';
import HomeDisplay from '@/components/HomeDisplay.vue';

export default {
  name: 'home',
  components: {
    PageTitle,
    HomeDisplay,
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: $backGroundColor;
  padding: 0;
}
</style>
