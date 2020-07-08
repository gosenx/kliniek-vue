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
      <ul class="flex justify-between text-sm md:text-lg font-medium text-gray-100">
        <li class=""><a href="#" class="">Histórico</a></li>
        <li class="ml-4"><a href="#" class="">Consultas</a></li>
        <li id="profile" class="-mt-1 ml-4 bg-indigo-500"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
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
</style>
