<template>
  <div class="flex flex-col-reverse bg-gray-300 md:flex-row">
    <div class="w-full h-screen bg-white p-5 md:p-10">
      <form action="" method="post">
        <div class="form-group">
          <label class="label-normal" for="name">Name</label>
          <input class="input-normal" placeholder="Carla Armindo Maposse" type="text" id="name" required />
        </div>

        <div class="form-group">
          <label class="label-normal" for="email">Email</label>
          <input class="input-normal" placeholder="example@email.com" type="email" id="email" required />
        </div>

        <div class="form-group">
          <label class="label-normal" for="bi">Bilhete Identidade</label>
          <input class="input-normal" placeholder="110300252626D" type="text" id="bi" />
        </div>

        <div class="form-group">
          <label class="label-normal" for="birthdate">Data de Nascimento</label>
          <input class="input-normal" type="date" id="birthdate" />
        </div>

        <div class="form-group">
          <label class="label-normal" for="password">Password</label>
          <input class="input-normal" placeholder="**************" type="password" id="password" required />
        </div>

        <div class="form-group">
          <label class="label-normal" for="gender">Gender</label>
          <select class="input-normal" id="gender" required>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>

        <button class="btn-normal uppercase mb-5" type="submit">
          Sign up
        </button>
      </form>
    </div>
    <div class="bg-indigo-600 p-10 w-full md:h-screen flex flex-col justify-center items-center md:items-start">
      <p class="text-4xl text-gray-200 font-bold leading-none md:text-6xl">
        Marque suas <br class="hidden md:inline" />
        consultas online!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
