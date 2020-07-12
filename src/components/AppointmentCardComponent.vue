<template>
  <div class="bg-white rounded border-2 border-gray-400 p-4 text-gray-900 mb-5">
    <div class="flex justify-between text-xs">
      <p class="text-gray-600">{{ appointment.date }} {{ appointment.time }}</p>
      <p class="leading-none text-white text-xs px-2 py-1 bg-blue-600 rounded">{{ appointment.state }}</p>
    </div>
    <p class="text-2xl font-semibold">{{ appointment.patient.fullname }}</p>
    <p class="text-lg leading-tight text-gray-700">{{ appointment.description }}</p>

    <div class="flex justify-between text-sm mt-1">
      <p class="">Dr. {{ appointment.doctor.fullname }}</p>
      <button @click="toggleModal" class="underline text-indigo-700 hover:text-indigo-800">Detalhes</button>
    </div>
    <modal :appointment="appointment" v-if="isModalOpen" @close="toggleModal"></modal>
  </div>
</template>
<script>
import Modal from "@/components/AppointmentModal";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalOpen: false,
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
  },
};
</script>
