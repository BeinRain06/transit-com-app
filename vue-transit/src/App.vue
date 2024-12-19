<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/navbar/NavbarView.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="main_container"></main>

  <!-- <RouterView /> -->
</template>

<style scoped></style>
