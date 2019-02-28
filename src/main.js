import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from '../node_modules/vue-router'
import Routes from './routes'

export const bus=new Vue();

Vue.use(VueRouter);
Vue.use(VueResource);

const router=new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
