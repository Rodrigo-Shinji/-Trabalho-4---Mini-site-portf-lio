<script setup>
import Navbar from "./components/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<template>
  <div class="min-h-screen bg-[#2c2e2c] bg">
    <Navbar />
    <div class="container mx-auto px-4 py-6">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
