<template>
  <div class="bg-white rounded border-2 border-gray-400 p-4 text-gray-900 mb-5">
    <div class="flex justify-between text-xs">
      <p class="text-gray-600">
        {{ appointment.date }} <span class="font-semibold">{{ appointment.time }}</span>
      </p>
      <p class="leading-none text-white text-xs px-2 py-1 bg-blue-600 rounded">{{ appointment.state }}</p>
    </div>
    <p class="text-2xl font-semibold">
      <span v-if="profile == 'patient'">{{ "Dr(a). " + appointment.doctor.fullname }}</span>
      <span v-else>{{ appointment.patient.fullname }}</span>
    </p>
    <p class="text-lg leading-tight text-gray-700">{{ appointment.description }}</p>

    <div class="flex justify-between text-sm mt-1">
      <p class="">{{ profile == "patient" ? "" : "Dr(a). " + appointment.doctor.fullname }}</p>
      <div v-if="user.profile_type !== 'patient'">
        <div v-if="user.profile_type === 'doctor' && appointment.date <= currentDay">
          <button @click="togglePrescriptionModal" class="underline text-indigo-700 hover:text-indigo-800">
            Prescrever
          </button>
        </div>
        <div v-else>
          <button @click="toggleModal" class="underline text-indigo-700 hover:text-indigo-800">Detalhes</button>
        </div>
        <div></div>
      </div>
    </div>
    <modal :appointment="appointment" v-if="isModalOpen" @close="toggleModal"></modal>
    <prescribe-appointment-modal
      :appointment="appointment"
      v-if="isPrescriptionModalOpen"
      @close="togglePrescriptionModal"
    ></prescribe-appointment-modal>
  </div>
</template>
<script>
import Modal from "@/components/AppointmentModal";
import PrescribeAppointmentModal from "@/components/PrescribeAppointmentModal";
import { mapState } from "vuex";

export default {
  components: {
    Modal,
    PrescribeAppointmentModal,
  },
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      isModalOpen: false,
      isPrescriptionModalOpen: false,
      profile: this.$store.getters.profile_type,
      currentDay: new Date().getFullYear() + "-0" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
    };
  },
  props: {
    appointment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleModal() {
      if (this.isModalOpen) {
        this.isModalOpen = false;
      } else this.isModalOpen = true;
    },

    togglePrescriptionModal() {
      if (this.isPrescriptionModalOpen) {
        this.isPrescriptionModalOpen = false;
      } else this.isPrescriptionModalOpen = true;
    },
  },
};
</script>
