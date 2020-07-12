<template>
  <div class="z-50 fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
    <div v-on-clickaway="toggle" id="body" class="bg-white max-w-md rounded">
      <div class="rounded-t bg-gray-300 flex justify-between items-end text-2xl px-4 py-2">
        <h1>Consulta #{{ appointment.id }}</h1>
        <span @click="toggle" class="cursor-pointer text-gray-700 hover:text-gray-900">X</span>
      </div>
      <div class=" p-4">
        <div class="flex justify-between text-indigo-600">
          <div>
            <h2 class="font-semibold">{{ appointment.patient.fullname }}</h2>
            <p>{{ appointment.patient_weight }}kg</p>
          </div>
          <div>
            <h2 class="font-semibold">Dr. Marcos Fonseca</h2>
            <p>{{ appointment.date }} {{ appointment.time }}</p>
          </div>
        </div>
        <div class="mt-6">
          <div>
            <p class="font-bold text-green-600">{{ appointment.state }}</p>
          </div>
          <p>
            <span class="font-medium">Descrição:</span>
            {{ appointment.description }}
          </p>
          <p class="mt-2">
            <span class="font-medium">Prescrição:</span>
            {{ !appointment.prescription ? "Indisponível" : appointment.prescription }}
          </p>
          <p class="mt-2">
            <span class="font-medium">Notas adicionais:</span>
            {{ !appointment.notes ? "Não fornecidas." : appointment.notes }}
          </p>
          <button @click="toggle" class="mt-4 btn-normal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  props: {
    appointment: {
      required: true,
    },
  },
  methods: {
    toggle() {
      this.$emit("close");
    },
  },
};
</script>

<style>
#body {
  min-width: 460px;
}
</style>
