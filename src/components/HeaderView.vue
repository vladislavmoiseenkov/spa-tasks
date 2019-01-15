<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <router-link :to="{ name: 'home' }" class="navbar-brand">
      App
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderView',
};
</script>

<style scoped>

</style>
