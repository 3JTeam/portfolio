<template>
  <main class="home">
    <PageTitle pageTitle="Jim Strother" />
    <HomeDisplay />
  </main>
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
  background-color: $backgroundColor;
}
</style>
