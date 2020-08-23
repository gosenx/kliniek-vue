<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <main class="mt-12 px-4 container mx-auto">
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
  data() {
    return {
      appointments: [],
      doctors: [],
      patients: [],
      page: "consultas",
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
        .get(`api/appointments`)
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
  },
};
</script>
