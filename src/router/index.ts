// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NProgress from 'nprogress'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH as string),
  routes,
})
//nprogress
router.beforeEach((to, from) => {
  if (to.path !== from.path) NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
