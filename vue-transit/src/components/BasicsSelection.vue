<script setup lang="ts">
import { ref } from 'vue'

const services_doc = ref([
  {
    id: 'human_integration_service',
    name: 'Human Integration service'
  },
  {
    id: 'transit_service',
    name: 'transit service'
  },
  {
    id: 'manager_service',
    name: 'manager service'
  },
  {
    id: 'account_service',
    name: 'account service'
  },
  {
    id: 'maintenance_service',
    name: 'maintenance service'
  }
])

const work_posts = ref<string[]>([
  'manager',
  'supervisor',
  'agent_1',
  'agent_2',
  'agent_3',
  'agent_4'
])
</script>
<template>
  <div class="settings_service_wrapper">
    <div class="settings_service_content w-full my-2">
      <div class="service_wrapper">
        <div class="service_office">
          <div>
            <h4 class="title_stage_city">Choose a service</h4>
          </div>
          <div class="service_stage_ct">
            <div :id="innerElt.id" class="service_act_wrap" v-for="innerElt in services_doc">
              <div class="service_act">
                <span class="service_act_label"> {{ innerElt.name }} </span>
              </div>
            </div>
          </div>
          <div class="stage_btn_wrap">
            <button class="btn_stage_next">next</button>
          </div>
        </div>
        <div class="service_target">
          <div class="priority_wrap w-full flex_col_center gap-1">
            <span class="priority_title text-sm md:text-lg lg:text-xl py-2 lg:my-5">Priority</span>
            <ul class="w-full flex justify-center items-center gap-1 my-1">
              <li class="w-1/3 flex_col_center gap-1 mx-auto">
                <div id="low_prior" class="prior_item"></div>
                <div class="prior_label text-xs">low</div>
              </li>
              <li class="w-1/3 flex_col_center gap-1 mx-auto">
                <div id="med_prior" class="prior_item"></div>
                <div class="prior_label text-xs">medium</div>
              </li>
              <li class="w-1/3 flex_col_center gap-1 mx-auto">
                <div id="high_prior" class="prior_item"></div>
                <div class="prior_label text-xs">high</div>
              </li>
            </ul>
          </div>
          <div class="service_recipient_wrap w-full lg:w-4/5 my-5 mx-auto">
            <div class="recipient_info">
              <div>to :</div>
              <div class="recipient_post_wrap">
                <div class="recipient_post_ct flex_row_center">
                  <span class="post_label text-sm">manager</span>
                </div>
              </div>
            </div>
            <div class="recipient_select_wrap my-4">
              <div class="select_label_form inline-flex justify-center items-center py-4">
                <div class="text_label"><span>Pick</span></div>
                <div class="mx-2"><button class="text-sm px-2 py-1 bg-gray-200">&#62;</button></div>
              </div>
              <div class="recipient_choices_wrap">
                <div class="recipient_choices_ct">
                  <div class="recipient_choice" v-for="duty in work_posts">
                    <div class="recipient_inner_choice">
                      <span>{{ duty }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_settings_wrap w-full flex_row_center">
        <button class="btn_apply_set bg-green-400">Apply Settings</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  .flex_col_center {
    @apply flex flex-col justify-center items-center;
  }

  .flex_row_center {
    @apply flex flex-row justify-center items-center;
  }

  .settings_service_wrapper {
    width: 100vw;
    min-height: 100vh;
    padding: 0 0.5rem 1.5rem;
    margin: 0 auto;
  }

  .service_wrapper {
    height: 100%;
    @apply flex flex-col justify-center items-center w-full;
  }

  /** service office **/

  .service_office {
    width: 100%;
  }

  .title_stage_city {
    margin: 1rem;
    text-align: center;
  }

  .service_stage_ct {
    inline-size: 100%;
    margin: 0 auto;
    display: grid;
    place-content: center;
    grid-template-areas:
      'integ integ . trans trans'
      'direc direc direc direc direc'
      'acc acc . maint maint';
    grid-template-columns: 22% 22% 0 22% 22%;
    grid-auto-rows: 84px;
    gap: 5px;
  }

  .service_target {
    width: 96%;
    margin: 1rem 0;
  }

  .service_act_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    z-index: 1;
    @apply border-2 border-solid border-gray-200;
  }

  .service_act {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
    @apply text-white text-xs md:text-sm bg-blue-900 border-2 border-solid border-gray-200;
  }

  #human_integration_service.service_act_wrap {
    grid-area: integ;
  }
  #transit_service.service_act_wrap {
    grid-area: trans;
  }
  #manager_service.service_act_wrap {
    grid-area: direc;
  }
  #account_service.service_act_wrap {
    grid-area: acc;
  }
  #maintenance_service.service_act_wrap {
    grid-area: maint;
  }

  /** button next **/
  .stage_btn_wrap {
    width: 100%;
    margin: 0.75rem auto 0;
  }

  .btn_stage_next {
    width: 100%;
    padding: 0.25rem 0;
    @apply text-gray-50 bg-gray-500;
  }

  /** priority stage **/

  .priority_wrap ul {
    padding: 0.25rem 0.5rem;
    margin: 0 auto;
  }

  .prior_item {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #333;
    outline: 2px solid #fff;
    outline-offset: -2px;
  }

  #low_prior.prior_item {
    @apply bg-blue-300;
  }
  #med_prior.prior_item {
    @apply bg-red-400;
  }
  #high_prior.prior_item {
    @apply bg-yellow-300;
  }

  /** recipient **/

  .recipient_info {
    margin: 0.5rem 0;
    @apply w-full flex justify-end items-center gap-6;
  }

  .recipient_info > div {
    font-size: calc(15px + 0.3vw);
  }

  .recipient_post_wrap {
    width: 6.2rem;
    height: 70px;
    display: grid;
    place-items: center;
    border-radius: 5px;
    border: 1px solid black;
  }

  .recipient_post_ct {
    width: 94%;
    height: 94%;
    @apply text-blue-800;
    border-radius: 5px;
    border: 2px solid #ddd;
  }

  .recipient_choices_wrap {
    position: relative;
    width: 98%;
    height: 12rem;
    border-radius: 3px;
    margin: auto;
    @apply border-2 border-solid border-gray-200;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }

  .recipient_choices_ct {
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 0.5rem 0 0.75rem;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-rows: min-content;
    gap: 1rem;
    overflow-y: auto;
    scrollbar-width: 10px;
  }

  .recipient_choices_ct::-webkit-scrollbar {
    width: 4px;
  }

  .recipient_choice {
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-columns: 96%;
    place-content: center;
    text-align: center;
    border-radius: 5px;
    border: 1px solid black;
  }

  .recipient_inner_choice {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    border: 2px solid #ddd;
    @apply text-blue-800;
  }

  /** button settings **/
  .btn_settings_wrap {
    position: relative;
    top: -0.25rem;
  }

  .btn_apply_set {
    width: 96%;
    height: 100%;
    padding: 0.5rem;
    font-size: clamp(0.76rem, 0.92rem, 1rem);
    border-radius: 3px;
  }
}

