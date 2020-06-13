<template>
  <div class="h-screen">
    <div class="shadow-sm">
      <header
        class="flex w-11/12 md:w-10/12 mx-auto h-16 items-center justify-between text-xl text-gray-900 font-family-baloo font-medium"
      >
        <div class="flex items-center">
          <img class="mr-2 w-12" src="@/assets/svg/care.svg" alt="Kliniek Logo" />
          <h1 class="tracking-wider text-2xl font-semibold text-indigo-500">Kliniek</h1>
        </div>
        <nav class="">
          <router-link class="hidden md:inline pr-8" to="/example">Example</router-link>
          <router-link class="px-3 py-1 bg-indigo-500 text-white uppercase text-lg rounded" to="/login"
            >Entrar</router-link
          >
        </nav>
      </header>
    </div>

    <div class="w-full h-64 md:text-center bg-red-600 font-family-baloo p-4">
      <p class="text-white font-semibold leading-none text-3xl mb-4 md:text-5xl mt-10">
        Nunca foi tão fácil <br class="hidden md:inline" />
        marcar <span class="text-yellow-300">consultas</span>
      </p>
      <p class="mb-4 text-gray-200 text-lg">Já imaginou ter o seu histórico médico na palma da sua mão?</p>
      <router-link
        to="/signup"
        class="rounded bg-indigo-700 font-medium tracking-wide text-white text-center text-xl py-1 px-4"
        >Criar Conta &raquo;</router-link
      >
    </div>

    <div class="py-4 tracking-wider font-family-baloo mt-8">
      <div class="flex flex-col-reverse md:flex-row justify-between h-full w-11/12 m-auto">
        <div class="w-full h-full md:w-1/2 mt-16 md:mt-0 md:mr-5">
          <h2 class="text-5xl font-bold leading-none uppercase text-gray-800 mb-5">Conheça os serviços</h2>
          <ul class="text-2xl list-disc leading-7 tracking-wider ml-6">
            <li class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li class="">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ul>
        </div>
        <div class="w-full h-full md:w-1/2 bg-gray-700">
          <img src="@/assets/img/doctor-red.jpg" alt="Doutor com estetoscopio" />
        </div>
      </div>
    </div>

    <footer class="text-gray-500 mt-10 font-family-baloo text-center">
      <hr />
      <p class="py-3">Todos direitos reservados! <span class="font-bold tracking-wider">Kliniek &copy; 2020</span></p>
    </footer>
  </div>
</template>

<script></script>
