import Vue from 'vue';
import moment from 'moment';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  template: '<App></App>',
  components: { App },
}).$mount('#app');
