import { createRouter, createWebHistory } from 'vue-router'
import Page1Vue from '../views/Page1.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/asd",
            component: Page1Vue,

        }
    ]
})

export default router
