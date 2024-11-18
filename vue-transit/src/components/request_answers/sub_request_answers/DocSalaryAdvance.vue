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
    referenceGet: '046780233945'
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
          <div class="fieldset">
            <div class="Personal infos h-10">
              <span class="text_size_legend crete-round-regular-italic">Personal infos </span>
            </div>
            <div class="formal_info_item">
              <span for="department" class="info_label roboto-light"> department </span>
              <p class="info_input">{{ dataGetAdvance.dpt }}</p>
            </div>
            <div class="formal_info_item">
              <span for="name" class="info_label roboto-light"> Name </span>
              <p class="info_input">{{ dataGetAdvance.nameEmployee }}</p>
            </div>
            <div class="formal_info_item">
              <span for="post" class="info_label roboto-light"> office post </span>
              <p class="info_input">{{ dataGetAdvance.post }}</p>
            </div>
            <div class="formal_info_item">
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
        <div class="amount_to_release w-full my-2 flex flex-col justify-center items-center gap-4">
          <span class="roboto-light md:hidden font-bold"
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
          <div class="question_refund w-full flex flex-col justify-center items-center gap-2">
            <span class="roboto-light">How do you intend to refund this advancement</span>
            <span class="roboto-light">( this information is capital)</span>
          </div>

          <div class="intention_refund_display">
            <div class="intend_display_content my-2">
              <p class="text-center text_size_intend roboto-regular">
                {{ dataGetAdvance.refundProcess }}
              </p>
            </div>
          </div>
        </div>
        <div class="time_money_lend mt-4 mb-2">
          <div class="time_money_day py-3 text-center">
            <span class="money_lend_question block roboto-light"
              >Propose a deadline you wish to be lend money
            </span>
            <span class="py-2">{{ dataGetAdvance.deadline }}</span>
          </div>
          <div class="h-8 my-2 mx-auto" style="width: 80%">
            <input
              type="text"
              id="expected_date"
              class="lending_date border w-full h-full text-center border-solid border-gray-300"
            />
          </div>
        </div>
        <!--request id-->
        <div>
          <RequestOrFeedReference
            element="request"
            label="salary-advance"
            :id-fetch="dataGetAdvance.referenceGet"
          />
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
    font-size: calc(13px + 0.18vw);
  }

  .fieldset {
    width: min-content;
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
    grid-auto-rows: 100%;
    gap: 0.5rem;
    place-content: center;
    @apply bg-gray-100;
  }

  .formal_info_item .info_input {
    width: 96%;
    height: 1.8rem;
    margin: 0 auto;
    padding: 10px;
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

  .fieldset {
    width: 90%;
    margin: 0.5rem 0;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 1rem;
  }

  /** container **/

  .salary_advance_content {
    width: 100w;
    max-width: 1060px;
  }

  /**formal information **/

  .formal_info_item {
    margin: 2rem 0 1rem;
  }

  /**intend display **/

  .intend_display_content {
    width: 92%;
    margin: 1.5rem auto;
  }
}
</style>
