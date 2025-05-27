<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-[#1E1B2E] px-4 rounded-xl"
  >
    <h1
      class="text-5xl md:text-6xl font-bold text-purple-400 drop-shadow-lg mb-4"
    >
      Bem-vindo ao meu Portfólio
    </h1>
    <p class="text-lg md:text-xl text-gray-300 text-center max-w-xl">
      Aqui você encontrará meus projetos, habilidades e um pouco sobre mim.
      Explore à vontade!
    </p>
  </div>

  <br />

  <div class="px-6 py-12 bg-[#1E1B2E] text-white rounded-xl">
    <h1
      class="text-3xl md:text-4xl font-bold text-center uppercase mb-12 text-purple-400"
    >
      Projetos
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        class="bg-white/5 p-6 rounded-2xl shadow-lg border border-purple-500 hover:scale-105 transition-transform will-change-transform"
      >
        <img :src="fgoImg" alt="Fate-API" class="rounded-lg mb-4" />
        <h2 class="text-xl font-semibold text-purple-400 mb-2">
          Projeto API - Fate Grand Order
        </h2>
        <p class="text-sm text-gray-300 mb-4">
          O projeto foi desenvolvido utilizando a API da Atlas Academy, com o
          propósito de construir um front-end que exibe as informações de
          maneira clara, combinando elementos visuais e textuais para uma melhor
          experiência do usuário.
        </p>
        <div class="flex justify-between">
          <a
            href="https://github.com/Rodrigo-Shinji/Desenvolvimento-de-uma-Aplica-o-Front-End-com-API-Externa.git"
            class="text-purple-400 hover:underline"
            >Repositório</a
          >
        </div>
      </div>

      <div
        class="bg-white/5 p-6 rounded-2xl shadow-lg border border-purple-500 hover:scale-105 transition-transform will-change-transform"
      >
        <img :src="crudImg" alt="CRUD-Img" class="rounded-lg mb-4" />
        <h2 class="text-xl font-semibold text-purple-400 mb-2">
          CRUD - Lista de Tarefas
        </h2>
        <p class="text-sm text-gray-300 mb-4">
          Este projeto CRUD, desenvolvido em PHP, permite a criação, leitura,
          atualização e exclusão de registros em um banco de dados. Com uma
          interface simples e funcional, o sistema facilita o gerenciamento de
          dados de forma eficiente e segura.
        </p>
        <div class="flex justify-between">
          <a
            href="https://github.com/Rodrigo-Shinji/Lista-de-Tarefas-CRUD.git"
            class="text-purple-400 hover:underline"
            >Repositório</a
          >
        </div>
      </div>

      <div
        class="bg-white/5 p-6 rounded-2xl shadow-lg border border-purple-500 hover:scale-105 transition-transform will-change-transform"
      >
        <img :src="finImg" alt="Fin-System" class="rounded-lg mb-4" />
        <h2 class="text-xl font-semibold text-purple-400 mb-2">
          Sistema Financeiro
        </h2>
        <p class="text-sm text-gray-300 mb-4">
          Sistema financeiro desenvolvido em C# para o gerenciamento de
          transações, controle de receitas e despesas, além da geração de
          relatórios financeiros, proporcionando maior organização e eficiência
          no acompanhamento das finanças.
        </p>
        <div class="flex justify-between">
          <a
            href="https://github.com/Rodrigo-Shinji/Projeto-Sistema-Financeiro-PDS.git"
            class="text-purple-400 hover:underline"
            >Repositório</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import fgoImg from "@/assets/imgs/fgo.jpg";
import crudImg from "@/assets/imgs/crud.png";
import finImg from "@/assets/imgs/financa.jpg";
</script>
