<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <main class="mt-12 px-4 container mx-auto">
      <div class="grid grid-cols-3 gap-10 row-gap-3">
        <appointment-component></appointment-component>
        <appointment-component></appointment-component>
        <appointment-component></appointment-component>
      </div>
      <div class="mt-1">
        <make-appointment></make-appointment>
      </div>
    </main>
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
