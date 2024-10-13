<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoadingBtnContinue from './components/loading/LoadingBtnContinue.vue'
import SubReqFuelOrOil from './components/sub-request-queries/SubReqFuelOrOil.vue'
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

  <!-- <RouterView /> -->

  <SubReqFuelOrOil />
</template>

<style scoped></style>
