import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/router'
import store from './stores/store'
import Echo from 'laravel-echo';

Vue.config.productionTip = false


window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '9ca92ed6bbd576792e1e',
  cluster: 'ap2',
  encrypted: true
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
