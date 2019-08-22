import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/whoiam',
      name: 'whoiam',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "whoiam" */ './views/WhoIAm.vue'),
    },
    {
      path: '/skillset',
      name: 'skillset',
      component: () => import(/* webpackChunkName: "skillset" */ './views/SkillSet.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
    },
  ],
});
