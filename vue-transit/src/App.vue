<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BasicsSelection from './components/BasicsSelection.vue'
import AskFeedback from './components/AskFeedback.vue'
import ReplyFeedback from './components/ReplyFeedBack.vue'
import HomeView from './views/HomeView.vue'
import SigningView from './views/SigningView.vue'
import FeaturesView from './views/FeaturesView.vue'
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

  <ReplyFeedback />
</template>

<style scoped></style>
