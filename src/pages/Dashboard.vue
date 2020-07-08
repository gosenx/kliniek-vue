<template>
  <div>
    <patient-dashboard v-if="profile_type == 'patient'"></patient-dashboard>
    <div v-else-if="profile_type == 'doctor'">Doctors</div>
    <div v-else-if="profile_type == 'receptionist'">Receptionists</div>
    <div v-else-if="profile_type == 'admin'">Admins</div>
    <div v-else>Admins</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PatientDashboard from "./patients/PatientDashboard";

export default {
  components: {
    PatientDashboard,
  },
  computed: {
    ...mapGetters(["profile_type"]),
  },
};
</script>
