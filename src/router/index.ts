import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import layoutI from '@/layouts/layoutI.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: layoutI,
    children: [
      {
        // title: '单机',
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        children: [
          {
            path: '/huangfu',
            name: 'Huangfu',
            component: () => import(/* webpackChunkName: "about" */ '../views/about/Huangfu.vue'),
          }, {
            path: '/shengkun',
            name: 'Shengkun',
            component: () => import(/* webpackChunkName: "about" */ '../views/about/Shengkun.vue'),
          },
        ],
      }, {
        // title: '单机',
        path: '/like',
        name: 'Like',
        component: () => import(/* webpackChunkName: "like" */ '../views/Like.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth === 'level_02') {   // 鉴权验证

  }
  next();
});

export default router;