@media (min-width: 460px) {
  .title_stage_city {
    margin: 1rem;
    text-align: left;
  }

  .text_label {
    font-size: calc(16px + 0.15vw);
  }

  .stage_btn_wrap {
    width: 92%;
  }

  .recipient_info {
    padding: 1.5rem 0 0.5rem;
    margin: 1rem 0;
    @apply w-full flex justify-center items-center  gap-6;
  }

  .recipient_post_wrap {
    width: 10rem;
    height: 120px;
  }

  .recipient_post_ct {
    width: 98%;
    height: 98%;
  }
}

@media (min-width: 790px) {
  .title_stage_city {
    margin: 1.5rem 1rem 2rem;
    @apply text-lg;
  }

  .settings_service_wrapper {
    padding: 1rem 0.5rem 3rem;
  }

  .stage_btn_wrap {
    margin: 1.25rem auto 0;
  }

  .service_stage_ct {
    grid-template-columns: 20% 20% 0 20% 20%;
    grid-auto-rows: 130px;
  }

  .recipient_choices_ct {
    max-width: 1045px;
    grid-auto-columns: unset;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-auto-rows: 7rem;
  }

  .btn_settings_wrap {
    position: relative;
    top: 1.25rem;
  }

  .btn_apply_set {
    width: 84%;
    height: 100%;
    border-radius: 24px;
  }
}

@media (min-width: 960px) {
  .title_stage_city {
    margin: 0 auto;
    height: 92px;
    text-align: center;
  }

  .service_wrapper {
    height: 100%;
    flex-wrap: wrap;
    @apply flex flex-row justify-center items-center w-full;
  }

  .service_office {
    width: 50%;
  }

  .service_target {
    width: 50%;
  }
}
</style>
