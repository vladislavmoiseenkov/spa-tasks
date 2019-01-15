const state = {
  tasks: [],
};

const getters = {
  getTasks(state) {
    return state.tasks;
  },
};

const actions = {
  setTasks({ commit }, tasks) {
    commit('setTasks', tasks);
  },
  updateTaskById({ commit }, task) {
    commit('updateTaskById', task);
  },
};

const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  updateTaskById(state, task) {
    state.tasks = state.tasks.map((item) => {
      if (item.id === task.id) {
        // eslint-disable-next-line
        item = Object.assign({}, task);
      }
      return item;
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
