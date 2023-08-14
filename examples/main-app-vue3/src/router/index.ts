import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/react",
    name: "react",
    component: () => import("../views/MicroAppReact.vue"),
  },
  {
    path: "/vue3",
    name: "vue3",
    component: () => import("../views/MicroAppVue3.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
