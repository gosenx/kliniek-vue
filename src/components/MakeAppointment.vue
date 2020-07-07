<template>
  <div class="px-6 py-4 bg-gray-200">
    <div v-show="currentStage === 'specialty'">
      <div class=" mb-6 md:flex justify-between items-center">
        <h2 class="text-2xl md:text-3xl mb-4 md:mb-0">Que tipo de consulta deseja realizar?</h2>
        <div>
          <input type="text" placeholder="filtrar..." class="input-base" />
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-4">
        <specialty name="options" label="1" @change="changeValue" :value="specialty_id"></specialty>
        <specialty name="options" label="2" @change="changeValue" :value="specialty_id"></specialty>
        <specialty name="options" label="3" @change="changeValue" :value="specialty_id"></specialty>
      </div>
    </div>
    <div v-show="currentStage === 'date'" class=" md:w-1/2">
      <h4 class="text-2xl md:text-3xl mb-2">Escolha a data da consulta</h4>
      <input type="date" :min="getMinDate()" class="input-base" />
    </div>
    <div v-show="currentStage === 'time'">
      <h4 class="text-2xl md:text-3xl mb-2">Escolha a hora</h4>
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
      <div class="w-48 btn-group">
        <button :disabled="currentStage === 'specialty'" @click="previous()">Anterior</button>
        <button :disabled="currentStage === 'time'" @click="next()">Próximo</button>
      </div>
    </div>
  </div>
</template>
<script>
import Specialty from "./Specialty";
import addDays from "@/utils/data";
export default {
  components: {
    Specialty,
  },
  data() {
    return {
      currentStage: "specialty", // specialty, date, time
      specialty_id: "2",
    };
  },
  methods: {
    changeValue(id) {
      this.specialty_id = id;
    },
    previous() {
      if (this.currentStage == "time") {
        this.currentStage = "date";
      } else if (this.currentStage == "date") {
        this.currentStage = "specialty";
      }
    },
    next() {
      if (this.currentStage == "specialty") {
        this.currentStage = "date";
      } else if (this.currentStage == "date") {
        this.currentStage = "time";
      }
    },
    getMinDate() {
      let now = new Date();
      if (now.getHours() + ":" + now.getMinutes() > "16:20") {
        return addDays(1)
          .toISOString()
          .substring(0, 10);
      }
      return now.toISOString().substring(0, 10);
    },
  },
};
</script>
