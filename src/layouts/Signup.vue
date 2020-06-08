<template>
  <div>
    <div class="flex-col md:flex md:flex-row w-full min-h-screen font-family-baloo">
      <div class="w-full bg-indigo-700 md:flex md:items-center p-5">
        <h1
          class="text-3xl md:text-6xl md:mb-8 font-bold md:font-semibold text-center md:text-left text-white leading-none"
        >
          Registe-se para marcar suas <br class="hidden md:inline" />
          consultas online.
        </h1>
      </div>
      <div class="w-full p-5 md:flex md:flex-col md:justify-center">
        <form action="">
          <div class="form-group">
            <label for="fullname">Nome</label>
            <input
              type="text"
              class="input-normal"
              required
              v-model="data.fullname"
              placeholder="Claudia Mirela Sandiru"
              id="fullname"
            />
            <p class="text-red-700 text-sm font-semibold" v-show="error.fullname.length > 0">
              {{ error.fullname[0] }}
            </p>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="input-normal"
              v-model="data.email"
              required
              placeholder="claudia.mirela@bobari.co.mz"
              id="email"
            />
            <p class="text-red-700 text-sm font-semibold" v-show="error.email.length > 0">
              {{ error.email[0] }}
            </p>
          </div>

          <div class="form-group">
            <label for="gender">Genero</label>
            <select id="gender" required v-model="data.gender" class="input-normal">
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
            <p class="text-red-700 text-sm font-semibold" v-show="error.gender.length > 0">{{ error.gender[0] }}</p>
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <input
              class="input-normal"
              required
              v-model="data.password"
              type="password"
              placeholder="***************"
            />
            <p class="text-red-700 text-sm font-semibold" v-show="error.password.length > 0">
              {{ error.password[0] }}
            </p>
          </div>

          <div class="form-group">
            <label for="confirm-password">Confirmar senha</label>
            <input
              class="input-normal"
              required
              v-model="confirm_password"
              type="password"
              placeholder="***************"
            />
            <p class="text-red-700 text-sm font-semibold" v-show="error.confirm_password.length > 0">
              {{ error.confirm_password[0] }}
            </p>
          </div>

          <button class="btn-normal" @click.prevent="signup">Registar</button>
          <div class="w-full mt-2 text-gray-600">
            Já possui uma conta? <a class="text-blue-700 hover:underline" href="/login">&rArr;Entrar</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios, { apiCredentials } from "@/axios";

export default {
  data() {
    return {
      error: {
        fullname: [],
        email: [],
        gender: [],
        password: [],
        confirm_password: [],
      },
      data: {},
      confirm_password: "",
    };
  },
  methods: {
    validateInput() {
      this.error.fullname = [];
      this.error.email = [];
      this.error.gender = [];
      this.error.password = [];
      this.error.confirm_password = [];

      const matchEmail = /\S+@\S+\.\S+/;

      if (!this.data.fullname) {
        this.error.fullname.push("Campo obrigatório!");
      } else if (this.data.fullname.trim().split(" ").length <= 1) {
        this.error.fullname.push("O nome deve ter no mínimo duas palavras.");
      }

      if (!this.data.email) {
        this.error.email.push("Campo obrigatório!");
      } else {
        if (!matchEmail.test(this.data.email)) {
          this.error.email.push("Formato de email inválido!");
        }
      }

      if (!this.data.gender) {
        this.error.gender.push("Campo obrigatório!");
      }

      if (!this.data.password) {
        this.error.password.push("Campo obrigatório!");
      } else if (this.data.password.length < 6) {
        this.error.password.push("A senha deve ter no mínimo 6 caracteres!");
      }

      if (!this.confirm_password) {
        this.error.confirm_password.push("Campo obrigatório!");
      }

      if (this.data.password && this.confirm_password && this.data.password !== this.confirm_password) {
        this.error.confirm_password.push("Este campo não coincide com a senha fornecida.");
      }
    },
    noInputErrorsFound() {
      if (
        this.error.fullname.length === 0 &&
        this.error.email.length === 0 &&
        this.error.gender.length === 0 &&
        this.error.password.length === 0 &&
        this.error.confirm_password.length === 0
      )
        return true;
    },
    signup() {
      this.validateInput();
      if (this.noInputErrorsFound()) {
        // join user data with the api credentials to authenticate the request
        axios
          .post("api/signup", { ...this.data, ...apiCredentials })
          .then((res) => {
            // store token in the browser
            console.log(res);
          })
          .catch((err) => {
            let errors = err.response.data.errors;
            if ({}.hasOwnProperty.call(errors, "email")) {
              this.error.email.push(...errors.email);
            }
          });
      }
    },
  },
};
</script>

<style></style>
