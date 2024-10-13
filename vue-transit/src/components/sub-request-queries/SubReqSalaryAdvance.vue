<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { grabElementStyleButton } from '../snippets-function-ts/playClickButton'
import SubSecondaryTitle from '../mini-tags-components/SubSecondaryTitle.vue'
import ShortModalButtonA from '../buttons/ShortModalButtonA.vue'
import ModalPromptForButton from '../modals/ModalPromptForButton.vue'
import ModalPromptForContainer from '../modals/ModalPromptForContainer.vue'
import RequestOrFeedReference from '../mini-tags-components/RequestOrFeedReference.vue'

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
  ' You are about to send the request. Click Submit if all the information are accurate'
])

const listTwoParagraghs: Ref<string[]> = ref([
  ' You will soon be notify by the accounting Services.',
  'Thanks you for Trusting us.'
])

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})

function handleConfirm() {
  // actions --CONFIRMATION--
}

function handleCancel() {
  // actions --CANCELLATION--
}

function handleValidation() {
  // actions --VALIDATION--
}

function handleSubmit() {
  // actions --SUBMITTION--
}

function handleEndModalContainer() {
  // actions --CLOSE MODAL CONTAINER--
}
</script>
<template>
  <div id="req_salary_advance" class="salary_advance_container">
    <div class="salary_advance_content">
      <SubSecondaryTitle label="salary" />
      <div class="details_worker">
        <div>
          <span>Personal Info</span>
        </div>
        <form class="get_formal_information">
          <fieldset>
            <legend class="Personal infos">
              <span>Personal infos </span>
              <div>&copy;</div>
            </legend>
            <div class="formal_info_item">
              <label for="department" class="info_label"> department </label>
              <input type="text" id="dpt_input" class="info_input" v-model="modelForm.department" />
            </div>
            <div class="formal_info_item">
              <label for="name" class="info_label"> Name </label>
              <input
                type="text"
                id="name_input"
                class="info_input"
                v-model="modelForm.nameEmployee"
              />
            </div>
            <div class="formal_info_item">
              <label for="post" class="info_label"> office post </label>
              <input
                type="text"
                id="post_input"
                class="info_input"
                v-model="modelForm.postOffice"
              />
            </div>
            <div class="formal_info_item">
              <label for="reason" class="info_label"> reason why you want an advancement </label>
              <input
                type="text"
                id="reason_input"
                class="info_input"
                v-model="modelForm.reasonUnderHood"
              />
            </div>
            <div class="field_btn_wrap">
              <div class="btn_wrap_confirm">
                <ShortModalButtonA
                  :style-infos="
                    grabElementStyleButton(
                      'btn_confirm_detail',
                      'confirm',
                      '3.2rem',
                      'green',
                      '#fff'
                    )
                  "
                  :on-click="() => handleConfirm()"
                />
              </div>
              <div class="btn_wrap_cancel">
                <ShortModalButtonA
                  :style-infos="
                    grabElementStyleButton('btn_cancel_detail', 'edit', '3.2rem', '#ddd', '#444')
                  "
                  :on-click="() => handleCancel()"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="details_money_management">
        <div class="amount_to_release">
          <span>Specify the amount money you might want(in $ dollars)</span>
          <input type="number" class="amount_money" v-model="manage.amountMoney" />
          <div class="amount_money_display">
            <div class="money_display_content"><span>1345</span> <span>$(dollars)</span></div>
          </div>
        </div>
        <div class="means_to_refund">
          <div class="question_refund">
            <span>How do you intend to refund this advancement</span>
            <span>( this information is capital)</span>
          </div>
          <textarea rows="3" columns="5" v-model="manage.textRefund"></textarea>
          <div class="intention_refund_display">
            <div class="intend_display_content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas iure, maxime
                earum ipsa autem quo, saepe libero numquam mollitia, molestias modi similique
                temporibus quia.
              </p>
            </div>
          </div>
        </div>
        <div class="time_money_lend">
          <div class="time_money_day">
            <span class="money_lend_question"
              >Give us a Date where you wish to have the money
            </span>
            <span>(e.g : 12/03/2025)</span>
          </div>
          <input type="text" id="expected_date" class="lending_date" />
        </div>
      </div>
      <div class="validate_req_box">
        <ShortModalButtonA
          :style-infos="
            grabElementStyleButton('btn_salary_validate', 'edit', '4.8rem', 'green', '#fff')
          "
          :on-click="() => handleValidation()"
        />
        <div class="salary_modal_box">
          <ModalPromptForButton
            typeMod="submit"
            :list-paragraph="listOneParagraghs"
            :on-deeper-click="() => handleSubmit()"
          />
        </div>
      </div>
      <div class="end_closing_message">
        <ModalPromptForContainer
          typeMod="OK"
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
ul {
  list-style: none;
}
</style>
