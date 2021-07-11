import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./views/home/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
