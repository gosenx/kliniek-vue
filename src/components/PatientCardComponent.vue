<template>
  <div>
    <div class="bg-white shadow px-4 py-2 w-full md:max-w-sm flex">
      <img src="@/assets/svg/heart.svg" class="self-start w-12 mr-4" alt="Sthetoscope" />
      <div class="w-full">
        <h3 class="md:text-xl font-semibold">
          {{ patient.fullname.split(" ")[0] + " " + patient.fullname.split(" ")[1] }}
        </h3>

        <div class="flex justify-between">
          <h4 class="text-sm uppercase">{{ patient.job_title }}</h4>
          <a href="#" @click="toggleModal()" class="text-blue-600">Mais...</a>
        </div>
      </div>
    </div>

    <patient-details-modal v-if="isModalOpen" :patient="patient" @close="toggleModal"></patient-details-modal>
  </div>
</template>

<script>
import PatientDetailsModal from "./PatientDetailsModal";

export default {
  components: {
    PatientDetailsModal,
  },
  props: {
    patient: {
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
