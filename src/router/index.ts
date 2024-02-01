import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import Todo from "../pages/Todo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
