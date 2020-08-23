<template>
  <div class="bg-indigo-900 min-w-full h-12">
    <div class="px-4 container mx-auto flex justify-between items-center">
      <section class="flex items-center">
        <a href="/dashboard" class="">
          <div class="flex items-center">
            <img class="mr-2 w-12" src="@/assets/svg/care.svg" alt="Kliniek Logo" />
            <h1 class="tracking-wider text-2xl font-family-baloo font-semibold text-gray-200">Kliniek</h1>
          </div>
        </a>
      </section>
      <ul class="flex justify-between text-sm md:text-lg font-medium text-gray-100 relative">
        <li
          id="profile"
          class="cursor-pointer -mt-1 ml-4 bg-indigo-500 hover:bg-indigo-600"
          @click="toogleDropdown"
          v-on-clickaway="away"
        ></li>
        <nav v-show="dropdownActive" class="w-56 flex flex-col absolute top-0 right-0 mt-10 bg-white shadow border">
          <a href="#" @click="logout">
            <span class="text-red-500">Logout</span>
            <img src="@/assets/svg/log-out.svg" alt="Logout" />
          </a>
        </nav>
      </ul>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  data() {
    return {
      dropdownActive: false,
    };
  },
  methods: {
    toogleDropdown() {
      if (this.dropdownActive) {
        this.dropdownActive = false;
      } else this.dropdownActive = true;
    },
    away() {
      if (this.dropdownActive) {
        this.dropdownActive = false;
      }
    },
    logout() {
      this.$store.dispatch("logout").then(() => router.push("/login"));
    },
  },
};
</script>

<style scoped>
#profile {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
#container {
  width: 90%;
}
nav > a {
  @apply flex justify-between items-center py-2 leading-none px-4 font-normal text-gray-700;
}
nav > a:hover {
  @apply bg-indigo-200;
}
</style>
