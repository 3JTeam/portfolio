<template>
  <div id="app">
    <div class="routing">
      <header id="nav">
        <router-link to="/">home</router-link> | <router-link to="/whoiam">who i am</router-link> |
        <router-link to="/skillset">skill set</router-link> |
        <router-link to="/projects">projects</router-link>
      </header>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped lang="scss">
#app {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  font-family: $firaSansBold;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
header {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
