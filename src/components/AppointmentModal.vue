<template>
  <div v-show="open" class="z-50 fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
    <div class="bg-white max-w-md rounded">
      <div class="rounded-t bg-gray-300 flex justify-between items-end text-2xl px-4 py-2">
        <h1>Consulta #134</h1>
        <span @click="toggle" class="cursor-pointer text-gray-700 hover:text-gray-900">X</span>
      </div>
      <div class=" p-4">
        <div class="flex justify-between text-indigo-600">
          <div>
            <h2 class="font-semibold">Paulo Amosse</h2>
            <p>51.2 kg</p>
          </div>
          <div>
            <h2 class="font-semibold">Dr. Marcos Fonseca</h2>
            <p>12/07/2020 16:20</p>
          </div>
        </div>
        <div class="mt-6">
          <div>
            <p class="font-bold text-green-600">Concluída</p>
          </div>
          <p class="">
            <span class="font-medium">Descrição:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            rem perspiciatis quos officia, sed cum veniam aut repudiandae harum corporis expedita reprehenderit,
            incidunt maxime voluptas, modi quae. Excepturi, eos ullam?
          </p>
          <p class="mt-2">
            <span class="font-medium">Prescrição:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            veritatis!
          </p>
          <p class="mt-2">
            <span class="font-medium">Notas adicionais:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, rem.
          </p>
          <button @click="toggle" class="mt-4 btn-normal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appointment: {
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    toggle() {
      if (open) {
        this.open = true;
      } else this.open = false;
    },
  },
};
</script>
