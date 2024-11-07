<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import RequestOrFeedReference from '../mini-tags-components/RequestOrFeedReference.vue'
import SubSecondaryTitle from '../mini-tags-components/SubSecondaryTitle.vue'
import SubSingleInputTextBox from '../mini-tags-components/SubSingleInputTextBox.vue'
import SubCheckBox from '../mini-tags-components/SubCheckBox .vue'
import ModalPromptForButton from '../modals/ModalPromptForButton.vue'
import ModalPromptForContainer from '../modals/ModalPromptForContainer.vue'
import RadioWrapButton from '../buttons/RadioWrapButton.vue'
import ShortModalButtonA from '../buttons/ShortModalButtonA.vue'
import { playOnClickBtn, grabElementStyleButton } from '../snippets-function-ts/playClickButton'

interface IModelCheckBoxItem {
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

let isSubmitted: Ref<boolean> = ref(false)

let isClaimConfirmed: Ref<boolean> = ref(false)

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
      label: '01 time',
      status: false
    },
    {
      id: 'time_unpaid_two',
      label: '02 times',
      status: false
    },
    {
      id: 'time_unpaid_three',
      label: 'more than 02 times',
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
  playOnClickBtn(baseFtSize)
  // do something
  // --> open the modal confirm container(isClaimConfirmed set to **true**)
}

function handleSubmit() {
  const baseFtSize = 13
  playOnClickBtn(baseFtSize)

  // --> couple actions --SUBMITTION--
}

function handleEndModalContainer() {
  // --> couple actions --RESET--, --CLOSE MODAL CONTAINER--
}
</script>
<template>
  <div id="req_unpaid_bonus" class="unpaid_bonus_container">
    <div class="unpaid_bonus_content">
      <SubSecondaryTitle label="bonus" />

      <div class="department_details">
        <SubSingleInputTextBox
          question="Your Department"
          label="dpt_concern"
          :model="infoEmployee.dpt"
          :isInput="false"
        />

        <SubSingleInputTextBox
          question="Your Post"
          label="post_concern"
          :model="infoEmployee.post"
          :isInput="false"
        />
      </div>
      <div class="track_bonus_details">
        <div class="track_box">
          <RadioWrapButton
            question="Which Bonus do you claimed ?"
            :radio-emit="radioBonus.radioDetails"
            @on-update-radio="(i) => handleRadioToggle(i)"
          />

          <div class="bonus_track_wrap">
            <ul class="details_joining">
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
            <div class="actions_on_process">
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
                  question="how many times have you already experienced that situation under the year ?"
                  :check-info="modelThree.checkDetails"
                />
                <div class="amount_money_unreceived">
                  <span>How much money you are intended to have</span>
                  <input type="number" id="money_unpaid" class="money_unpaid" />
                </div>
                <div class="submit_claimed_wrapper">
                  <button class="btn_continue btn_gen_green" @click.prevent="handleClaim">
                    continue
                  </button>
                  <div class="modal_wrap" v-if="isClaimConfirmed">
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
      <div class="gen_modal_container">
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
ul {
  list-style: none;
}
</style>
