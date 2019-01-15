import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';

import Vuex from 'vuex';

import Home from '@/views/Home';
import TaskList from '@/components/TaskList';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {};

    getters['tasks/getTasks'] = () => [
      {
        id: 1,
        name: 'Today_task1',
        creation_date: '2015-04-21T06:50:21',
        due_date: '2015-04-22T23:59:00',
        start_date: '2015-04-21T00:00:01',
        is_completed: false,
        is_archived: false,
        estimated_effort: 5.5,
        actual_effort: 3.3,
        physical_progress: 60,
        obj_status: 'active',
        description: 'Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit',
        project_id: 0,
      },
    ];

    store = new Vuex.Store({
      getters,
    });
  });

  it('renders tasks table ', () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.contains(TaskList)).toBe(true);
  });

  it('check count', () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue,
      slots: {
        body: 'tbody',
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.findAll('tbody>tr').length).toEqual(store.getters['tasks/getTasks'].length);
  });

  it('check redirect', () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue,
      slots: {
        body: 'tbody',
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.find(RouterLinkStub).props().to).toEqual({ name: 'task', params: { id: 1 } });
  });
});
