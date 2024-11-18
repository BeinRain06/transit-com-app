<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import SubReqSalaryAdvance from './components/request-queries/sub-request-queries/SubReqSalaryAdvance.vue'
import SubReqPurchaseOrder from './components/request-queries/sub-request-queries/SubReqPurchaseOrder.vue'

import SubEngineRepairComponents from './components/request-queries/sub-request-queries/SubEngineRepairComponents.vue'

import DocFuelOrOil from './components/request_answers/sub_request_answers/DocFuelOrOil.vue'
import DocEngineRepairComponents from './components/request_answers/sub_request_answers/DocEngineRepairComponents.vue'
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

  <DocEngineRepairComponents />
</template>

<style scoped></style>
