import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomePage.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundPage.vue') },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
