<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <main class="mt-12 px-4 container mx-auto">
      <p v-show="false" class="text-gray-500 py-4 text-center text-3xl border-2 border-dashed border-gray-400">
        Nenhuma consulta marcada ou em andamento.
      </p>
      <div class="grid md:grid-cols-3 gap-10 row-gap-3">
        <appointment-component></appointment-component>
        <appointment-component></appointment-component>
        <appointment-component></appointment-component>
      </div>
      <div class="my-5">
        <make-appointment></make-appointment>
      </div>
    </main>
    <footer class="mt-20 mb-4 text-gray-500 text-center">&copy; GosenX Labs</footer>
  </div>
</template>

<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import AppointmentComponent from "@/components/AppointmentComponent.vue";
import MakeAppointment from "@/components/MakeAppointment.vue";

export default {
  components: {
    AppointmentComponent,
    DashboardHeader,
    MakeAppointment,
  },
};
</script>
