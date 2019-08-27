<template>
  <main class="home">
    <PageTitle pageTitle="Jim Strother" id="title" />
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
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  #title {
    align-self: center;
  }
}
</style>
