<template>
  <section
    class="min-h-screen bg-[#1E1B2E] text-white px-6 py-12 rounded-xl flex flex-col items-center justify-center"
  >
    <div class="w-full max-w-2xl">
      <h2 class="text-4xl font-bold text-center text-purple-400 mb-12">
        Contato
      </h2>

      <form
        class="space-y-6 bg-[#2A2A40] p-6 rounded-xl shadow-lg border border-purple-500"
      >
        <div>
          <label class="block mb-1 text-purple-300 font-medium">Nome</label>
          <input
            type="text"
            placeholder="nome"
            class="w-full p-3 rounded-lg bg-[#1E1B2E] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label class="block mb-1 text-purple-300 font-medium">Email</label>
          <input
            type="email"
            placeholder="email"
            class="w-full p-3 rounded-lg bg-[#1E1B2E] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label class="block mb-1 text-purple-300 font-medium">Mensagem</label>
          <textarea
            rows="5"
            placeholder="Digite sua mensagem..."
            class="w-full p-3 rounded-lg bg-[#1E1B2E] text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg text-white font-semibold w-full"
        >
          Enviar Mensagem
        </button>
      </form>

      <div class="mt-12 text-center">
        <h3 class="text-2xl font-semibold text-purple-400 mb-6">
          Minhas redes
        </h3>
        <div class="flex flex-col gap-4 items-center">
          <a
            href="https://github.com/Rodrigo-Shinji"
            target="_blank"
            class="flex items-center gap-3 hover:text-purple-300 transition-colors"
          >
            <i class="fab fa-github text-xl"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-yamashita-30b4b3312/"
            target="_blank"
            class="flex items-center gap-3 hover:text-purple-300 transition-colors"
          >
            <i class="fab fa-linkedin text-xl"></i> LinkedIn
          </a>
          <a
            href="rodrigoyamashita02@gmail.com"
            class="flex items-center gap-3 hover:text-purple-300 transition-colors"
          >
            <i class="fas fa-envelope text-xl"></i> Email
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
