<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import SubReqUnpaidBonus from './components/request-queries/sub-request-queries/SubReqUnpaidBonus.vue'
import DocUnpaidBonus from './components/request_answers/sub_request_answers/DocUnpaidBonus.vue'
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

  <DocUnpaidBonus />
</template>

<style scoped></style>
