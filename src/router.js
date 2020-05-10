import VueRouter from "vue-router";
import Example from "./components/Example";
import RegisterPatient from "./layouts/patient/RegisterPatient";

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/example", component: Example },
    { path: "/register-patient", component: RegisterPatient },
  ],
});
