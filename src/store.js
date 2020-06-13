import Vue from "vue";
import Vuex from "vuex";
import axios, { apiCredentials } from "./axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    accessToken: localStorage.getItem("token") || "",
    user: {},
  },
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
    hasUserInfo: (state) => !!state.user,
  },
  mutations: {
    login(state, token) {
      state.accessToken = token;
      localStorage.setItem("token", token);
    },
    signup(state) {
      console.state(state.user);
    },
    logout(state) {
      state.user = {};
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
    setUser(state, payload) {
      state.user = payload.user;
    },
  },
  actions: {
    login({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("oauth/token", { ...user, ...apiCredentials })
          .then((response) => {
            commit("login", response.data.access_token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access_token;
            dispatch("getUser");
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getUser({ commit }) {
      return axios
        .get("api/user")
        .then((resp) => {
          console.log(resp.data.data);
          commit("setUser", { user: resp.data.data });
        })
        .catch((err) => console.log(err));
    },
  },
});
