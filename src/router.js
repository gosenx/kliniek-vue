import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./layouts/Home";
import Example from "./components/Example";
import Login from "./layouts/Login"
import Signup from "./layouts/Signup";

Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/example", component: Example },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
  ],
});
