import Vue from "vue";
import Vuex from "vuex";

import axios, { apiCredentials } from "./axios";
import router from "./router";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    accessToken: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || {},
    specialties: [],
  },

  getters: {
    isLoggedIn: (state) => !!state.accessToken,
    profile_type: (state) => state.user.profile_type,
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
      state.accessToken = null;
    },

    setUser(state, payload) {
      state.user = payload.user;
      localStorage.setItem("user", JSON.stringify(payload.user));
    },

    setAuthHeader(state) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + state.accessToken;
    },

    setSpecialties(state, specialties) {
      state.specialties = specialties;
    },
  },

  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("oauth/token", { ...user, ...apiCredentials })
          .then((response) => {
            commit("login", response.data.access_token);
            commit("setAuthHeader");

            this.dispatch("fetchUser").then(() => {
              router.push("/dashboard");
              resolve("You are Logged in!");
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    signup({ dispatch }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/signup", { ...user, ...apiCredentials })
          .then((res) => {
            if (res.status && res.status == 200) {
              dispatch("login", { username: user.email, password: user.password });
            } else resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    fetchUser({ commit }) {
      return axios
        .get("api/user")
        .then((resp) => {
          commit("setUser", { user: resp.data.data });
        })
        .catch((err) => {
          throw new Error(err);
        });
    },

    logout({ commit }) {
      return new Promise((resolve) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];

        commit("logout");
        resolve("logout");
      });
    },
  },
});
