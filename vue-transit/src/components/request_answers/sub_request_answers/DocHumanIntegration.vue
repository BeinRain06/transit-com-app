<script setup lang="ts">
import { computed } from 'vue'
import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

const dataGetIntegration = computed(() => {
  let dataFetchInRequest = {
    postComplainant: 'mechanic technician assistant',
    dptComplainant: 'maintenance',
    postEmployeeInCharge: 'manager',
    dptEmployeeInCharge: 'technical',
    toolsNessity: 'for troubleshooting motor misbehavior sounds of the engine bus **kalago CT**',
    generalMatterIdea:
      'always tend to length response feed that are neccessary for the quick advancements of my work',
    situationOccurence: 'monthly',
    arrRscInside: [
      {
        id: 'day_one',
        dayLabel: 'Day One',
        dayCall: 'tuesday',
        rangeHours: '12:00AM - 02:00 P.M'
      },
      {
        id: 'day_two',
        dayLabel: 'Day Two',
        dayCall: 'friday',
        rangeHours: '01:00PM - 02:00 P.M'
      }
    ],
    matterRecipe: {
      once: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti cum beatae eveniet repudiandae blanditiis maxime, qui minima!',
      twice:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti cum beatae eveniet repudiandae blanditiis maxime, qui minima!',
      thrice:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti cum beatae eveniet repudiandae blanditiis maxime, qui minima!'
    },
    solution: {
      trialOne:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique vero nesciunt molestias quae quibusdam! Voluptate consectetur perferendis sed. Aspernatur ab eius asperiores harum animi maxime fuga. A, architecto veritatis.',
      trialTwo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid laboriosam laborum hic est eos!'
    },
    agentIdAnalyser: '045552900',
    dptAnalyzer: 'technical assistance',
    referenceGet: '0006542865426',
    date: '11-03-24'
  }
  return dataFetchInRequest
})

