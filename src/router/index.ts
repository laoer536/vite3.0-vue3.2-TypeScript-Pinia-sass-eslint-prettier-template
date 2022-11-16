// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH as string),
  routes,
})
export default router
