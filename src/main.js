// import 'vueify/lib/insert-css'
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import store from './store/store';
import App from './app.vue';
import Vgenwallet from './components/vgenwallet.vue';
import Vdashboard from './components/vdashboard.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);


const routes = [
  { path: '/', component: Vgenwallet },
  { path: '/dashboard', component: Vdashboard },
];

const router = new VueRouter({
  routes, // short for routes: routes
});

const vm = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});

vm.$mount(document.getElementById('app'));
