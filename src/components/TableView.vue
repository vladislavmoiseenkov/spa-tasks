<template>
  <section>
    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th
          scope="col"
          v-for="(item, index) in header"
          :key="index"
        >
          {{ item }}
        </th>
      </tr>
      </thead>
      <slot name="body" />
    </table>
  </section>
</template>

<script>
export default {
  name: 'TableView',
  props: {
    header: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>

</style>
