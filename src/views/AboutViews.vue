<template>
  <section
    class="min-h-screen bg-[#1E1B2E] text-white px-6 py-12 rounded-xl max-w-5xl mx-auto"
  >
    <h2 class="text-4xl font-bold mb-12 text-purple-400 text-center">
      Sobre mim
    </h2>

    <div class="flex flex-col md:flex-row items-center md:items-start gap-12">
      <div class="flex-shrink-0">
        <img
          :src="myImg"
          alt="Rodrigo"
          class="rounded-full w-48 h-48 object-cover border-4 border-purple-500 shadow-lg mx-auto md:mx-0"
        />
      </div>

      <div class="max-w-xl">
        <p class="text-gray-300 mb-8 leading-relaxed text-center md:text-left">
          Sou um entusiasta de tecnologia e apaixonado por jogos, sempre em
          busca de novos conhecimentos. Formado em Design Gráfico, desenvolvi um
          olhar criativo que complementa minha atuação na área de tecnologia.
          Com grande interesse por programação, decidi migrar de vez para essa
          área, onde venho me aperfeiçoando continuamente e aplicando minhas
          habilidades tanto no design quanto no desenvolvimento de soluções
          criativas e funcionais.
        </p>

        <div class="relative border-l-4 border-purple-500 pl-6 space-y-8 mb-12">
          <div>
            <time class="text-purple-300 font-semibold text-sm"
              >2020 - 2022</time
            >
            <h3 class="text-xl font-semibold text-purple-400">
              Graduação em Design Gráfico
            </h3>
            <p class="text-gray-300">
              Univem – Conclusão com ênfase em criação de artes visuais voltadas
              para marketing.
            </p>
          </div>

          <div>
            <time class="text-purple-300 font-semibold text-sm"
              >2024 - Atual</time
            >
            <h3 class="text-xl font-semibold text-purple-400">
              Graduação em Análise e Desenvolvimento de Sistemas
            </h3>
            <p class="text-gray-300">
              Unimar – Cursando graduação com foco em programação e
              desenvolvimento de software.
            </p>
          </div>
        </div>

        <!-- Habilidades -->
        <div>
          <h3 class="text-2xl font-semibold text-purple-400 mb-4">
            Habilidades
          </h3>
          <ul class="list-disc list-inside text-gray-300 space-y-1">
            <li>Desenvolvimento web com Vue.js e Tailwind CSS</li>
            <li>Criação de interfaces responsivas e modernas</li>
            <li>Integração com APIs REST</li>
            <li>Conhecimento em C# e aplicações financeiras</li>
            <li>Design gráfico focado em marketing digital</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import myImg from "@/assets/imgs/rodrigo.png";
</script>
