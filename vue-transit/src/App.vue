<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/navbar/NavbarView.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

  </header> -->

  <header>
    <Navbar />
  </header>
  <main class="main_container"></main>

  <!-- <RouterView /> -->

  <HomeView />
</template>

<style scoped></style>
