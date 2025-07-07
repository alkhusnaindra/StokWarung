import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
