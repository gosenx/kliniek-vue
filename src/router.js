import VueRouter from "vue-router";
import Home from "./layouts/Home";
import Example from "./components/Example";
import Signup from "./layouts/Signup";

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/example", component: Example },
    { path: "/login", component: Example },
    { path: "/signup", component: Signup },
  ],
});
