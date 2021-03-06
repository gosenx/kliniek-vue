<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <div class="container mx-auto mt-2 flex justify-end">Secretária {{ this.$store.state.user.fullname }}</div>

    <main class="mt-12 px-4 container mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-6 gap-2 mb-10">
        <div class="shadow bg-green-700 text-white p-4">
          <h3>Consultas agendadas</h3>
          <p class="text-2xl">{{ stats.appointments.scheduled }}</p>
        </div>

        <div class="shadow bg-blue-700 text-white p-4">
          <h3>Médicos</h3>
          <p class="text-2xl">{{ stats.doctors }}</p>
        </div>

        <div class="shadow bg-indigo-700 text-white p-4">
          <h3>Pacientes</h3>
          <p class="text-2xl">{{ stats.patients }}</p>
        </div>

        <div class="shadow bg-red-700 text-white p-4">
          <h3>Consultas terminadas</h3>
          <p class="text-2xl">{{ stats.appointments.complete }}</p>
        </div>
      </div>
      <nav class="flex mb-4">
        <a class="navigation-link" :class="page == 'consultas' ? 'active' : ''" @click="page = 'consultas'" href="#"
          >Consultas</a
        >
        <a class="navigation-link" :class="page == 'medicos' ? 'active' : ''" @click="showDoctors()" href="#"
          >Médicos</a
        >
        <a class="navigation-link" :class="page == 'pacientes' ? 'active' : ''" @click="showPatients()" href="#"
          >Pacientes</a
        >
      </nav>

      <div>
        <div v-if="page === 'consultas'">
          <list-appointments :appointments="appointments"></list-appointments>
        </div>

        <div v-if="page === 'medicos'">
          <div v-if="doctors.length == 0">
            Sem médicos a mostrar...
          </div>
          <div v-else class="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            <doctor-card v-for="doctor in doctors" :key="doctor.certification_code" :doctor="doctor"></doctor-card>
          </div>
        </div>

        <div v-if="page === 'pacientes'">
          <div v-if="patients.length == 0">
            Sem pacientes a mostrar...
          </div>
          <div v-else class="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            <patient-card v-for="patient in patients" :key="patient.id" :patient="patient"></patient-card>
          </div>
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
import DoctorCard from "@/components/DoctorCardComponent.vue";
import PatientCard from "@/components/PatientCardComponent.vue";

export default {
  components: {
    ListAppointments,
    DashboardHeader,
    DoctorCard,
    PatientCard,
  },

  created() {
    this.retriveAppointments();
  },
  mounted(){
    this.retriveStats();

  },

  data() {
    return {
      appointments: [],
      doctors: [],
      patients: [],
      page: "consultas",
      stats: [],
    };
  },

  methods: {
    showDoctors() {
      this.page = "medicos";
      this.retriveDoctors();
    },
    showPatients() {
      this.page = "pacientes";
      this.retrivePatients();
    },

    retriveAppointments() {
      axios
        .get(`api/appointments?state=scheduled`)
        .then((res) => {
          this.appointments = res.data;
        })
        .catch((err) => console.log(err));
    },

    retriveDoctors() {
      if (this.doctors.length == 0) {
        axios
          .get(`api/doctors`)
          .then((res) => {
            this.doctors = res.data;
          })
          .catch((err) => console.log(err));
      }
    },

    retrivePatients() {
      if (this.patients.length == 0) {
        axios
          .get(`api/patients`)
          .then((res) => {
            this.patients = res.data.data;
          })
          .catch((err) => console.log(err));
      }
    },

    retriveStats() {
      if (this.patients.length == 0) {
        axios
          .get(`api/stats`)
          .then((res) => {
            this.stats = res.data;
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>
