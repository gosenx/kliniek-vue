<template>
  <div class="bg-white shadow px-4 py-2 w-full md:max-w-sm flex">
    <img src="@/assets/svg/stethoscope.svg" class="self-start w-12 mr-4" alt="Sthetoscope" />
    <div>
      <h3 class="text-xl font-semibold">{{ doctor.fullname.split(" ")[0] + " " + doctor.fullname.split(" ")[1] }}</h3>
      <h4>{{ doctor.specialty.name }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    doctor: {
      default: () => {},
    },
  },
  methods: {},
};
</script>
