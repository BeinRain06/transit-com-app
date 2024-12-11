<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import DocPurchaseOrder from './components/request_answers/sub_request_answers/DocPurchaseOrder.vue'
import DocSalaryAdvance from './components/request_answers/sub_request_answers/DocSalaryAdvance.vue'
import DocUnpaidBonus from './components/request_answers/sub_request_answers/DocUnpaidBonus.vue'
import IndividualStats from './components/stats/IndividualStats.vue'
import GeneralStats from './components/stats/GeneralStats.vue'
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

  <!-- <RouterView /> -->

  <HomeView />
</template>

<style scoped></style>
