<template>
  <div>
    <p v-show="false" class="text-gray-500 py-4 text-center text-3xl border-2 border-dashed border-gray-400">
      Nenhuma consulta marcada ou em andamento.
    </p>
    <div class="grid md:grid-cols-3 gap-10 row-gap-3">
      <appointment-card></appointment-card>
      <appointment-card></appointment-card>
      <appointment-card></appointment-card>
    </div>
  </div>
</template>
<script>
import AppointmentCard from "./AppointmentCardComponent.vue";
export default {
  components: {
    AppointmentCard,
  },
};
</script>
