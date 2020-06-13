import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Example from "./components/Example";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
