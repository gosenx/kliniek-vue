<template>
  <div class="z-50 fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
    <div v-on-clickaway="toggle" id="body" class="bg-white max-w-md rounded">
      <div class="rounded-t bg-gray-300 flex justify-between items-end text-2xl px-4 py-2">
        <h1>Médico #{{ doctor.certification_code }}</h1>
        <span @click="toggle" class="cursor-pointer text-gray-700 hover:text-gray-900">X</span>
      </div>
      <div class="p-4">
        <div class="mb-4 flex justify-between">
          <div>
            <h3 class="font-semibold">Doutor(a)</h3>
            <h4 class="uppercase">{{ doctor.fullname }}</h4>
          </div>

          <div>
            <h3 class="font-semibold">Especialidade</h3>
            <h4 class="uppercase">{{ doctor.specialty.name }}</h4>
          </div>
        </div>

        <div>
          <div class="mb-4">
            <h3 class="text-lg font-semibold">Consultas agendadas</h3>
            <hr />
          </div>

          <div v-if="appointments.length > 0">
            <p
              v-for="appoint in appointments"
              :key="appoint.id"
              class="text-gray-700 bg-gray-300 px-2 py-1 border-b border-gray-400"
            >
              Dia <span class="text-gray-800">{{ appoint.date }}</span> pelas
              <span class="text-gray-800">{{ appoint.time }}</span> com o paciente
              <span class="font-semibold">{{ appoint.patient.fullname }}. </span>
            </p>
          </div>

          <div v-else>
            <h3 class="text-gray-600 text-lg">O(a) doutor(a) {{ doctor.fullname }} não possuí consultadas marcadas.</h3>
          </div>
        </div>

        <div class="mt-6">
          <button @click="toggle" class="mt-4 btn-normal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import axios from "@/axios";

export default {
  mixins: [clickaway],
  created() {
    this.retriveAppointments();
  },

  props: {
    doctor: {
      required: true,
    },
  },

  data() {
    return {
      appointments: [],
    };
  },

  methods: {
    toggle() {
      this.$emit("close");
    },

    retriveAppointments() {
      axios
        .get(`api/doctors/${this.doctor.certification_code}/appointments`)
        .then((res) => {
          this.appointments = res.data;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
};
</script>

<style>
#body {
  min-width: 460px;
}
</style>
