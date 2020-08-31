<template>
  <div class="z-50 fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
    <div v-on-clickaway="toggle" id="body" class="bg-white max-w-md rounded">
      <div class="rounded-t bg-gray-300 flex justify-between items-end text-2xl px-4 py-2">
        <h1>Consulta #{{ appointment.id }}</h1>
        <span @click="toggle" class="cursor-pointer text-gray-700 hover:text-gray-900">X</span>
      </div>
      <div class=" p-4">
        <div class="flex justify-between">
          <div>
            <h2 class="font-semibold">{{ appointment.patient.fullname }}</h2>
            <p>{{ appointment.patient_weight }}kg</p>
          </div>
          <div>
            <h2 class="font-semibold">Dr(a). {{ appointment.doctor.fullname }}</h2>
            <p>{{ appointment.date }} {{ appointment.time }}</p>
          </div>
        </div>
        <div class="mt-6">
          <div>
            <span class="font-medium">Descrição:</span>
            {{ appointment.description }}
          </div>
          <div class="mt-4">
            <div class="mb-2">
              <h3 class="text-lg font-semibold">Prescrever o paciente</h3>
              <hr />
            </div>

            <form action="">
              <div class="form-group">
                <label for="prescription">Prescrição</label>
                <textarea v-model="data.prescription" id="prescription" class="input-normal" rows="10"></textarea>
              </div>

              <div class="form-group">
                <label for="notes">Notas adicionais</label>
                <textarea v-model="data.notes" id="notes" class="input-normal" rows="10"></textarea>
              </div>
              <div class="w-32">
                <button @click.prevent="prescribeAppointment()" class="btn-normal">Prescrever</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  props: {
    appointment: {
      required: true,
    },
  },

  data() {
    return {
      data: {
        prescription: "",
        notes: "",
      },
    };
  },

  methods: {
    toggle() {
      this.$emit("close");
    },

    prescribeAppointment() {
      axios
        .post(`api/doctors/${this.$store.state.user.certification_code}/appointments/${this.appointment.id}`, this.data)
        .then(() => {
          this.toggle();
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
