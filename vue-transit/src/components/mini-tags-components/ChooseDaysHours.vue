<script setup lang="ts">
import { computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { IModelDays } from '../sub-request-queries/SubReqHumanIntegration.vue'

const modelInfosDays = defineModel()

const modelDays: ComputedRef<any> = computed(() => {
  console.log(modelInfosDays.value)
  return modelInfosDays.value
})

function confirmChange(isConfirm: boolean) {
  if (isConfirm) {
    // **disable** input tag hours_range
    // **lock** choose button
    // make appear **submit** button
  } else {
    // **enable** input tag hours_range
    // **unlock** choose button
    // make disappear **submit** button
  }
}

function openModalDays() {
  // set choose box wrap to true or false(**modalStatus**)
}

function handleSelectionDay() {
  // select atrribute day clicked (data-day-call)
}
</script>

<template>
  <div class="integration_timer w-full mt-4 mb-8">
    <ul class="days_in_week w-full my-2">
      <li class="scale_day_box w-full" :key="modelDay.id" v-for="modelDay in modelDays">
        <div id="day_box_one" class="day_box">
          <div
            class="wrap_day_choice w-full flex flex-col-reverse justify-center gap-2 sm:flex-row sm:justify-start sm:items-center"
          >
            <div class="choosed_one">
              {{ modelDay.dayLabel }} * : <span>{{ modelDay.dayCall }}</span>
            </div>
            <div class="select_day my-2">
              <button
                :id="modelDay.id"
                class="bg-black text-white rounded"
                style="padding: 3px 10px"
                @click="openModalDays"
              >
                choose
              </button>
            </div>
          </div>
          <div class="choose_day_wrap" @click="handleSelectionDay">
            <div class="day_item" data-day-call="monday">
              <div class="day_sub_item">Monday</div>
            </div>
            <div class="day_item" data-day-call="tuesday">
              <div class="day_sub_item">Tuesday</div>
            </div>
            <div class="day_item" data-day-call="wednesday">
              <div class="day_sub_item">Wednesday</div>
            </div>
            <div class="day_item" data-day-call="thursday">
              <div class="day_sub_item">Thursday</div>
            </div>
            <div class="day_item" data-day-call="friday">
              <div class="day_sub_item">Friday</div>
            </div>
            <div class="day_item">
              <div class="day_sub_item" data-day-call="saturday">Saturday</div>
            </div>
          </div>
          <div class="hours_range_wrap w-fullmy-2">
            <div class="w-full flex-col justify-center items-center gap-2 my-4">
              <h3 class="py-1">hours range</h3>
              <input
                type="text"
                class="time_range_day border border-solid border-gray-300 rounded"
                placeholder="e.g (12:00AM - 02:00 P.M)"
                v-model="modelDay.rangeHours"
                :disabled="modelDay.hoursConfirmed"
              />
              <div v-if="modelDay.hoursConfirmed" class="potential_schedule_hours">
                {{ modelDay.rangeHours }}
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="req_confirm w-full flex justify-center gap-2 sm:my-5">
      <div class="time_wrap_button w-1/2">
        <button
          id="time_btn_confirm"
          class="time_btn btn_gen_random bg-blue-900 text-white"
          @click.prevent="confirmChange(true)"
        >
          confirm
        </button>
      </div>
      <div class="time_wrap_button w-1/2">
        <button
          id="time_btn_change"
          class="time_btn btn_gen_random bg-gray-400 text-white"
          @click.prevent="confirmChange(false)"
        >
          change
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  /** day **/
  .day_box {
    width: 100%;
    margin: 1rem auto;
  }

  .choose_day_wrap {
    width: 100%;
    padding: 0.75rem 0.5rem;
    margin: 0.5rem 0;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-rows: min-content;
    gap: 0.25rem;
    border-radius: 3px;
    transition: linear 1s ease;
    @apply border border-solid border-gray-200;
  }

  .choose_day_wrap :hover:nth-child(n) {
    @apply bg-pink-200;
  }

  /** hours **/
  .hours_range_wrap input::placeholder {
    font-style: italic;
  }

  .hours_range_wrap .time_range_day {
    padding: 5px;
    margin: 0.5rem 0 1rem;
  }

  .time_btn {
    width: 100%;
    padding: 0 5px;
    font-size: calc(12px + 0.1vw);
    border-radius: 5px;
    border: 1px solid transparent;
    transition: 'all 300ms ease-in-out';
  }

  @media (min-width: 640px) {
    .time_btn {
      width: 100%;
      padding: 2px 5px;
      font-size: calc(12px + 0.18vw);
    }
  }
}
</style>
