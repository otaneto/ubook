<template>
  <div class="home-container">
    <empty-content />
  </div>
</template>

<script>
import EmptyContent from '../components/EmptyContent.vue';

export default {
  name: 'Home',
  components: {
    EmptyContent,
  },
};
</script>

<style lang="scss">
  .home-container {
    height: 100%;
  }
</style>
