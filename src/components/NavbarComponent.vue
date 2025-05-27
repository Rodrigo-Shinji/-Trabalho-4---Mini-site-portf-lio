<template>
  <nav
    class="bg-purple-700 text-white py-4 px-6 flex justify-between items-center shadow-md"
  >
    <h1 class="text-xl font-bold uppercase tracking-wider">
      Rodrigo Shinji Yamashita
    </h1>

    <ul class="flex gap-6">
      <li>
        <router-link
          to="/"
          class="hover:text-purple-300 transition-colors duration-200"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="hover:text-purple-300 transition-colors duration-200"
        >
          Sobre
        </router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          class="hover:text-purple-300 transition-colors duration-200"
        >
          Contatos
        </router-link>
      </li>
    </ul>
  </nav>
</template>
