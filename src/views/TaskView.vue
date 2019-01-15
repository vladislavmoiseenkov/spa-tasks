<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="jumbotron" v-if="task">
            <div class="display-4">
              <h1 @click="editName" v-if="!edit">{{ task.name }}</h1>
              <div class="form-group" v-else>
                <input
                  class="form-control"
                  type="text"
                  v-model="task.name"
                  autofocus
                />
                <button
                  class="btn btn-success"
                  type="button"
                  @click="save"
                >Save</button>
              </div>
            </div>
            <p class="lead">{{ task.description }}</p>
            <hr class="my-4">
            <p>Created: {{ task.creation_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'TaskView',
  data() {
    return {
      edit: false,
      task: null,
    };
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks/getTasks',
    }),
  },
  mounted() {
    this.task = this.tasks.find(item => item.id === (+this.$route.params.id));
    if (this.task) {
      this.task = JSON.parse(JSON.stringify(this.task));
    }
  },
  methods: {
    ...mapActions({
      updateTaskById: 'tasks/updateTaskById',
    }),
    editName() {
      this.edit = true;
    },
    save() {
      this.edit = false;
      this.updateTaskById(this.task);
      axios.put('https://jsonplaceholder.typicode.com/posts/1', { title: this.task.name })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style scoped>

</style>
