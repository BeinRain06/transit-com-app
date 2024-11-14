<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import type { Ref, ComputedRef, Reactive } from 'vue'

import RequestOrFeedReference from '../mini-tags-components/RequestOrFeedReference.vue'

import SubSingleInputTextBox from '../mini-tags-components/SubSingleInputTextBox.vue'
import SubSecondaryTitle from '../mini-tags-components/SubSecondaryTitle.vue'
import RadioWrapButton from '../buttons/RadioWrapButton.vue'
import { playOnClickBtn } from '../snippets-function-ts/playClickButton'
import { slapLoadingTime } from '../snippets-function-ts/reusable-mini-function'
import { ButtonStore } from '@/stores/button-store'
import ModalPromptForButton from '../modals/ModalPromptForButton.vue'

const props = defineProps<{
  label: string
}>()

interface IBoxItem {
  obj: {
    id: string
    question: string
    label: string
    model: string
    isInput: Boolean
    numberRows?: string
    numberColumns?: string
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

onMounted(() => {
  const useButtonStore = ButtonStore()

  useButtonStore.$patch({ loading: { isProcessing: false, isEnd: false } })
})

const promptParagraphs: Ref<string[]> = ref([
  'Thanks to allow us to better understand the dificulties you are facing...',
  'The technical board will analyze your request and send back to you a response soon when finshed.'
])

const boxItem: Reactive<IBoxItem> = reactive({
  obj: [
    {
      id: 'matter_office',
      question: 'What Problems Do You Have in Your Office ?',
      label: 'matter_office',
      model: '',
      isInput: true
    },
    {
      id: 'solution_tried',
      question: 'What have you Tried Earlier before the Request accounting to solve the problem ?',
      label: 'solution_tried',
      model: '',
      isInput: false,
      numberColumns: '5',
      numberRows: '3'
    },
    {
      id: 'material_behavior',
      question: 'What have you Tried Earlier before the Request accounting to solve the problem ?',
      label: 'material_behavior',
      model: '',
      isInput: false,
      numberColumns: '5',
      numberRows: '3'
    }
  ]
})

const radioProblem: IRadioBonusItem = reactive({
  radioDetails: [
    {
      id: 'problem_up',
      label: 'yes',
      classItem: 'radio_input',
      modelRadio: false
    },
    {
      id: 'problem_down',
      label: 'no',
      classItem: 'radio_input',
      modelRadio: false
    }
  ]
})

const radioManage: IRadioBonusItem = reactive({
  radioDetails: [
    {
      id: 'manage_up',
      label: 'yes',
      classItem: 'radio_input',
      modelRadio: false
    },
    {
      id: 'manage_down',
      label: 'no',
      classItem: 'radio_input',
      modelRadio: false
    }
  ]
})

let isSubmitted: Ref<boolean> = ref(false)

let isClaimConfirmed: Ref<boolean> = ref(false)

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})

const modelInput = reactive({
  issue: '',
  dpt: '',
  office: ''
})

function handleRadioToggle(i: number) {
  // do something
  // --> map radio (manage or problem) array and add class "active" to the clicked box --SWITCH--
}

function handleContinue() {
  const baseFtSize = 13
  playOnClickBtn(baseFtSize)

  if (modelInput.issue !== '' && modelInput.dpt !== '' && modelInput.office !== '') {
    slapLoadingTime()
  } else {
    return
  }
}

function handleSubmit() {
  const baseFtSize = 13
  playOnClickBtn(baseFtSize)

  // --> couple actions --SUBMITTION--
}
</script>
<template>
  <div id="request_repair" class="request_repair_container">
    <div class="request_repair_content">
      <div class="main_title">
        <SubSecondaryTitle label="repairment" />
      </div>

      <div class="device_infos">
        <ul class="remind_device">
          <li>
            <div>
              <span>{{ props.label }} Name*</span>
              <input
                type="text"
                id="issue_device"
                class="issue_device"
                v-model="modelInput.issue"
              />
            </div>
          </li>
          <li>
            <div>
              <span>Department **</span>
              <input
                type="text"
                id="issue_device_dpt"
                class="issue_device"
                v-model="modelInput.dpt"
              />
            </div>
          </li>
          <li>
            <div>
              <span>Office ***</span>
              <input
                type="text"
                id="issue_device_office"
                class="issue_device"
                v-model="modelInput.office"
              />
            </div>
          </li>
        </ul>
        <div class="validate_pre_info">
          <div class="validate_pre_content">
            <button class="btn_continue btn_gen_green">continue</button>
          </div>
        </div>
      </div>
      <div class="device_issue_wrap">
        <div class="resume_issue_side"></div>
        <div class="pre_performed_maintenance"></div>
        <div class="details_problem_device">
          <SubSingleInputBox :element="boxItem.obj[0]" />
          <ul class="time_classification">
            <li class="time_question">
              <div>
                <p>Hows many Hours/Days Do you get this problem ?</p>
                <select class="problem_option_time">
                  <option class="pro_opt_item" value="day">less than 24 hours</option>
                  <option class="pro_opt_item" value="day">less than 24 hours</option>
                  <option class="pro_opt_item" value="day">less than 24 hours</option>
                </select>
              </div>
            </li>
            <li class="problem_time">
              <div>
                <div class="dity_radio">
                  <RadioWrapButton
                    question="Is it the first time ?"
                    :radio-emit="radioProblem.radioDetails"
                    @on-update-radio="(i) => handleRadioToggle(i)"
                  />
                </div>
              </div>
            </li>
            <li class="trial_fix_wrapper">
              <SubSingleInputBox :element="boxItem.obj[1]" />
            </li>
            <li>
              <SubSingleInputBox :element="boxItem.obj[2]" />
            </li>
            <li>
              <div>
                <RadioWrapButton
                  question="can you manage working sometimes without this device ?"
                  :radio-emit="radioManage.radioDetails"
                />
              </div>
              <div class="amount_support">
                <div><p>how long could it be ?</p></div>
                <select id="time_support" class="time_support">
                  <option class="time_sup_item" value="days">less than 03 days</option>
                  <option class="time_sup_item" value="weeks">less than 02 weeks</option>
                  <option class="time_sup_item" value="month">less than 01 month</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div class="info_record_box">
          <div class="modal_wrap" v-if="isClaimConfirmed">
            <ModalPromptForButton
              typeMod="confirm"
              :list-paragraph="promptParagraphs"
              :on-deeper-click="handleSubmit"
            />
          </div>
        </div>
      </div>
      <div>
        <RequestOrFeedReference
          element="request"
          label="material-repairement"
          :id-fetch="referenceGet"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
