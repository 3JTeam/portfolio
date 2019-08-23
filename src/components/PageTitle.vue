<template>
  <div class="pageTitle">
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    pageTitle: String,
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
