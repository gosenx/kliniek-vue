import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "./assets/css/main.css";
import "./assets/css/custom.css";

import { router } from "./router";
import { store } from "./store";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
