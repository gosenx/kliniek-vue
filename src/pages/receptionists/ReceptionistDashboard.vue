<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <main class="mt-12 px-4 container mx-auto">
      <nav class="flex mb-4">
        <a class="navigation-link" :class="page == 'consultas' ? 'active' : ''" @click="page = 'consultas'" href="#"
          >Consultas</a
        >
        <a class="navigation-link" :class="page == 'medicos' ? 'active' : ''" @click="page = 'medicos'" href="#"
          >Médicos</a
        >
        <a class="navigation-link" :class="page == 'pacientes' ? 'active' : ''" @click="page = 'pacientes'" href="#"
          >Pacientes</a
        >
      </nav>

      <div>
        <div v-if="page === 'consultas'">
          <list-appointments :appointments="appointments"></list-appointments>
        </div>

        <div v-if="page === 'medicos'">
          Médicos
        </div>

        <div v-if="page === 'pacientes'">
          Pacientes
        </div>
      </div>
    </main>
    <footer class="mt-20 mb-4 text-gray-500 text-center">&copy; GosenX Labs</footer>
  </div>
</template>

<script>
import axios from "@/axios";

import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import ListAppointments from "@/components/ListAppointmentsComponent.vue";

export default {
  components: {
    ListAppointments,
    DashboardHeader,
  },
  created() {
    this.retriveAppointments();
  },
  data() {
    return {
      appointments: [],
      page: "consultas",
    };
  },
  methods: {
    retriveAppointments() {
      axios
        .get(`api/appointments`)
        .then((res) => {
          this.appointments = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
