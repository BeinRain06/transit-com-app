<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import SubSecondaryTitle from '../mini-tags-components/SubSecondaryTitle.vue'
import ModalPromptForContainer from '../modals/ModalPromptForContainer.vue'
import ChooseDaysHours from '../mini-tags-components/ChooseDaysHours.vue'
import RequestOrFeedReference from '../mini-tags-components/RequestOrFeedReference.vue'

export interface IModelDays {
  id: string
  dayLabel: string
  dayCall: string
  modalStatus: boolean
  rangeHours: string
  hoursConfirmed: boolean
}
let isSubmitted: Ref<boolean> = ref(false)

const listOneParagraghs = ref([
  'Keep watching your notification page in the app. As soon as Our resource end study your request. You will be shortly Join.',
  'Thanks you Trusting Human Integration Service!'
])

const arrInfosDays: Ref<IModelDays[]> = ref([
  {
    id: 'day_one',
    dayLabel: 'Day One',
    dayCall: '',
    modalStatus: true,
    rangeHours: '12:00AM - 02:00 P.M',
    hoursConfirmed: false
  },

  {
    id: 'day_two',
    dayLabel: 'Day Two',
    dayCall: '',
    modalStatus: true,
    rangeHours: '01:00PM - 02:00 P.M',
    hoursConfirmed: false
  }
])

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})

function handleSubmit() {
  // actions --SUBMITTION--
}

