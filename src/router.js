import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Example from "./components/Example";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { store } from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: Home, meta: { requiresAuth: false } },
    { path: "/example", component: Example, meta: { requiresAuth: true } },
    { path: "/login", component: Login, meta: { hideIfAuth: true } },
    { path: "/signup", component: Signup, meta: { hideIfAuth: true } },
    { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else if (to.matched.some((route) => route.meta.hideIfAuth)) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
