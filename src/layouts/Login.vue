<template>
  <div>
    <div class="flex justify-center items-center min-h-screen bg-indigo-700 font-family-rubik">
      <div class="w-full md:w-2/5 mx-5 shadow-md rounded-sm bg-white p-5 md:flex md:flex-col md:justify-center">
      <h1 class="font-family-dancing font-bold text-3xl mb-5">Logar para acessar suas consultas</h1>
        <form action="">
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
      errors: {
        email: [],
        password: [],
      },
      user: {},
    };
  },
  methods: {
    validateInput() {
      this.errors.email = [];
      this.errors.password = [];

      const matchEmail = /\S+@\S+\.\S+/;

      if (!this.user.email) {
        this.errors.email.push("Campo obrigatório!");
      } else {
        if (!matchEmail.test(this.user.email)) {
          this.errors.email.push("Formato de email inválido!");
        }
      }

      if (!this.user.password) {
        this.errors.password.push("Campo obrigatório!");
      } else if (this.user.password.length < 6) {
        this.errors.password.push("A senha deve ter no mínimo 6 caracteres!");
      }
    },
    noInputErrorsFound() {
      if (this.errors.email.length === 0 && this.errors.password.length === 0) return true;
    },
    login() {
      this.validateInput();
      if (this.noInputErrorsFound()) {
        console.log("The form is properly validated");
      }
    },
  },
};
</script>

<style></style>