const occurenceLabName = computed(() => {
  let labelValue = dataGetIntegration.value.situationOccurence

  let newLabelValue: string = ''

  switch (labelValue) {
    case 'monthly':
      newLabelValue = 'less than 03 months'
      break
    case 'quaterly':
      newLabelValue = 'more than 03 months'
      break
    case 'semestrially':
      newLabelValue = 'more than 06 months'
      break
    case 'yearly':
      newLabelValue = '01 year +'
  }

  return newLabelValue
})
</script>
<template>
  <div id="request_human_integration" class="req_integration_container">
    <div class="req_integration_content text_content">
      <div class="entrance_title w-full mb-4 flex justify-center">
        <span class="font-bold">Human Socializing</span>
      </div>
      <div class="text_secondary_title w-full mt-4 mb-2 flex justify-center items-center sm:h-16">
        <SubSecondaryTitle label="human" />
      </div>
      <!--About the two Agents-->
      <div class="about_two_agent w-full my-3 lg:my-8">
        <div class="department_concerned_people w-full">
          <ul class="inside_dpt w-full">
            <li id="your_dpt " class="dpt_structure">
              <span class="text_gen_title">Your department</span>
              <select class="select_dpt select_style text_select">
                <option class="dpt_item" :value="dataGetIntegration.dptComplainant">
                  {{ dataGetIntegration.dptComplainant }} service
                </option>
              </select>
            </li>
            <li id="peer_dpt" class="dpt_structure">
              <span class="text_gen_title">peer host department</span>
              <select class="select_dpt select_style text_select">
                <option class="dpt_item" :value="dataGetIntegration.dptEmployeeInCharge">
                  {{ dataGetIntegration.dptEmployeeInCharge }} service
                </option>
              </select>
            </li>
          </ul>
          <ul class="office_post_wrap w-full h-52 grid place-items-center my-4 sm:my-10">
            <li id="your_post" class="ofice_sandbox">
              <span class="font-semibold text-gray-500"> Your actual post in your department</span>
              <div
                class="display_post w-full h-12 bg-gray-200 px-1 rounded grid place-items-center"
              >
                <p>
                  {{ dataGetIntegration.postComplainant }}
                </p>
              </div>
            </li>
            <li id="peer_position" class="ofice_sandbox">
              <span class="text-gray-500 font-semibold"> the actual peer post rang</span>
              <div class="peer_group">
                <div class="peer_elt_position">
                  <input
                    type="checkbox"
                    id="post_employee"
                    class="check_pos"
                    :checked="dataGetIntegration.postEmployeeInCharge === 'manager' ? false : true"
                    disabled
                  />
                  <div>
                    <span>Regular Employee</span>
                  </div>
                </div>
                <div class="peer_elt_position">
                  <input
                    type="checkbox"
                    id="post_manager"
                    class="check_pos"
                    :checked="dataGetIntegration.postEmployeeInCharge === 'manager' ? true : false"
                    disabled
                  />
                  <div>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--Matter Cooked-->
      <div class="matter_cooked text_situation w-full mt-6 mb-4 sm:mt-16 sm:mb-4">
        <div class="specify_problem w-full mb-2">
          <span class="roboto-light text-blue-800"
            >Resume in 05 sentences max what is the matter between you and your peer</span
          >
          <p class="problem_on_fire">{{ dataGetIntegration.generalMatterIdea }}</p>
        </div>
        <!--Describe what is going on-->
        <div class="w-10 py-2 mt-8 mb-2">
          <span class="krub-regular-italic" style="color: rgb(192, 59, 174)">Describe</span>
        </div>

        <div class="description_details w-full px-2 py-4 mt-2 mb-4">
          <h3 class="roboto-light text-blue-800">
            Describe us in details at least 02 to 03 of these situations, and some others agents you
            may remember where in place.
          </h3>
          <div class="box_situation_wrap w-full mt-4 mb-2 sm:my-8">
            <span class="text_gen_title">Details</span>
            <div class="box_situation_ct w-full">
              <ul class="situations_list">
                <li class="situation_item w-full">
                  <div class="my-4">
                    <span class="font-semibold text-gray-500">situation 1</span>
                  </div>
                  <div class="situation_out">
                    <p class="solution_out_text">
                      {{ dataGetIntegration.matterRecipe.once }}
                    </p>
                  </div>
                </li>
                <li class="situation_item w-full">
                  <div class="my-4">
                    <span class="font-semibold text-gray-500">situation 2</span>
                  </div>
                  <div class="situation_out">
                    <p class="solution_out_text">
                      {{ dataGetIntegration.matterRecipe.twice }}
                    </p>
                  </div>
                </li>
                <li class="situation_item w-full">
                  <div class="my-4">
                    <span class="font-semibold text-gray-500">situation 3</span>
                  </div>
                  <div class="situation_out">
                    <p class="solution_out_text">
                      {{ dataGetIntegration.matterRecipe.thrice }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--Attempt to solve the problem-->
          <div class="w-10 py-2 mt-8 mb-2">
            <span class="krub-regular-italic" style="color: rgb(192, 59, 174)">Tentatives</span>
          </div>

          <div class="box_solution_wrap w-full my-8 sm:mt-16 sm:mb-10">
            <span class="roboto-light text-blue-800">Your tentatives to solve the problem(s)</span>
            <div class="box_solution_ct w-full">
              <ul class="solutions_list w-full">
                <li class="solution_item w-full">
                  <div class="my-4">
                    <span class="font-semibold">move 1</span>
                  </div>
                  <div class="solution_out">
                    <p class="solution_out_text">
                      {{ dataGetIntegration.solution.trialTwo }}
                    </p>
                  </div>
                </li>
                <li class="solution_item w-full">
                  <div class="my-4">
                    <span class="font-semibold">move 2</span>
                  </div>
                  <div class="solution_out">
                    <p class="solution_out_text">
                      {{ dataGetIntegration.solution.trialTwo }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="time_spinning_wrap my-4 sm:my-8">
            <h3 class="roboto-light text-blue-800">how many times last this uneasy situation ?</h3>
            <select class="time_spinning_choice select_style my-2" disabled>
              <option class="spinning_choice" :value="dataGetIntegration.situationOccurence">
                {{ occurenceLabName }}
              </option>
            </select>
          </div>
          <div class="free_duty_time">
            <div class="mt-12">
              <p class="block roboto-light text-blue-800">
                Specify 02 days / week with the range of hours where you may not have a lot of duty
              </p>
              <p class="italic ml-1 mt-1">
                (in case Our resources will to plan a shadow discussion with you.)
              </p>
              <!--scheduled Days and Hours-->
              <div class="integration_timer w-full mt-4 mb-8">
                <ul class="days_in_week w-full my-2">
                  <li
                    class="scale_day_box w-full"
                    :key="modelDay.id"
                    v-for="modelDay in dataGetIntegration.arrRscInside"
                  >
                    <div id="day_box_one" class="day_box">
                      <div
                        class="wrap_day_choice w-full flex flex-col-reverse justify-center gap-2 sm:flex-row sm:justify-start sm:items-center"
                      >
                        <div class="choosed_one">
                          {{ modelDay.dayLabel }} * : <span>{{ modelDay.dayCall }}</span>
                        </div>
                      </div>

                      <div class="hours_range_wrap w-fullmy-2">
                        <div class="w-full flex-col justify-center items-center gap-2 my-4">
                          <h3 class="py-1">hours range</h3>
                          <div class="potential_schedule_hours">
                            {{ modelDay.rangeHours }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Request id-->
      <div>
        <RequestOrFeedReference
          element="request"
          label="integration"
          :id-fetch="dataGetIntegration.referenceGet"
        />
      </div>
      <!--Date-->
      <div class="krub-light-italic mb-2 md:mb-4" style="font-size: calc(12px + 0.15vw)">
        <p>
          <span>Date :</span> <span class="mx-2">{{ dataGetIntegration.date }}</span>
        </p>
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

  /** integration container **/
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
    height: 4rem;
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
    @apply w-full my-4 p-2 border border-solid border-gray-300;
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
    padding: 0.5rem;
    margin: 0.25rem auto;
    @apply w-full border border-solid border-gray-300;
  }

  /** time spinning **/
  .time_spinning_choice {
    @apply bg-pink-200;
  }
}

@media (min-width: 380px) {
  .text_gen_title {
    font-size: calc(13px + 0.2vw);
  }

  .text_select {
    font-size: calc(13px + 0.15vw);
  }

  .text_content {
    font-size: calc(13px + 0.2vw);
  }

  .text_situation {
    font-size: calc(13px + 0.25vw);
  }
}

@media (min-width: 640px) {
  .text_select {
    font-size: calc(14px + 0.15vw);
  }

  .text_content {
    font-size: calc(14px + 0.2vw);
  }

  .text_situation {
    font-size: calc(15px + 0.15vw);
  }

  /** integration container **/
  .req_integration_container {
    width: 100vw;
    max-width: 960px;
    padding: 2rem 1.5rem 1rem;
  }

  .inside_dpt {
    height: 6rem;
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .inside_dpt .dpt_structure {
    @apply w-full py-2 flex flex-col items-center gap-2;
  }

  /**office post **/
  .ofice_sandbox {
    @apply w-full h-28  gap-4;
  }

  /** matter cooked **/

  .specify_problem .problem_on_fire {
    @apply w-full my-6;
  }
}
</style>
