<template>
  <div>
    <p
      v-if="appointments.length == 0"
      class="text-gray-500 py-4 text-center text-3xl border-2 border-dashed border-gray-400"
    >
      Nenhuma consulta em andamento.
    </p>
    <div v-else class="grid md:grid-cols-3 gap-10 row-gap-3">
      <appointment-card
        v-for="appointment in appointments"
        :key="appointment.id"
        :appointment="appointment"
      ></appointment-card>
    </div>
  </div>
</template>
<script>
import AppointmentCard from "./AppointmentCardComponent.vue";
export default {
  components: {
    AppointmentCard,
  },
  props: {
    appointments: {
      default: () => [],
    },
  },
};
</script>
