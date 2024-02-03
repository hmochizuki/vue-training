import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Todo from "../pages/Todo.vue";

type PathNames = Record<typeof routes[number]["name"], typeof routes[number]["path"]>
export const pathNames: PathNames = {
  Home: "/",
  Todo: "/todo"
}

export const routes = [
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
] as const;

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
