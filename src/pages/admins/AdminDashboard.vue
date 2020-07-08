<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-header></dashboard-header>
    <main class="mt-12 px-4 container mx-auto">
      <h1 class="text-6xl">Admin Dashboard</h1>
    </main>
    <footer class="mt-20 mb-4 text-gray-500 text-center">&copy; GosenX Labs</footer>
  </div>
</template>

<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";

export default {
  components: {
    DashboardHeader,
  },
};
</script>
