<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <main class="mt-12 px-4 container mx-auto">
      <list-appointments :appointments="appointments"></list-appointments>
      <div class="mt-5">
        <div class="w-64 mb-2">
          <input type="text" placeholder="filtrar..." class="input-base" />
        </div>
        <table class="table-base table-auto">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Médico</th>
              <th>Paciente</th>
              <th>Peso</th>
              <th>Data e Hora</th>
              <th>Estado</th>
              <th>Acção</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Adrask Rosiv</td>
              <td>Mabermuda Mabombo</td>
              <td>62.7 kg</td>
              <td>10/08/2020 15:00</td>
              <td>Completo</td>
              <td>Detalhes</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Manuela Mariamo</td>
              <td>Tiago Fonseca Liert</td>
              <td>42.7 kg</td>
              <td>15/08/2020 13:40</td>
              <td>Completo</td>
              <td>Detalhes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
    <footer class="mt-20 mb-4 text-gray-500 text-center">&copy; GosenX Labs</footer>
  </div>
</template>

<script>
import axios from "@/axios";

import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import ListAppointments from "@/components/ListAppointmentsComponent.vue";

export default {
  components: {
    ListAppointments,
    DashboardHeader,
  },

  created() {
    this.retriveAppointments();
  },

  data() {
    return {
      appointments: [],
    };
  },
  methods: {
    retriveAppointments() {
      axios
        .get(`api/doctors/${this.$store.state.user.certification_code}/appointments`)
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
