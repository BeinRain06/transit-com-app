<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BasicsSelection from './components/BasicsSelection.vue'
import AskFormFeedback from './components/AskFormFeedback.vue'
import AskSheetFeedback from './components/AskSheetFeedback.vue'
import ReplyFormFeedback from './components/ReplyFormFeedBack.vue'
import ReplySheetFeedback from './components/ReplySheetFeedback.vue'
import TemplateMonthsFeedback from './components/TemplateMonthsFeedback.vue'
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

  <TemplateMonthsFeedback />
</template>

<style scoped></style>
