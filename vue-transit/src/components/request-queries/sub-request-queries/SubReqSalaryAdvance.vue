<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import type { Ref, ComputedRef } from 'vue'

import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import ModalPromptForButton from '@/components/modals/ModalPromptForButton.vue'
import ModalPromptForContainer from '@/components/modals/ModalPromptForContainer.vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

interface IModelForm {
  department: string
  nameEmployee: string
  postOffice: string
  reasonUnderHood: string
}

const modelForm: IModelForm = reactive({
  department: '',
  nameEmployee: '',
  postOffice: '',
  reasonUnderHood: ''
})

const manage: {
  amountMoney: string
  textRefund: string
} = reactive({
  amountMoney: '',
  textRefund: ''
})

let isSubmitted: Ref<boolean> = ref(false)

const listOneParagraghs: Ref<string[]> = ref([
  ' You are about to send the request.',
  'Click Submit if all the information are accurate.'
])

const listTwoParagraghs: Ref<string[]> = ref([
  ' You will soon be notify by the accounting Services.',
  'Thanks you for Trusting us.'
])

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    console.log()
  }
  return newRef
})

function handleConfirm() {
  console.log()
}

function handleCancel() {
  console.log()
}

function handleValidation() {
  console.log()
}

function handleSubmit() {
  console.log()
}

function handleEndModalContainer() {
  console.log()
}
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
      <div class="details_worker w-full">
        <form class="get_formal_information">
          <fieldset>
            <legend class="Personal infos h-10">
              <span class="text_size_legend crete-round-regular-italic">Personal infos </span>
            </legend>
            <div class="formal_info_item">
              <label for="department" class="info_label roboto-light"> department </label>
              <input type="text" id="dpt_input" class="info_input" v-model="modelForm.department" />
            </div>
            <div class="formal_info_item">
              <label for="name" class="info_label roboto-light"> Name </label>
              <input
                type="text"
                id="name_input"
                class="info_input"
                v-model="modelForm.nameEmployee"
              />
            </div>
            <div class="formal_info_item">
              <label for="post" class="info_label roboto-light"> office post </label>
              <input
                type="text"
                id="post_input"
                class="info_input"
                v-model="modelForm.postOffice"
              />
            </div>
            <div class="formal_info_item">
              <label for="reason" class="info_label roboto-light">
                reason why you want an advancement
              </label>
              <input
                type="text"
                id="reason_input"
                class="info_input"
                v-model="modelForm.reasonUnderHood"
              />
            </div>
            <div class="field_btn_wrap my-2">
              <div class="btn_wrap_confirm w-full">
                <button
                  class="btn_confirm_detail btn_gen_green_2 roboto-regular"
                  @click="handleConfirm"
                >
                  confirm
                </button>
              </div>
              <div class="btn_wrap_cancel w-full">
                <button
                  class="btn_cancel_detail btn_gen_drop_2 roboto-regular"
                  @click="handleCancel"
                >
                  edit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="details_money_management w-full md:py-8">
        <div class="amount_to_release w-full my-2 flex flex-col justify-center items-center gap-4">
          <span class="roboto-light md:hidden font-bold"
            >Specify the amount money you might want(in $ dollars)</span
          >
          <span class="hidden md:block font-semibold text-lg py-2"
            >Specify the amount money you might want(in $ dollars)</span
          >
          <input
            type="number"
            class="amount_money bg-gray-300 md:h-6 md:w-3/5"
            placeholder="e.g : 13 dollars"
            v-model="manage.amountMoney"
          />
          <div class="amount_money_display my-2">
            <div class="money_display_content"><span>1345</span> <span>$(dollars)</span></div>
          </div>
        </div>

        <div class="means_to_refund">
          <div class="question_refund w-full flex flex-col justify-center items-center gap-2">
            <span class="roboto-light">How do you intend to refund this advancement</span>
            <span class="roboto-light">( this information is capital)</span>

            <div class="mt-4 mb-2 mx-auto" style="width: 70%; height: 6rem">
              <textarea
                class="w-full h-full border border-solid border-gray-300"
                rows="3"
                columns="5"
                v-model="manage.textRefund"
              ></textarea>
            </div>
          </div>

          <div class="intention_refund_display">
            <div class="intend_display_content my-2">
              <p class="text-center text_size_intend roboto-regular">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas iure, maxime
                earum ipsa autem quo, saepe libero numquam mollitia, molestias modi similique
                temporibus quia.
              </p>
            </div>
          </div>
        </div>
        <div class="time_money_lend mt-4 mb-2">
          <div class="time_money_day py-3 text-center">
            <span class="money_lend_question block roboto-light"
              >Propose a deadline you wish to be lend money
            </span>
            <span class="py-2">(e.g : 12/03/2025)</span>
          </div>
          <div class="h-8 my-2 mx-auto" style="width: 80%">
            <input
              type="text"
              id="expected_date"
              class="lending_date border w-full h-full text-center border-solid border-gray-300"
            />
          </div>
        </div>
      </div>
      <div class="validate_req_box">
        <button class="btn_sal_valid w-full btn_gen_green_2" @click="handleValidation">
          apply
        </button>
        <div class="salary_modal_box w-full my-8 text-center">
          <ModalPromptForButton
            typeMod="submit"
            :list-paragraph="listOneParagraghs"
            :on-deeper-click="() => handleSubmit()"
          />
        </div>
      </div>
      <div class="end_closing_message mt-3 mb-6">
        <ModalPromptForContainer
          typeMod="ok"
          :list-paragraph="listTwoParagraghs"
          :on-deeper-click="handleEndModalContainer"
        />
      </div>
      <div>
        <RequestOrFeedReference element="request" label="salary-advance" :id-fetch="referenceGet" />
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

  fieldset {
    width: min-content;
  }

  .salary_advance_content {
    width: 100w;
    padding: 2rem 0.75rem 1rem;
    margin: 0 auto;
  }

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

  .field_btn_wrap {
    width: 100%;
    height: 4rem;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 0.25rem;
  }

  .amount_money::placeholder {
    font-style: italic;
    @apply w-full flex justify-center items-center text-center;
  }

  .btn_confirm_detail,
  .btn_cancel_detail {
    width: 100%;
  }

  .validate_req_box {
    width: 60%;
    margin: 1.5rem auto;
  }
}

@media (min-width: 490px) {
  fieldset {
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

  fieldset {
    width: 90%;
    margin: 0.5rem 0;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 1rem;
  }

  .salary_advance_content {
    width: 100w;
    max-width: 1060px;
  }

  .formal_info_item {
    margin: 2rem 0 1rem;
  }

  .field_btn_wrap {
    width: 200%;
    margin: 0 auto;
    gap: 1rem;
  }

  .intend_display_content {
    width: 92%;
    margin: 1.5rem auto;
  }
}
</style>
