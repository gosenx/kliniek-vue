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
        <specialty
          name="specialty"
          @change="toggleSpecialty"
          v-for="specialty in specialties"
          :key="specialty.id"
          :specialty="specialty"
          :value="input.specialty_id"
        ></specialty>
      </div>
    </div>
    <div v-show="currentStage === 'date'" class=" md:w-1/2">
      <h4 class="text-2xl md:text-3xl mb-2">Escolha a data da consulta</h4>
      <input type="date" v-model="input.date" :min="getMinDate()" :max="getMaxDate()" class="input-base" />
    </div>
    <div v-show="currentStage === 'time'">
      <h4 class="text-2xl md:text-3xl mb-2">Escolha a hora</h4>
      <div class="flex flex-wrap mx-auto md:w-2/3 xl:w-2/4 justify-between">
        <time-badge name="time" label="13:00" :value="input.time" @change="toggleTime"></time-badge>
        <time-badge name="time" label="13:40" :value="input.time" @change="toggleTime"></time-badge>
        <time-badge name="time" label="14:20" :value="input.time" @change="toggleTime"></time-badge>
        <time-badge name="time" label="15:00" :value="input.time" @change="toggleTime"></time-badge>
        <time-badge name="time" label="15:40" :value="input.time" @change="toggleTime"></time-badge>
        <time-badge name="time" label="16:20" :value="input.time" @change="toggleTime"></time-badge>
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
import Specialty from "../SelectSpecialtyComponent";
import TimeBadge from "../TimeBadgeComponent";
import addDays from "@/utils/Date";

import axios from "@/axios";

export default {
  components: {
    Specialty,
    TimeBadge,
  },
  created() {
    this.retrieveSpecialties();
  },
  data() {
    return {
      currentStage: "specialty", // specialty, date, time
      input: {
        specialty_id: 1,
        date: addDays(1)
          .toISOString()
          .substring(0, 10),
        time: "13:40",
      },
      specialties: [],
    };
  },

  methods: {
    retrieveSpecialties() {
      axios
        .get("api/specialties")
        .then((res) => {
          this.specialties = res.data.data;
        })
        .catch((err) => console.log(err));
    },
    
    toggleSpecialty(id) {
      this.input.specialty_id = id;
    },

    toggleTime(time) {
      this.input.time = time;
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

    getMaxDate() {
      return addDays(30)
        .toISOString()
        .substring(0, 10);
    },
  },
};
</script>
