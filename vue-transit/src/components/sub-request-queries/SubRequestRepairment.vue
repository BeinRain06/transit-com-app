<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, ComputedRef, Reactive } from 'vue'
import RequestOrFeedReference from '../../mini-tags-components/RequestOrFeedReference.vue'

import SubSingleInputBox from '../sub-mini-tags/SubSingleInputBox.vue'
import RadioWrapButton from '../sub-mini-tags/RadioWrapButton.vue'
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

let isSubmitted: Ref<boolean> = ref(false)

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})
</script>
<template>
  <div id="request_repair" class="request_repair_container">
    <div class="request_repair_content">
      <div class="main_title">
        <div class="main_title_ct">
          <h2>Request Repairment</h2>
        </div>
      </div>

      <div class="device_infos">
        <ul class="remind_device">
          <li>
            <div>
              <span>{{ props.label }} Name*</span>
              <input type="text" id="issue_device" class="issue_device" />
            </div>
          </li>
          <li>
            <div>
              <span>Department **</span>
              <input type="text" id="issue_device_dpt" class="issue_device" />
            </div>
          </li>
          <li>
            <div>
              <span>Office ***</span>
              <input type="text" id="issue_device_office" class="issue_device" />
            </div>
          </li>
        </ul>
        <div class="validate_pre_info">
          <div class="validate_pre_content">
            <button class="btn_continue">continue</button>
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
                <span>Is it the first time ?</span>
                <div class="radio_wrap">
                  <div class="time_assertion">
                    <div>
                      <span>yes</span>
                    </div>
                    <div id="radio_assert_yes" class="radio_input">
                      <div class="radio_inner_box"></div>
                    </div>
                  </div>
                  <div class="time_assertion">
                    <div>
                      <span>no</span>
                    </div>
                    <div id="radio_assetr_no" class="radio_input">
                      <div class="radio_inner_box"></div>
                    </div>
                  </div>
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
                <p>can you manage working sometimes without this device</p>
                <RadioWrapButton />
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
          <div class="info_record_spec">
            <p>Thanks to allow us to better understand the dificulties you are facing...</p>
            <p>
              The technical board will analyze your request and send back to you a response soon
              when finshed.
            </p>
            <div class="end_valid_repair">
              <button class="btn_record_confirm">confirm</button>
              <button class="btn_record_cancel">cancel</button>
            </div>
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
