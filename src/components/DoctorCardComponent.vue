<template>
  <div>
    <div class="bg-white shadow px-4 py-2 w-full md:max-w-sm flex">
      <img src="@/assets/svg/stethoscope.svg" class="self-start w-12 mr-4" alt="Sthetoscope" />
      <div>
        <h3 class="md:text-xl font-semibold">
          {{ doctor.fullname.split(" ")[0] + " " + doctor.fullname.split(" ")[1] }}
        </h3>
        <h4>{{ doctor.specialty.name }}</h4>
        <a href="#" @click="toggleModal()" class="text-blue-700">Consultas</a>
      </div>
    </div>

    <doctor-scheduled-appointments
      :doctor="doctor"
      v-if="isModalOpen"
      @close="toggleModal"
    ></doctor-scheduled-appointments>
  </div>
</template>

<script>
import DoctorScheduledAppointments from "./DoctorScheduledAppointmentsModal";
export default {
  components: {
    DoctorScheduledAppointments,
  },
  props: {
    doctor: {
      default: () => {},
    },
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    toggleModal() {
      if (this.isModalOpen) {
        this.isModalOpen = false;
      } else this.isModalOpen = true;
    },
    
  },
};
</script>
