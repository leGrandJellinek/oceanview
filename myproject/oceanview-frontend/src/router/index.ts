import { createRouter, createWebHashHistory, RouteRecordRaw , createWebHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "home" */ "@/views/HomeView.vue")
  },

  {
    path:'/dubai',
    name:'dubai',
    component: () => import("@/views/DubaiView.vue")
  },
  {
    path:'/stambul',
    name:'stambul',
    component: () => import("@/views/StambulView.vue")
  },
  {
    path:'/tbilisi',
    name:'tbilisi',
    component: () => import("@/views/TbilisiView.vue")
  },
  {
    path:'/malasiya',
    name:'malasiya',
    component: () => import("@/views/MalasiyaView.vue")
  },
  {
    path:'/baku',
    name:'baku',
    component: () => import("@/views/BakuView.vue")
  },
  {
    path:'/tailand',
    name:'tailand',
    component: () => import("@/views/TailandView.vue")
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import ("@/views/404.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // прокрутка страницы в начало
  next()
})

export default router