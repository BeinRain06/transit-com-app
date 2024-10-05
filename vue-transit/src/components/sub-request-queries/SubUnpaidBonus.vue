<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import RequestOrFeedReference from '../../mini-tags-components/RequestOrFeedReference.vue'

let isSubumitted: Ref<boolean> = ref(false)

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubumitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})
</script>
<template>
  <div id="req_unpaid_bonus" class="unpaid_bonus_container">
    <div class="unpaid_bonus_content">
      <ul class="request_lab">
        <li>
          <span>Unpaid Bonus</span>
        </li>
        <li>
          <div>i</div>
        </li>
      </ul>
      <div class="department_details">
        <div class="dpt_inquirement">
          <span>Your Department</span>
          <input type="text" id="dpt_concern" class="inquirement_input" />
        </div>
        <div class="dpt_inquirement">
          <span>Your Post</span>
          <input type="text" id="post_concern" class="inquirement_input" />
        </div>
      </div>
      <div class="track_bonus_details">
        <div class="track_box">
          <span>Which Bonus do you claimed</span>
          <div class="bonus_track_wrap">
            <ul class="bonus_type">
              <li class="bonus_type_item">
                <div id="gen_bonus" class="radio_bonus">
                  <div class="radio_inner_bonus"></div>
                </div>
                <span>General Bonus</span>
              </li>
              <li class="bonus_type_item">
                <div id="ind_bonus" class="radio_bonus">
                  <div class="radio_inner_bonus"></div>
                </div>
                <span>Individual Bonus</span>
              </li>
            </ul>
            <ul class="details_joining">
              <li>
                <div class="joining_item">
                  <span>Phone 1</span>
                  <input type="text" id="phone_1" class="joining_input" />
                </div>
              </li>
              <li>
                <div class="joining_item">
                  <span>Phone 2</span>
                  <input type="text" id="phone_2" class="joining_input" />
                </div>
              </li>
              <li>
                <div class="joining_item">
                  <span>Phone 1</span>
                  <input type="email" id="email" class="joining_input" />
                </div>
              </li>
            </ul>
            <div class="actions_on_process">
              <div class="action_process">
                <div class="process_question">
                  <span>have you an ongoing Credit ? </span>
                  <div class="choices_process">
                    <div class="choice_to_check">
                      <input type="checkbox" id="choice_agree" />
                      <span>yes</span>
                    </div>
                    <div class="choice_to_check">
                      <input type="checkbox" id="choice_refute" />
                      <span>no</span>
                    </div>
                  </div>
                </div>
                <div class="process_question">
                  <span>have you a disciplinary action intend on you ? </span>
                  <div class="choices_process">
                    <div class="choice_to_check">
                      <input type="checkbox" id="discipline_agree" />
                      <span>yes</span>
                    </div>
                    <div class="choice_to_check">
                      <input type="checkbox" id="discipline_refute" />
                      <span>no</span>
                    </div>
                  </div>
                </div>
                <div class="process_question">
                  <span
                    >how many times have you already experienced that situation under the year ?
                  </span>
                  <div class="choices_process">
                    <div class="choice_to_check">
                      <input type="checkbox" id="time_unpaid_one" />
                      <span> 01 time</span>
                    </div>
                    <div class="choice_to_check">
                      <input type="checkbox" id="time_unpaid_two" />
                      <span>02 times</span>
                    </div>
                    <div class="choice_to_check">
                      <input type="checkbox" id="time_unpaid_three" />
                      <span>more than 02 times</span>
                    </div>
                  </div>
                </div>
                <div class="amount_money_unreceived">
                  <span>How much money you are intended to have</span>
                  <input id="money_unpaid" class="money_unpaid" />
                </div>
                <div class="submit_claimed_wrapper">
                  <div class="submit_box">
                    <button class="btn_submit_unpaid">submit your claim</button>
                  </div>
                  <div class="modal_submit_unpaid">
                    <div class="modal_unpaid_ct">
                      <p>you are about to submit a claim for unpaid bonus</p>

                      <p>are you sure all informations about the claim are valid ?</p>
                      <div class="modal_unpaid_btn">
                        <button>Yes</button>
                        <button>No</button>
                      </div>
                    </div>
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
        <div class="end_unpaid_msg">
          <p>You will be soon reached out by accounting or human integrations service</p>
          <p>Thanks You for trusting the company</p>
          <div class="btn_unpaid_box">
            <button class="btn_unpaid_end">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
</style>
