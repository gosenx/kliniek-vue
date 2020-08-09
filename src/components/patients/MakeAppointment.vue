<template>
  <div id="makeAppointment" class="flex flex-col justify-between px-6 py-4 bg-gray-200">
    <div v-show="currentStage === 'specialty'">
      <div class=" mb-6 md:flex justify-between items-center">
        <h2 class="text-2xl md:text-3xl mb-4 md:mb-0">Que tipo de consulta deseja realizar?</h2>
        <div>
          <input type="text" placeholder="filtrar..." v-model="search" @keyup="filterSpecialties" class="input-base" />
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-4">
        <specialty
          name="specialty"
          @change="toggleSpecialty"
          v-for="specialty in filteredSpecialties"
          :key="specialty.id"
          :specialty="specialty"
          :value="specialty_id"
        ></specialty>
      </div>
    </div>
    <div v-show="currentStage === 'details'" class=" md:w-1/2">
      <h4 class="text-2xl md:text-3xl mb-2">Informe mais detalhes sobre a consulta</h4>
      <div class="form-group">
        <label for="date">Em que dia deseja realizar a consulta?</label>
        <input id="date" type="date" v-model="input.date" :min="getMinDate()" :max="getMaxDate()" class="input-base" />
        <p v-if="errors.invalidDate" class="text-sm font-semibold text-red-700">{{ errors.invalidDate }}</p>
      </div>
      <div>
        <label for="description">Forneça detalhes sobre seu estado de saúde...</label>
        <textarea
          id="description"
          v-model="input.description"
          cols="30"
          rows="5"
          class="mt-2 text-area-base"
          placeholder="ex: Tenho registado dores de cabeça frequentes..."
        ></textarea>
        <p v-if="errors.invalidDescription" class="text-sm font-semibold text-red-700">
          {{ errors.invalidDescription }}
        </p>
      </div>
    </div>
    <div v-show="currentStage === 'time'">
      <h4 class="text-2xl md:text-3xl mb-2">Escolha a hora</h4>
      <div v-if="hours.length > 0" class="flex flex-wrap mx-auto md:w-2/3 xl:w-2/4 justify-between">
        <time-badge
          name="time"
          v-for="time in hours"
          :key="time"
          :label="time"
          :value="input.time"
          @change="toggleTime"
        ></time-badge>
      </div>
      <div class="text-xl px-2 bg-red-300 inline-block" v-else>
        {{
          input.date == null ? "A data é inválida! Verifique o passo anterior." : "Nenhuma hora disponpivel nessa data."
        }}
      </div>
    </div>
    <div class="flex justify-end mt-10">
      <div class="w-48 btn-group">
        <button :disabled="currentStage === 'specialty'" @click="previous()">Anterior</button>
        <button :disabled="currentStage === 'time' && input.time == null" @click="next()">Próximo</button>
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
      currentStage: "specialty", // specialty, details, time
      input: {
        doctor_code: null,
        patient_code: this.$store.state.user.patient_code,
        date: null,
        description: "",
        time: null,
      },
      hours: [],
      specialties: [],
      errors: {
        invalidDate: "",
        invalidDescription: "",
      },
      specialty_id: 4,
      filteredSpecialties: this.specialties,
      search: "",
    };
  },

  methods: {
    retrieveSpecialties() {
      if (this.$store.state.specialties.length == 0) {
        axios
          .get("api/specialties")
          .then((res) => {
            this.specialties = res.data.data;
            this.filteredSpecialties = this.specialties;
            this.$store.commit("setSpecialties", res.data.data);
          })
          .catch((err) => {
            throw new Error(err);
          });
      } else {
        this.specialties = this.$store.state.specialties;
        this.filteredSpecialties = this.specialties;
      }
    },

    filterSpecialties() {
      this.filteredSpecialties = this.specialties.filter((specialty) => {
        if (this.search) {
          return (
            specialty.name.toLowerCase().includes(this.search.toLowerCase()) ||
            specialty.description.toLowerCase().includes(this.search.toLowerCase())
          );
        } else return true;
      });
    },

    makeAppointment() {
      axios
        .post("/api/patients/" + this.input.patient_code + "/appointments", this.input)
        .then(() => {
          this.input.doctor_code = null;
          this.input.date = null;
          this.input.time = null;
          this.input.description = null;
          this.currentStage = "specialty";
        })
        .catch((err) => {
          console.log(err.error);
          throw new Error(err);
        });
    },

    toggleSpecialty(id) {
      this.specialty_id = id;
    },

    toggleTime(time) {
      this.input.time = time;
    },

    previous() {
      if (this.currentStage == "time") {
        this.currentStage = "details";
      } else if (this.currentStage == "details") {
        this.currentStage = "specialty";
      }
    },

    next() {
      if (this.currentStage == "specialty") {
        this.currentStage = "details";
      } else if (this.currentStage == "details") {
        if (!this.input.date || !this.input.description) {
          if (!this.input.date) {
            this.errors.invalidDate = "Preencha o campo de data.";
          } else this.errors.invalidDate = null;

          if (!this.input.description) {
            this.errors.invalidDescription = "Preencha o campo de descrição.";
          } else this.errors.invalidDescription = null;
        } else {
          this.getAvailableDoctorAndHisFreeHours();
          this.currentStage = "time";
        }
      } else if (this.currentStage == "time") {
        this.makeAppointment();
      }
    },

    getAvailableDoctorAndHisFreeHours() {
      axios
        .get("/api/specialties/" + this.specialty_id + "/doctors?date=" + this.input.date + "&random=true")
        .then((res) => {
          this.hours = res.data.hours;
          this.input.doctor_code = res.data.certification_code;
        })
        .catch((err) => {
          this.hours = [];
          throw new Error(err);
        });
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

<style>
#makeAppointment {
  min-height: 250px;
}
</style>
