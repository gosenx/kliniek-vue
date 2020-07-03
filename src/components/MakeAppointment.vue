<template>
  <div class="px-6 py-4 bg-gray-200">
    <div class="mb-2">
      <h3 class="font-semibold text-2xl text-gray-700">Que tipo de consulta deseja realizar?</h3>
      <div class="flex justify-between mt-5 mb-2">
        <div class="w-48">
          <input type="text" placeholder="filtrar..." class="input-base" />
        </div>
        <div class="w-48">
          <button class="btn-normal opacity-75 cursor-not-allowed" disabled>Seguinte</button>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
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
