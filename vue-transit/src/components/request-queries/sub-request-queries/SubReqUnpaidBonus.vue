<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'

import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'
import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import SubSingleInputTextBox from '@/components/mini-tags-components/SubSingleInputTextBox.vue'
import SubCheckBox from '@/components/mini-tags-components/SubCheckBox .vue'
import ModalPromptForButton from '@/components/modals/ModalPromptForButton.vue'
import ModalPromptForContainer from '@/components/modals/ModalPromptForContainer.vue'
import RadioWrapButton from '@/components/buttons/RadioWrapButton.vue'

export interface IModelCheckBoxItem {
  checkDetails: {
    id: string
    label: string
    status: boolean
  }[]
}

interface IRadioBonusItem {
  radioDetails: {
    id: string
    label: string
    classItem: string
    modelRadio: boolean
  }[]
}

let isSubmitted: Ref<boolean> = ref(true)

let isClaimConfirmed: Ref<boolean> = ref(true)

const promptParagraphsOne: Ref<string[]> = ref([
  'you are about to submit a claim for unpaid bonus',
  'are you sure all informations about the claim are valid ?'
])

const promptParagraphsTwo: Ref<string[]> = ref([
  'You will be soon reached out by accounting or human integrations service',
  'Thanks You for trusting the company'
])

/* You will be soon reached out by accounting or human integrations service */
/*     Thanks You for trusting the company */

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})

const infoEmployee: { dpt: string; post: string } = reactive({
  dpt: '',
  post: ''
})

const modelOne: IModelCheckBoxItem = reactive({
  checkDetails: [
    {
      id: 'choice_agree',
      label: 'yes',
      status: false
    },
    {
      id: 'choice_refute',
      label: 'no',
      status: false
    }
  ]
})

const modelTwo: IModelCheckBoxItem = reactive({
  checkDetails: [
    {
      id: 'disciplinary_up',
      label: 'yes',
      status: false
    },
    {
      id: 'disciplinary_down',
      label: 'no',
      status: false
    }
  ]
})

const modelThree: IModelCheckBoxItem = reactive({
  checkDetails: [
    {
      id: 'time_unpaid_one',
      label: 'once',
      status: false
    },
    {
      id: 'time_unpaid_two',
      label: 'twice',
      status: false
    },
    {
      id: 'time_unpaid_three',
      label: 'more +',
      status: false
    }
  ]
})

const radioBonus: IRadioBonusItem = reactive({
  radioDetails: [
    {
      id: 'department_bonus',
      label: 'General Bonus',
      classItem: 'radio_input',
      modelRadio: false
    },
    {
      id: 'self_bonus',
      label: 'Individual Bonus',
      classItem: 'radio_input',
      modelRadio: false
    }
  ]
})

function handleRadioToggle(i: number) {
  // do something
  // --> map radioBonus array and add class "active" to the clicked box --SWITCH--
}

function handleClaim() {
  const baseFtSize = 13
  /*  playOnClickBtn(baseFtSize) */

  // do something
  // --> open the modal confirm container(isClaimConfirmed set to **true**)
}

function handleSubmit() {
  const baseFtSize = 13
  /*  playOnClickBtn(baseFtSize) */

  // --> couple actions --SUBMITTION--
}

