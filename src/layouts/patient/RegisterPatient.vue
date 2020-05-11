<template>
  <div class="flex h-screen bg-gray-100">
    <div class="lg:w-1/2 bg-white h-screen p-10">
      <form action="" method="post">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="input-normal" placeholder="Carla Armindo Maposse" type="text" id="name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            class="input-normal"
            placeholder="example@email.com"
            type="email"
            id="email"
            required
          />
        </div>

        <div class="form-group">
          <label for="bi">Bilhete Identidade</label>
          <input
            class="input-normal"
            placeholder="110300252626D"
            type="text"
            id="bi"
          />
        </div>

        <div class="form-group">
          <label for="birthdate">Data de Nascimanto</label>
          <input class="input-normal" type="date" id="birthdate" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            class="input-normal"
            placeholder="**************"
            type="password"
            id="password"
            required
          />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select class="input-normal" id="gender" required>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
    <div class="lg:w-1/2">
      Image here
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
