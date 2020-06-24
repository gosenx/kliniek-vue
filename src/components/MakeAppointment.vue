<template>
  <div class="px-6 py-4 bg-gray-300">
    <div class="mb-2">
      <p class="font-semibold text-2xl text-gray-700">Tipo de consulta</p>
    </div>
    <choose-specialty></choose-specialty>
    Marcar consulta!
  </div>
</template>
<script>
import ChooseSpecialty from "./ChooseSpecialty";
export default {
  components: {
    ChooseSpecialty,
  },
};
</script>
