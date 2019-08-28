<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">home</router-link> | <router-link to="/whoiam">who i am</router-link> |
      <router-link to="/skillset">skill set</router-link> |
      <router-link to="/projects">projects</router-link>
    </header>
    <router-view id="routerView" />
    <Footer id="footer" />
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
  display: grid;
  grid-template:
    [row1-start] 'header header header header header' 1fr [row1-end]
    [row2-start] 'routerView routerView routerView routerView routerView' 7fr [row2-end]
    [row3-start] 'footer footer footer footer footer' 1fr [row3-end]
    / auto;
  height: 100vh;
  width: 100vw;
  font-family: $firaSansBold;
  text-align: center;
  color: #2c3e50;

  #nav {
    grid-area: header;
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  #routerView {
    margin-top: 3em;
    grid-area: routerView;
  }
  #footer {
    grid-area: footer;
  }
}
</style>
