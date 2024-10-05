<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import RequestOrFeedReference from '../../mini-tags-components/RequestOrFeedReference.vue'
const department = defineModel()
const nameEmployee = defineModel()
const postOffice = defineModel()
const reasonUnderHood = defineModel()
const amountMoney = defineModel()

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
  <div id="req_salary_advance" class="salary_advance_container">
    <div class="salary_advance_content">
      <ul class="request_lab">
        <li>
          <span>Salary Advance</span>
        </li>
        <li>
          <div>i</div>
        </li>
      </ul>
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
              <input type="text" id="dpt_input" class="info_input" v-model="department" />
            </div>
            <div class="formal_info_item">
              <label for="name" class="info_label"> Name </label>
              <input type="text" id="name_input" class="info_input" v-model="nameEmployee" />
            </div>
            <div class="formal_info_item">
              <label for="post" class="info_label"> office post </label>
              <input type="text" id="post_input" class="info_input" v-model="postOffice" />
            </div>
            <div class="formal_info_item">
              <label for="reason" class="info_label"> reason why you want an advancement </label>
              <input type="text" id="reason_input" class="info_input" v-model="reasonUnderHood" />
            </div>
            <div class="field_btn_wrap">
              <div class="btn_wrap_confirm">
                <button class="btn_confirm_detail">confirm</button>
              </div>
              <div class="btn_wrap_cancel">
                <button class="btn_cancel_detail">edit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="details_money_management">
        <div class="amount_to_release">
          <span>Specify the amount money you might want(in $ dollars)</span>
          <input type="number" class="amount_money" v-model="amountMoney" />
          <div class="amount_money_display">
            <div class="money_display_content"><span>1345</span> <span>$(dollars)</span></div>
          </div>
        </div>
        <div class="means_to_refund">
          <div class="question_refund">
            <span>How do you intend to refund this advancement</span>
            <span>( this information is capital)</span>
          </div>
          <textarea rows="3" columns="5"></textarea>
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
        <button class="btn_salary_validate">Validate</button>
        <div class="salary_modal_box">
          <div class="modal_box_content">
            <p>
              You are about to send the request. Click Submit if all the information are accurate
            </p>
            <div class="modal_submit_box">
              <button id="btn_mod_submit" class="btn_mod">Submit</button>
              <button id="btn_mod_reject" class="btn_mod">Reject</button>
            </div>
          </div>
        </div>
      </div>
      <div class="end_closing_message">
        <p>You will soon be notify by the accounting Services.</p>
        <p>Thanks you for Trusting us.</p>
        <div class="btn_ok_end">OK</div>
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
