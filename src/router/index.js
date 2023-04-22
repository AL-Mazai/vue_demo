import { createRouter, createWebHashHistory } from 'vue-router'
import User from "@/views/User";
import Login from "@/views/Login";
const routes = [
  {
    path: '/',
    name: '/user',
    component: User
  },
  {
    path:'/login',
    name:'/login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
