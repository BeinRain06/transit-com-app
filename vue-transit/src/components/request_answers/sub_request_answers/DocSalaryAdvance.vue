<script setup lang="ts">
import { computed } from 'vue'
import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

const dataGetAdvance = computed(() => {
  let dataFetchInRequest = {
    dpt: 'supply resources',
    nameEmployee: 'Essomba Richard',
    post: 'manager supply department',
    reason: "to fund my children's scholarship",
    amountOfMoney: '330',
    refundProcess: 'i want my future Salary to be cut by $110 dollars over the 03 coming months',
    deadline: '14/09/2025',
    referenceGet: '046780233945',
    date: '12-03-24'
  }
  return dataFetchInRequest
})
</script>
<template>
  <div id="req_salary_advance" class="salary_advance_container">
    <div class="salary_advance_content">
      <div class="entrance_title w-full mb-4 flex justify-center">
        <span class="font-bold">Salary suitcase</span>
      </div>
      <div class="text_secondary_title w-full mt-4 mb-2 flex justify-center items-center sm:h-10">
        <SubSecondaryTitle label="salary" />
      </div>
      <!--HERE WE ARE-->
      <div class="details_worker w-full">
        <div class="get_formal_information">
          <div class="Personal infos h-10 w-full px-2 justify-start">
            <span class="text_size_legend crete-round-regular-italic">Personal infos </span>
          </div>
          <div class="fieldset">
            <div id="dpt_field" class="formal_info_item">
              <span for="department" class="info_label roboto-light"> department </span>
              <p class="info_input">{{ dataGetAdvance.dpt }}</p>
            </div>
            <div id="name_field" class="formal_info_item">
              <span for="name" class="info_label roboto-light"> Name </span>
              <p class="info_input">{{ dataGetAdvance.nameEmployee }}</p>
            </div>
            <div id="post_field" class="formal_info_item">
              <span for="post" class="info_label roboto-light"> office post </span>
              <p class="info_input">{{ dataGetAdvance.post }}</p>
            </div>
            <div id="reason_field" class="formal_info_item">
              <span for="reason" class="info_label roboto-light">
                reason why you want an advancement
              </span>
              <p class="info_input">{{ dataGetAdvance.reason }}</p>
            </div>
          </div>
        </div>
      </div>
      <!--HERE WE ARE NEXT-->
      <div class="details_money_management w-full md:py-8">
        <div
          class="amount_to_release w-full mt-8 mb-4 flex flex-col justify-center items-center gap-4"
        >
          <span class="roboto-light md:hidden font-bold text-center sm:text-left"
            >Specify the amount money you might want(in $ dollars)</span
          >
          <span class="hidden md:block font-semibold text-lg py-2"
            >Specify the amount money you might want(in $ dollars)</span
          >
          <div class="amount_money_display my-2">
            <div class="money_display_content">
              <span>{{ dataGetAdvance.amountOfMoney }}</span> <span>$(dollars)</span>
            </div>
          </div>
        </div>
        <!--Here we are-->
        <div class="means_to_refund">
          <div class="question_refund w-full flex flex-col justify-center items-center gap-1">
            <span class="roboto-light text-center sm:text-left"
              >How do you intend to refund this advancement</span
            >
            <span class="roboto-light">( this information is capital)</span>
          </div>

          <div class="intention_refund_display">
            <div class="intend_display_content my-4">
              <p class="text-left text_size_intend roboto-regular">
                {{ dataGetAdvance.refundProcess }}
              </p>
            </div>
          </div>
        </div>
        <div class="time_money_lend mt-6 mb-2">
          <div class="time_money_day py-3">
            <div
              class="w-full py-1 text-center bg-gray-500 rounded"
              style="box-shadow: 0px 0px 8px #92026e"
            >
              <span class="money_lend_question block text-white lato-bold"
                >deadline willing date to lend money
              </span>
            </div>
            <div class="w-full h-10 my-6 mx-auto flex justify-center" style="width: 80%">
              <span class="p-2 w-full h-full text-center border border-solid border-gray-300">{{
                dataGetAdvance.deadline
              }}</span>
            </div>
          </div>
        </div>
        <!--request id-->
        <div class="mt-4">
          <RequestOrFeedReference
            element="request"
            label="salaryAdvance"
            :id-fetch="dataGetAdvance.referenceGet"
          />
        </div>
        <!--Date-->
        <div class="krub-light-italic mt-4 mb-2" style="font-size: calc(12px + 0.15vw)">
          <p class="text-right">
            <span>Date :</span> <span class="mx-2">{{ dataGetAdvance.date }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  ul {
    list-style: none;
  }

  .text_size_legend {
    font-size: calc(12px + 0.25vw);
  }

  .text_size_intend {
    font-size: calc(13px + 0.25vw);
  }

  /** container **/

  .salary_advance_content {
    width: 100w;
    padding: 2rem 0.75rem 1rem;
    margin: 0 auto;
  }

  /**formal information **/

  .get_formal_information {
    width: 100%;
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 5px;
    @apply flex flex-col justify-center items-center border border-solid border-gray-400;
  }

  .formal_info_item {
    width: 100%;
    padding: 0.25rem 0.35rem 0.75rem;
    margin-bottom: 1rem;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-rows: min-content;
    gap: 0.5rem;
    place-content: center;
    @apply bg-gray-100;
  }

  .formal_info_item .info_input {
    width: 96%;
    margin: 0 auto;
    padding: 5px 10px;
    display: grid;
    place-items: center;
    @apply border border-solid border-gray-300 rounded-xl;
  }

  .amount_money::placeholder {
    font-style: italic;
    @apply w-full flex justify-center items-center text-center;
  }
}

@media (min-width: 490px) {
  .fieldset {
    width: 86%;
  }

  .salary_advance_content {
    width: 100w;
    padding: 2rem 5% 1rem;
  }
}

@media (min-width: 768px) {
  .text_size_intend {
    font-size: calc(14px + 0.22vw);
  }

  /** container **/

  .salary_advance_content {
    width: 100w;
    max-width: 1060px;
  }

  /**general information **/
  .fieldset {
    width: 90%;
    margin: 0.5rem 0;
    display: grid;
    grid-template-areas:
      'dpt dpt . .'
      'name name post post'
      'reason reason reason reason';
    grid-auto-rows: min-content;
    gap: 1rem;
  }

  .formal_info_item {
    margin: 2rem 0 1rem;
  }

  #dpt_field {
    grid-area: dpt;
    grid-column: 1 / span 2;
  }
  #name_field {
    grid-area: name;
    grid-column: 1 / span 2;
  }
  #post_field {
    grid-area: post;
    grid-column: 3 / span 2;
  }
  #reason_field {
    grid-area: reason;
    grid-column: 1 / span 4;
  }
  /**intend display **/

  .intend_display_content {
    width: 92%;
    margin: 1.5rem auto;
  }
}
</style>
