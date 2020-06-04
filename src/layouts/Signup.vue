<template>
  <div>
    <div class="flex-col md:flex md:flex-row w-full min-h-screen font-family-baloo">
      <div class="w-full bg-indigo-700 md:flex md:items-center p-5">
        <h1 class="text-3xl md:text-6xl md:mb-8 font-bold md:font-semibold text-center md:text-left text-white leading-none">
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
              v-model="user.fullname"
              placeholder="Claudia Mirela Sandiru"
              id="fullname"
            />
            <p class="text-red-700 text-sm font-semibold" v-show="errors.fullname.length > 0">
              {{ errors.fullname[0] }}
            </p>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="input-normal"
              v-model="user.email"
              required
              placeholder="claudia.mirela@bobari.co.mz"
              id="email"
            />
            <p class="text-red-700 text-sm font-semibold" v-show="errors.email.length > 0">
              {{ errors.email[0] }}
            </p>
          </div>

          <div class="form-group">
            <label for="gender">Genero</label>
            <select id="gender" required v-model="user.gender" class="input-normal">
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
            <p class="text-red-700 text-sm font-semibold" v-show="errors.gender.length > 0">{{ errors.gender[0] }}</p>
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <input
              class="input-normal"
              required
              v-model="user.password"
              type="password"
              placeholder="***************"
            />
            <p class="text-red-700 text-sm font-semibold" v-show="errors.password.length > 0">
              {{ errors.password[0] }}
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
            <p class="text-red-700 text-sm font-semibold" v-show="errors.confirm_password.length > 0">
              {{ errors.confirm_password[0] }}
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
export default {
  data() {
    return {
      errors: {
        fullname: [],
        email: [],
        gender: [],
        password: [],
        confirm_password: [],
      },
      user: {},
      confirm_password: "",
    };
  },
  methods: {
    validateInput() {
      this.errors.fullname = [];
      this.errors.email = [];
      this.errors.gender = [];
      this.errors.password = [];
      this.errors.confirm_password = [];

      const matchEmail = /\S+@\S+\.\S+/;

      if (!this.user.fullname) {
        this.errors.fullname.push("Campo obrigatório!");
      } else if (this.user.fullname.trim().split(" ").length <= 1) {
        console.log(this.user.fullname.trim().split(" ").length);
        this.errors.fullname.push("O nome deve ter no mínimo duas palavras.");
      }

      if (!this.user.email) {
        this.errors.email.push("Campo obrigatório!");
      } else {
        if (!matchEmail.test(this.user.email)) {
          this.errors.email.push("Formato de email inválido!");
        }
      }

      if (!this.user.gender) {
        this.errors.gender.push("Campo obrigatório!");
      }

      if (!this.user.password) {
        this.errors.password.push("Campo obrigatório!");
      } else if (this.user.password.length < 6) {
        this.errors.password.push("A senha deve ter no mínimo 6 caracteres!");
      }

      if (!this.confirm_password) {
        this.errors.confirm_password.push("Campo obrigatório!");
      }

      if (this.user.password && this.confirm_password && this.user.password !== this.confirm_password) {
        this.errors.confirm_password.push("Este campo não coincide com a senha fornecida.");
      }
    },
    noInputErrorsFound() {
      if (
        this.errors.fullname.length === 0 &&
        this.errors.email.length === 0 &&
        this.errors.gender.length === 0 &&
        this.errors.password.length === 0 &&
        this.errors.confirm_password.length === 0
      )
        return true;
    },
    signup() {
      this.validateInput();
      if (this.noInputErrorsFound()) {
        console.log("The form is properly validated");
      }
    },
  },
};
</script>

<style></style>
