import { createRouter, createWebHistory } from "vue-router";
import TypeView from "@/views/typeView.vue";
import SeasonView from "@/views/seasonView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/registerView.vue";
import HomeView from "@/views/HomeView.vue";
import TodoDetailView from "@/views/todoDetailView.vue";

import { createApp } from "vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/type",
            name: "type",
            component: TypeView,
        },

        {
            path: "/season",
            name: "season",
            component: SeasonView,
        },

        {
            path: "/login",
            name: "login",
            component: LoginView,
        },

        {
            path: "/register",
            name: "register",
            component: RegisterView,
        },

        {
            path:"/todo/:id",
            name: "todoDetail",
            component: TodoDetailView,
        }


    ]
});

export default router;