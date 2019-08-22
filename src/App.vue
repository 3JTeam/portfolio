<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link> | <router-link to="/whoiam">who i am</router-link> |
      <router-link to="/skillset">skill set</router-link> |
      <router-link to="/projects">projects</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
#app {
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
