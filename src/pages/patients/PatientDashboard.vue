<template>
  <main class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>

    <div class="container mt-10 mb-4 mx-auto">
      <nav class="flex mb-4">
        <a class="navigation-link" :class="page == 'home' ? 'active' : ''" @click="page = 'home'" href="#">Home</a>
        <a class="navigation-link" :class="page == 'historico' ? 'active' : ''" @click="showHistory" href="#">
          Histórico
        </a>
        <a class="navigation-link" :class="page == 'perfil' ? 'active' : ''" @click="page = 'perfil'" href="#">
          Perfil
        </a>
      </nav>
    </div>

    <!-- Home Down -->
    <div v-if="page == 'home'" class="container mx-auto">
      <list-appointments :appointments="appointments"></list-appointments>
      <div class="my-5">
        <make-appointment></make-appointment>
      </div>
    </div>

    <!-- History down -->
    <div v-if="page == 'historico'" class="container mx-auto">
      <div class="md:w-3/5">
        <div class="">
          <p class="text-gray-700 bg-gray-300 px-2 py-1 border-b border-gray-400">
            No dia <span class="text-gray-800">22/02/2019</span> pelas
            <span class="text-gray-800">14:10</span> consultou o
            <span class="text-">otorrinolarringologista</span>
            <b> Fernando Dias Lopes</b>.
            <a href="#" class="text-blue-700 underline">Detalhes</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Profile down -->
    <div v-if="page == 'perfil'" class="container mx-auto">
      <h4>Bem vindo, {{ user.fullname }}!</h4>

      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl">Contactos</h2>
          <hr />

          <div class="mt-4">
            <table class="w-full table-auto">
              <tbody>
                <tr>
                  <td>845673452</td>
                  <td><a href="#" class="text-red-700">Remover</a></td>
                </tr>
                <tr>
                  <td>845673452</td>
                  <td><a href="#" class="text-red-700">Remover</a></td>
                </tr>
                <tr>
                  <td>845673452</td>
                  <td><a href="#" class="text-red-700">Remover</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <form action="" class="mt-4">
            <div class="form-group">
              <label for="contact">Tipo</label>
              <select class="input-normal" name="contact">
                <option value="primary">Primário</option>
                <option value="secondary" selected>Secundário</option>
              </select>
            </div>

            <div class="form-group">
              <label for="contact">Contacto</label>
              <input class="input-normal" required type="number" min="820111111" placeholder="849388793" id="contat" />
            </div>

            <div class="w-32">
              <button class="btn-secondary">Adicionar</button>
            </div>
          </form>
        </div>

        <div>
          <h2 class="text-2xl">Trocar Senha</h2>
          <hr />

          <form action="" class="mt-4">
            <div class="form-group">
              <label for="password">Senha</label>
              <input class="input-normal" required type="password" placeholder="***************" id="password" />
            </div>

            <div class="form-group">
              <label for="c_password">Confirmar Senha</label>
              <input class="input-normal" required type="password" id="c_password" placeholder="***************" />
            </div>

            <div class="w-32">
              <button class="btn-secondary">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <footer class="mt-20 mb-4 text-gray-500 text-center">&copy; GosenX Labs</footer>
  </main>
</template>

<script>
import axios from "@/axios";
import { mapState } from "vuex";

import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import ListAppointments from "@/components/ListAppointmentsComponent.vue";
import MakeAppointment from "@/components/patients/MakeAppointment.vue";

export default {
  components: {
    ListAppointments,
    DashboardHeader,
    MakeAppointment,
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {
    this.retriveAppointments();
  },
  data() {
    return {
      appointments: [],
      page: "home",
      pastAppointments: [],
    };
  },
  methods: {
    retriveAppointments() {
      axios
        .get(`api/patients/${this.user.patient_code}/appointments`)
        .then((res) => (this.appointments = res.data))
        .catch((err) => console.log(err));
    },
    showHistory() {
      this.page = "historico";
    },
  },
};
</script>
