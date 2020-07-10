<template>
  <div class="bg-white rounded border-2 border-gray-400 p-4 text-gray-900 mb-5">
    <div class="flex justify-between text-xs">
      <p class="text-gray-600">{{ appointment.date }} {{ appointment.time }}</p>
      <p class="leading-none text-white text-xs px-2 py-1 bg-blue-600 rounded">{{ appointment.state }}</p>
    </div>
    <p class="text-2xl font-semibold">{{ appointment.patient.fullname }}</p>
    <p class="text-lg leading-tight text-gray-700">{{ appointment.description }}</p>

    <div class="flex justify-between text-sm mt-1">
      <p class="">Dr. {{ appointment.doctor.fullname }}</p>
      <a :href="'appointments/' + appointment.id" class="underline text-indigo-700 hover:text-indigo-800">Detalhes</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    appointment: {
      type: Object,
      required: true,
    },
  },
};
</script>
