<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <main class="mt-12 px-4 container mx-auto">
      <list-appointments></list-appointments>
      <div class="my-5">
        <h1 class="text-6xl">Receptionist Dashboard</h1>
      </div>
    </main>
    <footer class="mt-20 mb-4 text-gray-500 text-center">&copy; GosenX Labs</footer>
  </div>
</template>

<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import ListAppointments from "@/components/ListAppointmentsComponent.vue";

export default {
  components: {
    ListAppointments,
    DashboardHeader,
  },
};
</script>
