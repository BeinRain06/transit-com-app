<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import SubSecondaryTitle from '../mini-tags-components/SubSecondaryTitle.vue'
import ShortModalButtonA from '../buttons/ShortModalButtonA.vue'
import ModalPromptForContainer from '../modals/ModalPromptForContainer.vue'
import { grabElementStyleButton } from '../snippets-function-ts/playClickButton'
import RequestOrFeedReference from '../mini-tags-components/RequestOrFeedReference.vue'

let isSubmitted: Ref<boolean> = ref(false)

const listOneParagraghs = ref([
  'Keep watching your notification page in the app. As soon as Our resource end study your request. You will be shortly Join.',
  'Thanks you Trusting Human Integration Service!'
])

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})

function handleSubmit() {
  // actions --SUBMITTION--
}

function handleEndModalContainer() {
  // actions --CLOSE MODAL CONTAINER--
}
</script>
<template>
  <div id="request_human_integration" class="req_integration_container">
    <div class="req_integration_content">
      <SubSecondaryTitle label="human" />
      <div class="about_two_agent">
        <div class="department_concerned_people">
          <ul class="inside_dpt">
            <li class="your_dpt">
              <span>your department</span>
              <select class="select_dpt">
                <option class="dpt_item" value="human">human Integration service</option>
                <option class="dpt_item" value="transportation">transportation service</option>
                <option class="dpt_item" value="accounting">accounting service</option>
                <option class="dpt_item" value="technical">technical service</option>
                <option class="dpt_item" value="supply">supply service</option>
                <option class="dpt_item" value="law">law's regulation service</option>
              </select>
            </li>
            <li class="peer_dpt">
              <span>peer host department</span>
              <select class="select_dpt">
                <option class="dpt_item" value="human">human Integration service</option>
                <option class="dpt_item" value="transportation">transportation service</option>
                <option class="dpt_item" value="accounting">accounting service</option>
                <option class="dpt_item" value="technical">technical service</option>
                <option class="dpt_item" value="supply">supply service</option>
                <option class="dpt_item" value="law">law's regulation service</option>
              </select>
            </li>
          </ul>
          <ul class="office_post_wrap">
            <li class="your_post">
              <span>Specify your actual post in your department</span>
              <input id="post_office_plaintiff" />
              <p class="display_post"></p>
            </li>
            <li class="peer_position">
              <span>Specify the actual peer rang</span>
              <div class="peer_group">
                <div class="peer_elt_position">
                  <input type="checkbox" id="post_employee" class="check_pos" />
                  <div>
                    <span>Regular Employee</span>
                  </div>
                </div>
                <div class="peer_elt_position">
                  <input type="checkbox" id="post_manager" class="check_pos" />
                  <div>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="matter_cooked">
        <div class="specify_problem">
          <span
            >Resume in 04 to 05 sentences max what is the matter that make your concern with your
            peer</span
          >
          <textarea rows="3" columns="5" class="problem_on_fire"></textarea>
        </div>
        <div>
          <h3>
            Describe us in details at least 02 to 03 situations, and some others agents you may
            remember where in place.
          </h3>
          <div class="box_situation_wrap">
            <span>details</span>
            <div class="box_situation_ct">
              <ul class="situations_list">
                <li class="situation_item">
                  <div>
                    <span>situation 1</span>
                  </div>
                  <div class="situation_out">
                    <textarea class="situation_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
                <li class="situation_item">
                  <div>
                    <span>situation 2</span>
                  </div>
                  <div class="situation_out">
                    <textarea class="situation_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
                <li class="situation_item">
                  <div>
                    <span>situation 3</span>
                  </div>
                  <div class="situation_out">
                    <textarea class="situation_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="box_solution_wrap">
            <span>your tentative to solve the problem</span>
            <div class="box_solution_ct">
              <ul class="solutions_list">
                <li class="solution_item">
                  <div>
                    <span>move 1</span>
                  </div>
                  <div class="solution_out">
                    <textarea class="solution_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
                <li class="solution_item">
                  <div>
                    <span>move 2</span>
                  </div>
                  <div class="solution_out">
                    <textarea class="solution_out_text" rows="4" columns="5"></textarea>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="time_spinning_wrap">
            <h3>how many times last this uneasy situation ?</h3>
            <select class="time_spinning_choice">
              <option class="spinning_choice" value="monthly">less than 03 months</option>
              <option class="spinning_choice" value="quaterly">more than 03 months</option>
              <option class="spinning_choice" value="semestrially">more than 06 months</option>
              <option class="spinning_choice" value="yearly">01 year +</option>
            </select>
          </div>
          <div class="free_duty_time">
            <div>
              <p>
                Specify 02 days / week with the range of hours where you may not have a lot of duty.
                For the case Our resources should plan a shadow discussion with you.
              </p>
              <ul class="days_in_week">
                <li class="scale_day_box">
                  <div id="day_box_one" class="day_box">
                    <div>Day 1 * : <span></span></div>
                    <div class="choose_day_wrap">
                      <div class="day_item">
                        <div class="day_sub_item">Monday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Tuesday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Wednesday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Thursday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Friday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Saturday</div>
                      </div>
                    </div>
                    <div class="hours_range_wrap">
                      <div>
                        <h3>hours range</h3>
                        <div class="hours_confirm">
                          <input type="text" class="time_range_day" />
                          <div class="time_wrap_button">
                            <button id="time_btn_confirm" class="time_btn">confirm</button>
                            <button id="time_btn_change" class="time_btn">change</button>
                          </div>
                        </div>
                      </div>
                      <div class="potential_schedule_hours">12:00AM - 02:00 P.M</div>
                    </div>
                  </div>
                </li>
                <li class="scale_day_box">
                  <div id="day_box_two" class="day_box">
                    <div>Day 2 * : <span></span></div>
                    <div class="choose_day_wrap">
                      <div class="day_item">
                        <div class="day_sub_item">Monday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Tuesday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Wednesday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Thursday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Friday</div>
                      </div>
                      <div class="day_item">
                        <div class="day_sub_item">Saturday</div>
                      </div>
                    </div>
                    <div class="hours_range_wrap">
                      <div>
                        <h3>hours range</h3>
                        <div class="hours_confirm">
                          <input type="text" class="time_range_day" />
                          <div class="time_wrap_button">
                            <button id="time_btn_confirm" class="time_btn">confirm</button>
                            <button id="time_btn_change" class="time_btn">change</button>
                          </div>
                        </div>
                      </div>
                      <div class="potential_schedule_hours">12:00AM - 02:00 P.M</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--Here we are-->
          <div class="submit_board_btn">
            <ShortModalButtonA
              :style-infos="
                grabElementStyleButton('btn_submit_req', 'submit', '3.2rem', 'green', '#fff')
              "
              :on-click="() => handleSubmit()"
            />
          </div>
          <div class="value_message_add">
            <ModalPromptForContainer
              typeMod="OK"
              :list-paragraph="listOneParagraghs"
              :on-deeper-click="handleEndModalContainer"
            />
          </div>
        </div>
      </div>
      <div>
        <RequestOrFeedReference element="request" label="integration" :id-fetch="referenceGet" />
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
</style>
