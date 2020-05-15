import VueRouter from "vue-router";
import Home from "./layouts/Home";
import Example from "./components/Example";
import RegisterPatient from "./layouts/patient/RegisterPatient";

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/example", component: Example },
    { path: "/register-patient", component: RegisterPatient },
  ],
});
