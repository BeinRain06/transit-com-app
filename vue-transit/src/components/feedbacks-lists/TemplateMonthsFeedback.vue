<script setup lang="ts">
import MonthsFeedback from './MonthsFeedback.vue'
import { useAskFeedStore } from '@/stores/ask-feed-store'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

const monthsFeedback = computed(() => {
  const useAskFeed = useAskFeedStore()
  let monthsFeed = useAskFeed.monthsConsultFeed
  return monthsFeed
})
</script>
<template>
  <main id="template_months_feed">
    <div class="template_months_container w-screen">
      <div class="template_months_content">
        <ul class="nav_presentation w-full flex_col_center mb-4">
          <li class="nav_title w-full h-12 flex flex-col justify-start items-center">
            <h2 class="title_premium">FeedBacks</h2>
          </li>
          <li class="w-full">
            <div class="nav_ct_wrap">
              <div class="navbar_item">
                <h3 id="current_month" class="label_month">current month</h3>
              </div>
              <div class="navbar_item">
                <h3 id="last_month" class="label_month">last month</h3>
              </div>
              <div class="navbar_item">
                <h3 id="past_three_month" class="label_month">past three months</h3>
              </div>
              <div class="bar_switch">
                <div class="bar_slide"></div>
              </div>
            </div>
          </li>
          <li class="w-full"><hr class="nav_horizontal_line" /></li>
        </ul>
        <MonthsFeedback v-model="monthsFeedback" />
      </div>
    </div>
  </main>
</template>
<style scoped>
@media (min-width: 180px) {
  ul {
    list-style: none;
  }

  .title_premium {
    font-size: calc(15px + 0.3vw);
  }

  .flex_row_center {
    @apply flex justify-center items-center;
  }

  .flex_col_center {
    @apply flex flex-col justify-center items-center;
  }

  .template_months_content {
    width: 100%;
    min-height: 100vh;
    margin: 0.5rem 0 1rem;
  }

  .nav_presentation {
    position: relative;
    padding: 0.25rem 0.25rem 1.5rem;
  }

  .nav_horizontal_line {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 92%;
    height: 2px;
    transform: translateX(-50%);
    box-shadow: -2px -1px 4px #a6caec;
  }

  .nav_ct_wrap {
    font-size: 1rem;
    position: relative;
    width: 100%;
    padding: 0.25rem 0.35rem;
    display: grid;
    grid-template-columns: repeat(3, 32%);
    grid-template-rows: 2.5rem;
    place-content: center;
  }

  .label_month {
    font-size: 0.65em;
    font-size: clamp(12px, 0.82rem, 1rem);
    text-align: center;
  }

  .nav_ct_wrap .navbar_item {
    width: 100%;
    display: grid;
    place-items: center;
  }

  .nav_ct_wrap .bar_switch {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    outline: none;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    z-index: 0;
  }

  .bar_switch .bar_slide {
    position: relative;
    bottom: 2px;
    left: 50%;
    width: 30%;
    height: 2px;
    margin-left: calc(32%);
    transform: translateX(-50%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: rgb(212, 90, 90);
    box-shadow: 0px 2px 5px rgb(33, 36, 51);
    transition: all 0.3s ease;
    z-index: 3;
  }
}
</style>
