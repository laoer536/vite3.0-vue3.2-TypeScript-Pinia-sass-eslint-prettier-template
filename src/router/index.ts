import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import("../views/About.vue"),
  // },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH as string),
  routes,
})

export default router
