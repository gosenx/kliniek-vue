<template>
  <main class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <div class="container mx-auto mt-2 flex justify-end">Bem vindo! {{ this.$store.state.user.fullname }}</div>

    <div class="container mt-10 mb-4 mx-auto">
      <nav class="flex mb-4">
        <a class="navigation-link" :class="page == 'home' ? 'active' : ''" @click="page = 'home'" href="#">Home</a>
        <a class="navigation-link" :class="page == 'historico' ? 'active' : ''" @click="showHistory" href="#">
          Histórico
        </a>
        <a class="navigation-link" :class="page == 'perfil' ? 'active' : ''" @click="showProfile" href="#">
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
        <div v-if="completedAppointments.length > 0">
          <p
            v-for="appoint in completedAppointments"
            :key="appoint.id"
            class="text-gray-700 bg-gray-300 px-2 py-1 border-b border-gray-400"
          >
            No dia <span class="text-gray-800">{{ appoint.date }}</span> pelas
            <span class="text-gray-800">{{ appoint.time }}</span> consultou o/a especialista em
            <span>{{ appoint.doctor.specialty.name }}</span>
            <b> dr(a). {{ appoint.doctor.fullname }}</b
            >.
            <a href="#" class="text-blue-700 underline">Detalhes</a>
          </p>
        </div>
        <div v-else>
          <h3 class="text-2xl text-gray-600">Você ainda não possuí nenhuma consulta terminada.</h3>
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
            <table v-if="allContacts.length > 0" class="w-full table-auto">
              <tbody>
                <tr v-for="phone in allContacts" :key="phone.id">
                  <td>{{ phone.phone_number }}</td>
                  <td>{{ phone.type }}</td>
                  <td><a href="#" @click="deleteContact(phone.id)" class="text-red-700">Remover</a></td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <h3 class="text-2xl text-gray-600">Você ainda não adicionou nenhum contacto.</h3>
            </div>
          </div>

          <form action="" class="mt-4">
            <div v-if="profileBag.contactErrors.length > 0">
              <p class="text-red-700">{{ profileBag.contactErrors[0] }}</p>
            </div>
            <div v-if="profileBag.contactSuccess">
              <p class="text-green-600">{{ profileBag.contactSuccess }}</p>
            </div>

            <div class="form-group">
              <label for="contact">Tipo</label>
              <select v-model="contact.type" class="input-normal" name="contact">
                <option value="primary">Primário</option>
                <option value="secondary" selected>Secundário</option>
              </select>
            </div>

            <div class="form-group">
              <label for="contact">Contacto</label>
              <input
                class="input-normal"
                v-model="contact.phone_number"
                required
                type="number"
                min="820111111"
                placeholder="849388793"
                id="contat"
              />
            </div>

            <div class="w-32">
              <button class="btn-secondary" @click.prevent="createNewContact()">Adicionar</button>
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
      contact: {},
      allContacts: [],
      profileBag: {
        contactErrors: [],
        contactSuccess: undefined,
      },
      completedAppointments: [],
    };
  },

  methods: {
    retriveAppointments() {
      axios
        .get(`api/patients/${this.user.patient_code}/appointments?state=scheduled`)
        .then((res) => {
          this.appointments = res.data;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },

    showHistory() {
      this.page = "historico";
      this.retrieveCompletedAppointments();
    },

    showProfile() {
      this.page = "perfil";
      this.retrieveContacts();
    },

    retrieveContacts() {
      if (this.allContacts.length == 0) {
        axios
          .get(`api/patients/${this.user.patient_code}/contacts`)
          .then((res) => {
            this.allContacts = res.data.data;
          })
          .catch((err) => {
            throw new Error(err);
          });
      }
    },

    retrieveCompletedAppointments() {
      if (this.completedAppointments.length == 0) {
        axios
          .get(`api/patients/${this.user.patient_code}/appointments?state=complete`)
          .then((res) => {
            this.completedAppointments = res.data;
          })
          .catch((err) => {
            throw new Error(err);
          });
      }
    },

    createNewContact() {
      axios
        .post(`api/patients/${this.user.patient_code}/contacts`, this.contact)
        .then((res) => {
          this.allContacts.push(res.data.data);
          this.profileBag.contactErrors = [];
          this.profileBag.contactSuccess = "Contacto adicionado com sucesso.";
        })
        .catch((err) => {
          this.profileBag.contactErrors.push("O número deve conter 9 caracteres.");
          this.profileBag.contactSuccess = undefined;
          throw new Error(err);
        });
    },

    deleteContact(id) {
      axios
        .delete(`api/patients/${this.user.patient_code}/contacts/${id}`)
        .then(() => {
          this.allContacts = this.allContacts.filter((item) => item.id !== id);
        })
        .catch((err) => console.log({ err }));
    },
  },
};
</script>
