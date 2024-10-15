<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoadingBtnContinue from './components/loading/LoadingBtnContinue.vue'
import SubReqFuelOrOil from './components/sub-request-queries/SubReqFuelOrOil.vue'
import SubEngineRepairComponents from './components/sub-request-queries/SubEngineRepairComponents.vue'
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

  <SubEngineRepairComponents />
</template>

<style scoped></style>
