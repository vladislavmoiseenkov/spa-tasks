<template>
  <div id="app">
    <header-view />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import tasks from './assets/tasks.json';
import HeaderView from './components/HeaderView';

export default {
  name: 'App',
  components: { HeaderView },
  created() {
    this.setTasks(tasks);
  },
  methods: {
    ...mapActions({
      setTasks: 'tasks/setTasks',
    }),
  },
};
</script>

<style lang="scss">
@import "./scss/app";
</style>
