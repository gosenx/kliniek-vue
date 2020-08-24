<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <div class="container mx-auto mt-2 flex justify-end">Doutor(a) {{ this.$store.state.user.fullname }}</div>
    <main class="mt-12 px-4 container mx-auto">
      <list-appointments :appointments="appointments"></list-appointments>
      <div class="mt-5" v-if="completedAppointments.length > 0">
        <div class="w-64 mb-2">
          <input type="text" placeholder="filtrar..." class="input-base" />
        </div>
        <div>
          <table class="table-base table-auto">
            <thead>
              <tr>
                <th>Nr.</th>
                <th>Paciente</th>
                <th>Peso</th>
                <th>Data e Hora</th>
                <th>Estado</th>
                <th>Acção</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="appoint in completedAppointments" :key="appoint.id">
                <td>{{ appoint.id }}</td>
                <td>{{ appoint.patient.fullname }}</td>
                <td>{{ appoint.patient_weight }}</td>
                <td>{{ appoint.date + " " + appoint.time }}</td>
                <td>{{ appoint.state }}</td>
                <td><a href="#" @click="toggleDetailsModal(appoint)" class="text-blue-700">Detalhes</a></td>
              </tr>
            </tbody>
          </table>
          <appointment-modal
            v-if="isDetailsModalOpen"
            :appointment="selectedAppoint"
            @close="toggleDetailsModal"
          ></appointment-modal>
        </div>
      </div>
      <div v-else>
        <h3 class="text-lg text-gray-600">Você ainda não possuí nenhuma consulta concluída.</h3>
      </div>
    </main>
    <footer class="mt-20 mb-4 text-gray-500 text-center">&copy; GosenX Labs</footer>
  </div>
</template>

<script>
import axios from "@/axios";

import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import ListAppointments from "@/components/ListAppointmentsComponent.vue";
import AppointmentModal from "@/components/AppointmentModal.vue";

export default {
  components: {
    ListAppointments,
    DashboardHeader,
    AppointmentModal,
  },

  created() {
    this.retriveAppointments();
    this.retriveCompletedAppointments();
  },

  data() {
    return {
      appointments: [],
      completedAppointments: [],
      isDetailsModalOpen: false,
      selectedAppoint: {},
    };
  },
  methods: {
    retriveAppointments() {
      axios
        .get(`api/doctors/${this.$store.state.user.certification_code}/appointments?state=scheduled`)
        .then((res) => {
          this.appointments = res.data;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },

    retriveCompletedAppointments() {
      axios
        .get(`api/doctors/${this.$store.state.user.certification_code}/appointments?state=complete`)
        .then((res) => {
          this.completedAppointments = res.data;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },

    toggleDetailsModal(appoint) {
      if (this.isDetailsModalOpen) {
        this.isDetailsModalOpen = false;
      } else {
        this.selectedAppoint = appoint;
        this.isDetailsModalOpen = true;
      }
    },
  },
};
</script>
