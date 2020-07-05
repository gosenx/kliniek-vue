<template>
  <div class="px-6 py-4 bg-gray-200">
    <div v-show="false">
      <div class=" mb-6 md:flex justify-between items-center">
        <h2 class="text-2xl md:text-4xl mb-4 md:mb-0">Que tipo de consulta deseja realizar?</h2>
        <div>
          <input type="text" placeholder="filtrar..." class="input-base" />
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-4">
        <specialty class="active"></specialty>
        <specialty></specialty>
        <specialty></specialty>
      </div>
    </div>
    <div v-show="false" class=" md:w-1/2">
      <h4 class="text-2xl md:text-4xl mb-2">Escolha a data da consulta</h4>
      <input type="date" class="input-base" />
    </div>
    <div v-show="true">
      <h4 class="text-2xl md:text-4xl mb-2">Escolha a hora</h4>
      <div class="flex md:w-1/2 justify-between">
        <div class="time-badge">13:00</div>
        <div class="time-badge">13:40</div>
        <div class="time-badge">14:20</div>
        <div class="time-badge active">15:00</div>
        <div class="time-badge">15:40</div>
        <div class="time-badge">16:20</div>
      </div>
    </div>
    <div class="flex justify-end mt-10">
      <div class="w-64 flex">
        <button class="btn-normal-outline">Anterior</button>
        <button class="btn-normal-outline ml-2">Próximo</button>
      </div>
    </div>
  </div>
</template>
<script>
import Specialty from "./Specialty";

export default {
  components: {
    Specialty,
  },
  methods: {
    next() {},
  },
};
</script>
