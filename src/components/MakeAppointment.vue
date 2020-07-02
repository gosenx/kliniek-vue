<template>
  <div class="px-6 py-4 bg-gray-300">
    <div class="mb-2">
      <p class="font-semibold text-2xl text-gray-700">Que tipo de consulta deseja realizar?</p>
    </div>
    <div class="grid gap-4 grid-cols-3">
      <choose-specialty></choose-specialty>
      <choose-specialty></choose-specialty>
      <choose-specialty></choose-specialty>
      <choose-specialty></choose-specialty>
      <choose-specialty></choose-specialty>
    </div>
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