function handleEndModalContainer() {
  // actions --CLOSE MODAL CONTAINER--
}
</script>
<template>
  <div id="request_human_integration" class="req_integration_container">
    <div class="req_integration_content text_content">
      <div class="entrance_title w-full mb-4 flex justify-center">
        <span class="font-bold">Human Socializing</span>
      </div>
      <div class="text_secondary_title w-full mt-4 mb-2 justify-center items-center">
        <SubSecondaryTitle label="human" />
      </div>
      <div class="about_two_agent w-full my-3">
        <div class="department_concerned_people w-full">
          <ul class="inside_dpt w-full">
            <li id="your_dpt " class="dpt_structure">
              <span class="text_gen_title">Your department</span>
              <select class="select_dpt select_style text_select">
                <option class="dpt_item" value="human">human Integration service</option>
                <option class="dpt_item" value="transportation">transportation service</option>
                <option class="dpt_item" value="accounting">accounting service</option>
                <option class="dpt_item" value="technical">technical service</option>
                <option class="dpt_item" value="supply">supply service</option>
                <option class="dpt_item" value="law">law's regulation service</option>
              </select>
            </li>
            <li id="peer_dpt" class="dpt_structure">
              <span class="text_gen_title">peer host department</span>
              <select class="select_dpt select_style text_select">
                <option class="dpt_item" value="human">human Integration service</option>
                <option class="dpt_item" value="transportation">transportation service</option>
                <option class="dpt_item" value="accounting">accounting service</option>
                <option class="dpt_item" value="technical">technical service</option>
                <option class="dpt_item" value="supply">supply service</option>
                <option class="dpt_item" value="law">law's regulation service</option>
              </select>
            </li>
          </ul>
          <ul class="office_post_wrap w-full my-4">
            <li id="your_post" class="ofice_sandbox">
              <span> Your actual post in your department</span>
              <input id="post_office_plaintiff" class="w-full bg-gray-300 px-1 rounded" />
              <p class="display_post"></p>
            </li>
            <li id="peer_position" class="ofice_sandbox">
              <span> the actual peer post rang</span>
              <div class="peer_group">
                <div class="peer_elt_position">
                  <input type="checkbox" id="post_employee" class="check_pos" />
                  <div>
                    <span>Regular Employee</span>
                  </div>
                </div>
                <div class="peer_elt_position">
                  <input type="checkbox" id="post_manager" class="check_pos" />
                  <div>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="matter_cooked text_situation w-full my-8">
        <div class="specify_problem w-full mb-2">
          <span>Resume in 05 sentences max what is the matter between you and your peer</span>
          <textarea rows="3" columns="5" class="problem_on_fire"></textarea>
        </div>
        <div class="description_details w-full mb-2">
          <h3>
            Describe us in details at least 02 to 03 of these situations, and some others agents you
            may remember where in place.
          </h3>
          <div class="box_situation_wrap w-full mt-4 mb-2">
            <span class="text_gen_title">Details</span>
            <div class="box_situation_ct w-full">
              <ul class="situations_list">
                <li class="situation_item w-full">
                  <div class="my-2">
                    <span class="font-semibold text-gray-500">situation 1</span>
                  </div>
                  <div class="situation_out">
                    <textarea class="situation_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
                <li class="situation_item w-full">
                  <div class="my-2">
                    <span class="font-semibold text-gray-500">situation 2</span>
                  </div>
                  <div class="situation_out">
                    <textarea class="situation_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
                <li class="situation_item w-full">
                  <div class="my-2">
                    <span class="font-semibold text-gray-500">situation 3</span>
                  </div>
                  <div class="situation_out">
                    <textarea class="situation_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="box_solution_wrap w-full my-8">
            <span>Your tentatives to solve the problem(s)</span>
            <div class="box_solution_ct w-full">
              <ul class="solutions_list w-full">
                <li class="solution_item w-full">
                  <div class="my-2">
                    <span class="font-semibold">move 1</span>
                  </div>
                  <div class="solution_out">
                    <textarea class="solution_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
                <li class="solution_item w-full">
                  <div class="my-2">
                    <span class="font-semibold">move 2</span>
                  </div>
                  <div class="solution_out">
                    <textarea class="solution_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="time_spinning_wrap my-4">
            <h3>how many times last this uneasy situation ?</h3>
            <select class="time_spinning_choice select_style my-2">
              <option class="spinning_choice" value="monthly">less than 03 months</option>
              <option class="spinning_choice" value="quaterly">more than 03 months</option>
              <option class="spinning_choice" value="semestrially">more than 06 months</option>
              <option class="spinning_choice" value="yearly">01 year +</option>
            </select>
          </div>
          <div class="free_duty_time">
            <div>
              <p>
                Specify 02 days / week with the range of hours where you may not have a lot of
                duty<span class="italic ml-1"
                  >(in case Our resources will to plan a shadow discussion with you.)</span
                >
              </p>
              <ChooseDaysHours v-model="arrInfosDays" />
            </div>
          </div>
          <!--Here we are-->
          <div class="submit_board_btn w-full h-12 flex justify-center items-center">
            <button class="btn_submit" @click="handleSubmit">submit</button>
          </div>
          <div class="value_message_add my-4">
            <ModalPromptForContainer
              typeMod="ok"
              :list-paragraph="listOneParagraghs"
              :on-deeper-click="handleEndModalContainer"
            />
          </div>
        </div>
      </div>
      <div>
        <RequestOrFeedReference element="request" label="integration" :id-fetch="referenceGet" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  ul {
    list-style: none;
  }

  .select_style {
    width: 100%;
    padding: 0.25rem;
    border-radius: 3px;
  }

  .text_gen_title {
    font-size: calc(13px + 0.18vw);
  }

  .text_select {
    font-size: calc(12px + 0.25vw);
  }

  .text_content {
    font-size: calc(13px + 0.18vw);
  }

  .text_situation {
    font-size: calc(12px + 0.15vw);
  }

  /** container **/
  .req_integration_container {
    width: 100vw;
    padding: 2rem 1rem 1rem;
    margin: 0 auto;
  }

  /** about two agent **/

  .inside_dpt .dpt_structure {
    @apply w-full py-2 flex flex-col items-center gap-2;
  }

  .select_dpt {
    width: 100%;
    padding: 0.15rem 0.25rem;
    @apply text-gray-400 text-center font-semibold;
  }

  #your_dpt .select_dpt {
    @apply bg-gray-100;
  }

  #peer_dpt .select_dpt {
    @apply bg-red-100;
  }

  /**office post **/
  .ofice_sandbox {
    @apply w-full my-2 flex flex-col text-center gap-2;
  }

  .peer_group {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content;
  }

  .peer_group .peer_elt_position {
    @apply w-full text-center;
  }

  /** matter cooked **/

  .specify_problem .problem_on_fire {
    border-radius: 5px;
    @apply w-full my-4 border border-solid border-gray-300;
  }

  .situations_list,
  .solutions_list {
    width: 100%;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-rows: min-content;
    overflow-x: hidden;
  }

  .situation_item .situation_out,
  .solution_item .solution_out {
    border-radius: 5px;
    padding: 0;
    margin: 0.25rem auto;
    @apply w-full border border-solid border-gray-300;
  }

  /** time spinning **/
  .time_spinning_choice {
    @apply bg-pink-200;
  }

  /** submit **/

  .btn_submit {
    width: 100%;
    padding: 2px 5px;
    font-size: calc(12px + 0.15vw);
    border-radius: 5px;
    border: 1px solid transparent;
    transition: 'all 300ms ease-in-out';
    @apply bg-blue-300 text-white hover:bg-blue-400;
  }

  .value_message_add {
    @apply w-full flex justify-center;
  }
}
</style>
