import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index';
import main from '../views/main';
import show from '../views/show';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: index,
    redirect: '/main',
    children: [
      {
        path: 'main',
        name: 'main',
        component: main
      },
      {
        path: 'show',
        name: 'show',
        component: show
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
