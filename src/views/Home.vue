<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <table-view :header="['Name', 'Tags', 'Actual effort', 'Estimated effort', 'Due date']">
            <tbody slot="body">
              <tr
              v-for="(task, index) in tasks"
              :key="index"
              v-if="task.obj_status === 'active'"
            >
              <td
                :class="{ isHighPriority: task.is_high_priority }"
              >
                <router-link
                  class="task-name"
                  :to="{ name: 'task', params: { id: task.id } }"
                >
                  {{ task.name }}
                </router-link>
              </td>
              <td>
                <div class="tags" v-if="task.tags">
                  <span
                    v-for="(tag, tagIndex) in task.tags"
                    :key="tagIndex"
                  >
                    <span>{{ tag }}</span>
                    <span v-if="tagIndex < task.tags.length - 1">, </span>
                  </span>
                </div>
                <div v-else>
                  ---
                </div>
              </td>
              <td>
                <span v-if="task.actual_effort">{{ task.actual_effort }}</span>
                <span v-else>---</span>
              </td>
              <td>
                <span v-if="task.estimated_effort">{{ task.estimated_effort }}</span>
                <span v-else>---</span>
              </td>
              <td>
                <span
                  v-if="task.due_date"
                >
                  <!--{{ $moment(task.due_date).format('DD-MM-YYYY HH:mm') }}-->
                </span>
                <span v-else>---</span>
              </td>
            </tr>
            </tbody>
          </table-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import TableView from '@/components/TableView.vue';

export default {
  name: 'Home',
  components: { TableView },
  computed: {
    ...mapGetters({
      tasks: 'tasks/getTasks',
    }),
  },
};
</script>

<style scoped lang="scss">
  .task-name {
    color: #000000;
    cursor: pointer;
  }
</style>
