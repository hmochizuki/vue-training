import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Todo from "../pages/Todo.vue";
import Othello from "../pages/Othello/index.vue";

type PathNames = Record<typeof routes[number]["name"], typeof routes[number]["path"]>
export const pathNames: PathNames = {
  Home: "/",
  Todo: "/todo",
  Othello: "/othello"
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  },
  {
    path: "/othello",
    name: "Othello",
    component: Othello
  }
] as const;

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
