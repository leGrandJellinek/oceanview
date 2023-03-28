import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

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
    name:'dubai',
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
    path:'/bangkok',
    name:'bangkok',
    component: () => import("@/views/BangkokView.vue")
  },
  {
    path:'/baku',
    name:'baku',
    component: () => import("@/views/BakuView.vue")
  },
  {
    path:'/milan',
    name:'milan',
    component: () => import("@/views/MilanView.vue")
  },
  {
    path:'/paris',
    name:'paris',
    component: () => import("@/views/ParisView.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
