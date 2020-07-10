<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <main class="mt-12 px-4 container mx-auto">
      <list-appointments :appointments="appointments"></list-appointments>
      <div class="my-5">
        <make-appointment></make-appointment>
      </div>
    </main>
    <footer class="mt-20 mb-4 text-gray-500 text-center">&copy; GosenX Labs</footer>
  </div>
</template>

<script>
import axios from "@/axios";
import { mapState } from "vuex";

import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import ListAppointments from "@/components/ListAppointmentsComponent.vue";
import MakeAppointment from "@/components/patients/MakeAppointment.vue";

export default {
  components: {
    ListAppointments,
    DashboardHeader,
    MakeAppointment,
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {
    this.retriveAppointments();
  },
  data() {
    return {
      appointments: [],
    };
  },
  methods: {
    retriveAppointments() {
      axios
        .get(`api/patients/${this.user.patient_code}/appointments`)
        .then((res) => (this.appointments = res.data))
        .catch((err) => console.log(err));
    },
  },
};
</script>
