<template>
  <div class="z-50 fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
    <div v-on-clickaway="toggle" id="body" class="bg-white max-w-md rounded">
      <div class="rounded-t bg-gray-300 flex justify-between items-end text-2xl px-4 py-2">
        <h1>Paciente #{{ patient.patient_code }}</h1>
        <span @click="toggle" class="cursor-pointer text-gray-700 hover:text-gray-900">X</span>
      </div>
      <div class="p-4">
        <div class="mb-2">
          <div class="mb-4">
            <h3 class="text-lg font-semibold">Informações do paciente</h3>
            <hr />
          </div>

          <div class="flex flex-wrap justify-between">
            <div>
              <h2 class="font-semibold text-gray-700">{{ patient.fullname }}</h2>
              <h2 class="uppercase">{{ patient.job_title }}</h2>
            </div>

            <div>
              <h2 class="font-semibold text-gray-700">{{ patient.email }}</h2>
              <h2 class="uppercase">{{ patient.address }}</h2>
            </div>
          </div>
        </div>

        <div>
          <p>Sexo: {{ patient.gender }}</p>
          <p>Ano de nascimento: {{ patient.birthdate }}</p>
        </div>

        <div>
          <div class="mt-4">
            <h3 class="text-lg font-semibold">Contactos</h3>
            <hr />
          </div>
          <div v-if="patient.contacts.length > 0">
            <div v-for="phone in patient.contacts" :key="phone.id">
              <p>Contacto {{ phone.type }}: {{ phone.phone_number }}</p>
            </div>
          </div>
          <div v-else>
            <h3 class="text-lg text-gray-700">Este paciente não possuí contactos registados.</h3>
          </div>
        </div>

        <div class="mt-6">
          <div>
            <p class="font-bold text-green-600">{{ patient.bithdate }}</p>
          </div>

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
    patient: {
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
