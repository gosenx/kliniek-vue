<template>
  <div>
    <patient-dashboard v-if="profile_type == 'patient'"></patient-dashboard>
    <doctor-dashboard v-else-if="profile_type == 'doctor'">Doctors</doctor-dashboard>
    <receptionist-dashboard v-else-if="profile_type == 'receptionist'">Receptionists</receptionist-dashboard>
    <admin-dashboard v-else-if="profile_type == 'admin'">Admins</admin-dashboard>
    <div v-else-if="profile_type == 'super_admin'">Super Admins</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AdminDashboard from "./admins/AdminDashboard";
import DoctorDashboard from "./doctors/DoctorDashboard";
import PatientDashboard from "./patients/PatientDashboard";
import ReceptionistDashboard from "./receptionists/ReceptionistDashboard";

export default {
  components: {
    AdminDashboard,
    DoctorDashboard,
    PatientDashboard,
    ReceptionistDashboard,
  },
  computed: {
    ...mapGetters(["profile_type"]),
  },
  created() {
    this.$store.commit("setAuthHeader");
  },
};
</script>
