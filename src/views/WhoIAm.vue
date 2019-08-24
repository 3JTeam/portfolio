<template>
  <div class="whoiam">
    <PageTitle pageTitle="Who I Am" />
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/PageTitle.vue';

export default {
  name: 'whoiam',
  components: {
    PageTitle,
  },
};
</script>

<style scoped lang="scss">
.whoiam {
  background-color: $backGroundColor;
}
</style>
