/*
 * home子路由
 * */
const homeIndexPage = () => import(/* webpackChunkName:'home' */ '@/views/home.vue');

export default [{
  name: 'index',
  path: '',
  redirect: '/home/1',
}, {
  name: 'home',
  path: 'home/:id',
  component: homeIndexPage,
  meta: { auth: 'level_02' },
},
];
