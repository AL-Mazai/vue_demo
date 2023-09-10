import { createRouter, createWebHashHistory } from 'vue-router'
import User from "@/views/User";
import Login from "@/views/Login";
import Document from "@/views/Document";

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
    {
        path:'/doc',
        name:'/doc',
        component: Document
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
