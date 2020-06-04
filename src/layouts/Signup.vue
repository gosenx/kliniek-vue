<template>
  <div>
    <div class="flex-col md:flex md:flex-row w-full min-h-screen font-family-baloo">
      <div class="w-full bg-indigo-700 md:flex md:items-center p-5">
        <h1 class="text-3xl md:text-6xl font-bold md:font-semibold text-center md:text-left text-white leading-none">
          Registe-se para marcar suas <br class="hidden md:inline" />
          consultas online.
        </h1>
      </div>
      <div class="w-full p-5 md:flex md:flex-col md:justify-center">
        <form action="">
          <div class="form-group">
            <label for="fullname">Nome</label>
            <input type="text" class="input-normal" placeholder="Claudia Mirela Sandiru" id="fullname" />
            <p class="hidden text-red-700 text-sm font-semibold">Campo obrigatorio!</p>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="input-normal" placeholder="claudia.mirela@bobari.co.mz" id="email" />
            <p class="hidden text-red-700 text-sm font-semibold">Campo obrigatorio!</p>
          </div>

          <div class="form-group">
            <label for="gender">Genero</label>
            <select id="gender" class="input-normal">
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
            <p class="hidden text-red-700 text-sm font-semibold">Campo obrigatorio!</p>
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <input class="input-normal" type="password" placeholder="***************" />
            <p class="hidden text-red-700 text-sm font-semibold">Campo obrigatorio!</p>
          </div>

          <div class="form-group">
            <label for="confirm-password">Confirmar senha</label>
            <input class="input-normal" type="confirm-password" placeholder="***************" />
            <p class="hidden text-red-700 text-sm font-semibold">Campo obrigatorio!</p>
          </div>

          <button class="btn-normal">Registar</button>
          <div class="w-full mt-2 text-gray-600">
            Já possui uma conta? <a class="text-blue-700 hover:underline" href="/login">&rArr;Entrar</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http, { credentials } from "@/axios";
export default {
  data() {
    return {
      error: "",
      user: { username: "pamossecuambe@gmail.com", password: "sysAdminPa$$" },
    };
  },
  methods: {
    testAxios() {
      Object.assign(this.user, credentials);
      http
        .post("/oauth/token", this.user)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          this.error = err;
          console.log(err.response);
        });
    },
  },
};
</script>

<style></style>
