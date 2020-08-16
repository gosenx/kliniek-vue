<template>
  <div class="bg-white shadow px-4 py-2 w-full md:max-w-sm flex">
    <img src="@/assets/svg/heart.svg" class="self-start w-12 mr-4" alt="Sthetoscope" />
    <div>
      <h3 class="md:text-xl font-semibold">{{ patient.fullname.split(" ")[0] + " " + patient.fullname.split(" ")[1] }}</h3>
      <h4>{{ patient.job_title }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    patient: {
      default: () => {},
    },
  },
  methods: {},
};
</script>
