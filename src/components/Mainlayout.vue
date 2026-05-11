<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";
</script>

<style></style>
