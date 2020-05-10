<template>
  <div>
    <form action="" method="post">
      <label for="name">Name</label>
      <input type="text" id="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" required />

      <label for="bi">Bilhete Identidade</label>
      <input type="text" id="bi" />

      <label for="birthdate">Data de Nascimanto</label>
      <input type="date" id="birthdate" />

      <label for="password">Password</label>
      <input type="password" id="password" required />

      <label for="gender">Gender</label>
      <select id="gender" required>
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
