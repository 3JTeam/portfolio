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
