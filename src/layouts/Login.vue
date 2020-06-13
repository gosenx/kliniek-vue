<template>
  <div>
    <div class="flex justify-center items-center min-h-screen bg-indigo-700 font-family-rubik">
      <div
        id="card"
        class="mx-5 shadow-md rounded-sm bg-white p-5 md:flex md:flex-col md:justify-center"
      >
        <h1 class="text-blue-800 font-medium leading-none text-3xl mb-5">Logue para acessar suas consultas</h1>
        <form action="">
          <div class="p-3 rounded mb-2 bg-red-200 text-red-900" v-show="error.credentials">
            {{ error.credentials }}
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="input-normal"
              v-model="data.username"
              required
              placeholder="claudia.mirela@bobari.co.mz"
              id="email"
            />
            <p class="text-red-700 text-sm font-semibold" v-show="error.email.length > 0">
              {{ error.email[0] }}
            </p>
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

          <button class="btn-normal" @click.prevent="login">Logar</button>
          <div class="w-full mt-2 text-gray-600">
            Ainda não possui uma conta? <a class="text-blue-700 hover:underline" href="/signup">&rArr;Registe-se</a>
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
      error: {
        email: [],
        password: [],
        credentials: "",
      },
      data: {},
    };
  },
  methods: {
    validateInput() {
      this.error.email = [];
      this.error.password = [];
      this.error.credentials = "";

      const matchEmail = /\S+@\S+\.\S+/;

      if (!this.data.username) {
        this.error.email.push("Campo obrigatório!");
      } else {
        if (!matchEmail.test(this.data.username)) {
          this.error.email.push("Formato de email inválido!");
        }
      }

      if (!this.data.password) {
        this.error.password.push("Campo obrigatório!");
      } else if (this.data.password.length < 6) {
        this.error.password.push("A senha deve ter no mínimo 6 caracteres!");
      }
    },
    noInputErrorsFound() {
      if (this.error.email.length === 0 && this.error.password.length === 0) return true;
    },
    login() {
      this.validateInput();
      if (this.noInputErrorsFound()) {
        // join user data with the api credentials to authenticate the request
        this.$store.dispatch("login", this.data).catch((err) => {
          this.error.credentials = "O email/senha fornecidos são inválidos!";
          err.response;
        });
      }
    },
  },
};
</script>

<style>
#card {
  max-width: 400px;
  min-width: 200px;
  max-height: 600px;
}
</style>
