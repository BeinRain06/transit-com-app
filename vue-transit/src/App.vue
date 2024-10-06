<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BasicsSelection from './components/templates_quotation/BasicsSelection.vue'
import AskFormFeedback from './components/feedback_queries/AskFormFeedback.vue'
import AskSheetFeedback from './components/feedback_queries/AskSheetFeedback.vue'
import ReplyFormFeedback from './components/feedback_answers/ReplyFormFeedBack.vue'
import ReplySheetFeedback from './components/feedback_answers/ReplySheetFeedback.vue'
import TemplateMonthsFeedback from './components/feedbacks-lists/TemplateMonthsFeedback.vue'
import RequestSubmit from './components/request-queries/RequestSubmit.vue'
import HomeView from './views/HomeView.vue'
import SigningView from './views/SigningView.vue'
import FeaturesView from './views/FeaturesView.vue'
import LoadingBtnContinue from './components/loading/LoadingBtnContinue.vue'
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

  <LoadingBtnContinue />
</template>

<style scoped></style>
