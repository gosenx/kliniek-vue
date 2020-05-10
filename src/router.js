import VueRouter from "vue-router";
import Example from "./components/Example";

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [{ path: "/example", component: Example }],
});
