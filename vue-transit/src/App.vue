<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoadingBtnContinue from './components/loading/LoadingBtnContinue.vue'
import SubReqFuelOrOil from './components/sub-request-queries/SubReqFuelOrOil.vue'
import SubEngineRepairComponents from './components/sub-request-queries/SubEngineRepairComponents.vue'
import SubReqMaintenanceTools from './components/sub-request-queries/SubReqMaintenanceTools.vue'
import SubReqHumanIntegration from './components/sub-request-queries/SubReqHumanIntegration.vue'
import SubReqPurchaseOrder from './components/sub-request-queries/SubReqPurchaseOrder.vue'
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

  <SubReqHumanIntegration />
</template>

<style scoped></style>
