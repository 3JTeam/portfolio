<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link> | <router-link to="/whoiam">who i am</router-link> |
      <router-link to="/skillset">skill set</router-link> |
      <router-link to="/projects">projects</router-link>
    </div>
    <router-view />
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
  * {
    border: 1px solid red;
  }
  font-family: $firaSansBold;
  text-align: center;
  color: #2c3e50;
}
#nav {
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
