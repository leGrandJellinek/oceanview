import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dubai from "@/views/DubaiView.vue"
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
    component: Dubai
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
    path:'/tai',
    name:'tailand',
    component: () => import("@/views/TailandView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
