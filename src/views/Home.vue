<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <task-list :header="['Name', 'Tags', 'Actual effort', 'Estimated effort', 'Due date']">
            <tbody slot="body">
              <tr
                v-for="(task, index) in tasks"
                :key="index"
                v-if="task.obj_status === 'active'"
            >
              <td :class="{ isHighPriority: task.is_high_priority }">
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
                    <span>{{ tag }}{{ tagIndex < task.tags.length - 1 ? ',' : '' }}</span>
                  </span>
                </div>
                <div v-else>
                  ---
                </div>
              </td>
              <td>
                <span>{{ task.actual_effort || '---' }}</span>
              </td>
              <td>
                <span>{{ task.estimated_effort || '---' }}</span>
              </td>
              <td>
                <span>
                  {{ task.due_date || '---' }}
                </span>
              </td>
            </tr>
            </tbody>
          </task-list>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskList from '../components/TaskList';

export default {
  name: 'Home',
  components: { TaskList },
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
