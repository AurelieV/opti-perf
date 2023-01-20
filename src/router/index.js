import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/on-track",
            name: "on-track",
            component: () => import("../views/OnTrackView.vue"),
        },
        {
            path: "/vue-memo",
            name: "vue-memo",
            component: () => import("../views/VueMemoView.vue"),
        },
        {
            path: "/lazy-ref",
            name: "lazy-ref",
            component: () => import("../views/LazyRefView.vue"),
        },
        {
            path: "/shared-effect",
            name: "shared-effect",
            component: () => import("../views/SharedEffectView.vue"),
        },
    ],
});

export default router;
