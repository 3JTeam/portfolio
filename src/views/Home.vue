<template>
  <main class="home">
    <h1 class="title">Jim Strother</h1>
    <HomeDisplay />
  </main>
</template>

<script>
// @ is an alias to /src
import HomeDisplay from '@/components/HomeDisplay.vue';

export default {
  name: 'home',
  components: {
    HomeDisplay,
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: $backgroundColor;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  #title {
    align-self: center;
  }
}
</style>
