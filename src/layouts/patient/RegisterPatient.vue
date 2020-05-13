<template>
  <div class="flex flex-col-reverse bg-gray-300 md:flex-row">
    <div class="w-full flex flex-col justify-center h-screen bg-white p-5 md:p-10">
      <form action="" method="post">
        <div class="form-group">
          <label class="label-normal" for="name">Nome Completo</label>
          <input class="input-normal" placeholder="Carla Armindo Maposse" type="text" id="name" required />
        </div>

        <div class="form-group">
          <label class="label-normal" for="email">Email</label>
          <input class="input-normal" placeholder="example@email.com" type="email" id="email" required />
        </div>

        <div class="form-group">
          <label class="label-normal" for="bi">Bilhete de Identidade</label>
          <input class="input-normal" placeholder="110300252626D" type="text" id="bi" />
        </div>

        <div class="form-group">
          <label class="label-normal" for="birthdate">Data de Nascimento</label>
          <input class="input-normal" type="date" id="birthdate" />
        </div>

        <div class="form-group">
          <label class="label-normal" for="password">Senha</label>
          <input class="input-normal" placeholder="**************" type="password" id="password" required />
        </div>

        <div class="form-group">
          <label class="label-normal" for="gender">Genero</label>
          <select class="input-normal" id="gender" required>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>

        <div class="flex justify-between items-center">
          <button class="btn-normal uppercase" type="submit">
            Sign up
          </button>
          <a class="cursor-pointer font-semibold underline text-xl leading-none text-indigo-700" href="#" type="submit">
            Possui uma conta? <br class="md:hidden" /><span class="">Logar &raquo;</span></a
          >
        </div>
      </form>
    </div>
    <div class="bg-indigo-600 p-10 w-full md:h-screen flex flex-col justify-center md:items-start">
      <p class="text-4xl text-gray-200 font-bold leading-none md:text-6xl">
        Registe-se para <br class="hidden md:inline" />
        marcar suas consultas!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