function handleEndModalContainer() {
  // --> couple actions --RESET--, --CLOSE MODAL CONTAINER--
}
</script>
<template>
  <div id="req_unpaid_bonus" class="unpaid_bonus_container">
    <div class="unpaid_bonus_content">
      <div class="entrance_title w-full mb-4 flex justify-center">
        <span class="font-bold">Bonus stats</span>
      </div>
      <div class="text_secondary_title w-full mt-4 mb-2 flex justify-center items-center sm:h-10">
        <SubSecondaryTitle label="bonus" />
      </div>

      <div class="department_details my-4 md:my-6">
        <SubSingleInputTextBox
          question="Your Department"
          label="dpt_concern"
          bgColor="#dae4be"
          :model="infoEmployee.dpt"
          :isInput="true"
        />

        <SubSingleInputTextBox
          question="Your Post"
          label="post_concern"
          bgColor="#eee"
          :model="infoEmployee.post"
          :isInput="true"
        />
      </div>
      <div class="track_bonus_details md:py-2">
        <div class="track_box">
          <RadioWrapButton
            question="Which Bonus do you claimed ?"
            :radio-emit="radioBonus.radioDetails"
            @on-update-radio="(i) => handleRadioToggle(i)"
          />

          <div class="bonus_track_wrap">
            <ul class="details_joining my-1 md: py-4">
              <li>
                <div class="joining_item">
                  <span>Phone 1</span>
                  <input type="number" id="phone_1" class="joining_input" />
                </div>
              </li>
              <li>
                <div class="joining_item">
                  <span>Phone 2</span>
                  <input type="number" id="phone_2" class="joining_input" />
                </div>
              </li>
              <li>
                <div class="joining_item">
                  <span>Email</span>
                  <input type="email" id="email" class="joining_input" />
                </div>
              </li>
            </ul>
            <div class="actions_on_process my-4">
              <div class="action_process">
                <SubCheckBox
                  question="have you an ongoing Credit ?"
                  :check-info="modelOne.checkDetails"
                />

                <SubCheckBox
                  question="have you a disciplinary action intend on you ?"
                  :check-info="modelTwo.checkDetails"
                />

                <SubCheckBox
                  question="how many times you already experienced that situation under the year ?"
                  :check-info="modelThree.checkDetails"
                />
                <div
                  class="amount_money_unreceived w-full h-24 flex flex-col justify-center items-center md:w-4/5 md:mx-auto"
                >
                  <div class="my-2">
                    <span>How much money you are intended to have</span>
                  </div>
                  <input
                    type="number"
                    id="money_unpaid"
                    class="money_unpaid w-full h-8 border border-solid border-gray-300"
                  />
                </div>
                <div class="submit_claimed_wrapper w-full my-3 md:grid md:place-items-center">
                  <button
                    class="btn_continue btn_gen_green_2 md:w-2/5"
                    @click.prevent="handleClaim"
                  >
                    continue
                  </button>

                  <div class="modal_wrap py-2" v-if="isClaimConfirmed">
                    <ModalPromptForButton
                      typeMod="yes"
                      :list-paragraph="promptParagraphsOne"
                      :on-deeper-click="handleSubmit"
                    />
                  </div>
                </div>
                <div>
                  <RequestOrFeedReference
                    element="request"
                    label="unpaid-bonus"
                    :id-fetch="referenceGet"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gen_modal_container" v-if="isSubmitted">
        <ModalPromptForContainer
          typeMod="ok"
          :list-paragraph="promptParagraphsTwo"
          :on-deeper-click="handleEndModalContainer"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  ul {
    list-style: none;
  }

  /** container **/

  .unpaid_bonus_content {
    width: 100vw;
    padding: 2rem 1rem 1rem;
    margin: 0 auto;
  }

  /** bonus track wrap **/
  .joining_item {
    @apply w-full my-4 flex justify-start items-center gap-2;
  }

  .joining_item span {
    width: 25%;
  }

  .joining_input {
    width: 75%;
    @apply h-6 my-1 border border-solid border-gray-300;
  }
}

@media (min-width: 520px) {
  /** actons ongoing **/
  .actions_on_process {
    margin: 2.5rem 0 1rem;
    height: max-content;
  }
}

@media (min-width: 768px) {
  /** container **/

  .unpaid_bonus_content {
    width: 100vw;
    max-width: 1100px;
    padding: 2rem 2rem 1rem;
    margin: 0 auto;
  }

  .department_details {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content;
    gap: 1rem;
  }
}
</style>
