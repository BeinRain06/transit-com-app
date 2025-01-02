<script setup lang="ts">
import { reactive, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { IModelCheckBoxItem } from '@/components/request-queries/sub-request-queries/SubReqUnpaidBonus.vue'
import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import SubCheckBox from '@/components/mini-tags-components/SubCheckBox .vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

const dataGet = computed(() => {
  let dataFetchInRequest = {
    dptInfos: [
      {
        id: 'dpt_agent',
        label: 'Your Department',
        info: 'Human Resources'
      },
      { id: 'post_agent', label: 'Your Post', info: 'assistant attender' }
    ],
    bonusGeneral: true,

    trackContact: ['000456897', '034689052', 'abreda@gmail.com'],

    disciplinaryInfos: [
      {
        checkedId: 'choice_refute'
      },
      {
        checkedId: 'disciplinary_down'
      },
      {
        checkedId: 'time_unpaid_two'
      }
    ],

    moneyUnpaid: '245',

    referenceGet: '08884576444321',
    date: '12-03-24'
  }

  return dataFetchInRequest
})

const classNameCheck: ComputedRef<{
  classGen: string
  classInd: string
}> = computed(() => {
  let gatherClassName = {
    classGen: '',
    classInd: ''
  }
  const classEffectGen = dataGet.value.bonusGeneral
    ? 'radio_inner_box active_inner_box'
    : 'radio_inner_box'

  const classEffectInd = !dataGet.value.bonusGeneral
    ? 'radio_inner_box active_inner_box'
    : 'radio_inner_box'

  gatherClassName = {
    classGen: classEffectGen,
    classInd: classEffectInd
  }

  return gatherClassName
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
</script>
<template>
  <div
    id="req_unpaid_bonus"
    class="unpaid_bonus_container w-full md:py-8"
    style="background-color: #eee"
  >
    <div class="unpaid_bonus_content" style="background-color: #e2e0e0">
      <div class="entrance_title w-full mb-4 flex justify-center">
        <span class="font-bold">Bonus stats</span>
      </div>
      <div class="text_secondary_title w-full mt-4 mb-2 flex justify-center items-center sm:h-10">
        <SubSecondaryTitle label="bonus" />
      </div>

      <div class="department_details my-4 md:my-6">
        <div class="layout_item">
          <ul class="box_info w-full flex flex-col justify-center items-center gap-2 md:flex-row">
            <li
              class="employee_recognition w-full text-center md:w-1/2"
              :key="item.id"
              v-for="item in dataGet.dptInfos"
            >
              <div class="box_question">
                <span class="roboto-light">{{ item.label }}</span>
              </div>
              <div class="area_submit_request w-full">
                <div class="area_display_request w-full">
                  <div class="box_wrap w-full py-2 my-2">
                    <p class="box_text_content">{{ item.info }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="track_bonus_details md:py-2">
        <div class="track_box">
          <div class="question_tag text-center my-4">
            <span class="roboto-light">Which Bonus do you claimed ?</span>
          </div>
          <ul class="list_radio_stuff my-4">
            <li class="radio_broadcast">
              <div>
                <span>General Bonus</span>
              </div>
              <div id="department_bonus" class="radio_input">
                <div :class="classNameCheck.classGen"></div>
              </div>
            </li>
            <li class="radio_broadcast">
              <div>
                <span>Individual Bonus</span>
              </div>
              <div id="self_bonus" class="radio_input">
                <div :class="classNameCheck.classInd"></div>
              </div>
            </li>
          </ul>

          <div class="bonus_track_wrap">
            <ul class="details_joining my-1 md: py-4">
              <li>
                <div id="phone_1" class="joining_item">
                  <span>Phone 1 :</span>
                  <p>{{ dataGet.trackContact[0] }}</p>
                </div>
              </li>
              <li>
                <div id="phone_1" class="joining_item">
                  <span>Phone 2 :</span>
                  <p>{{ dataGet.trackContact[1] }}</p>
                </div>
              </li>
              <li>
                <div id="email_join" class="joining_item">
                  <span>Email :</span>
                  <p>{{ dataGet.trackContact[2] }}</p>
                </div>
              </li>
            </ul>

            <div class="actions_on_process my-4">
              <div class="action_process">
                <SubCheckBox
                  question="have you an ongoing Credit ?"
                  :check-info="modelOne.checkDetails"
                  :is-display="true"
                  :display-infos="dataGet.disciplinaryInfos[0]"
                  checkPos="0"
                />

                <SubCheckBox
                  question="have you a disciplinary action intend on you ?"
                  :check-info="modelTwo.checkDetails"
                  :is-display="true"
                  :display-infos="dataGet.disciplinaryInfos[1]"
                  checkPos="1"
                />

                <SubCheckBox
                  question="how many times you already experienced that situation under the year ?"
                  :check-info="modelThree.checkDetails"
                  :is-display="true"
                  :display-infos="dataGet.disciplinaryInfos[2]"
                  checkPos="2"
                />
                <div
                  class="amount_money_unreceived w-full h-24 flex flex-col justify-center items-center md:w-4/5 md:mx-auto"
                >
                  <div class="my-2">
                    <span>How much money you are intended to have</span>
                  </div>
                  <div
                    class="money_unpaid w-full flex justify-center items-center h-8 border border-solid border-gray-300"
                  >
                    <p class="w-4/5 flex justify-center items-center gap-1 mx-auto">
                      <span>$</span>{{ dataGet.moneyUnpaid }}
                    </p>
                  </div>
                </div>

                <div class="w-full py-2 my-2">
                  <RequestOrFeedReference
                    element="request"
                    label="unpaid-bonus"
                    :id-fetch="dataGet.referenceGet"
                  />
                </div>

                <div class="krub-light-italic mb-2 md:mb-4" style="font-size: calc(12px + 0.15vw)">
                  <p>
                    <span>Date :</span> <span class="mx-2">{{ dataGet.date }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
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

  .unpaid_bonus_content {
    width: 100vw;
    padding: 2rem 1rem 1rem;
    margin: 0 auto;
  }

  .joining_item {
    @apply w-full my-2 flex flex-col justify-start  gap-2;
  }

  .joining_item p {
    text-align: center;
  }

  .joining_input {
    width: 75%;
    @apply h-6 my-1 border border-solid border-gray-300;
  }

  .list_radio_stuff {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 1rem;
  }

  .list_radio_stuff .radio_broadcast {
    width: 100%;
    display: grid;
    grid-row: span 2;
    grid-auto-rows: subgrid;
    gap: 0.5rem;
    place-items: center;
    text-align: center;
  }

  .radio_inner_box {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid gray;
  }

  .radio_inner_box.active_inner_box {
    width: 14px;
    height: 14px;
    background-color: #7e7e7e;
    border-radius: 50%;
    border: 1px solid gray;
    outline: 2px solid #fff;
    outline-offset: -3px;
  }
}

@media (min-width: 520px) {
  .unpaid_bonus_content {
    width: 100vw;
    font-size: calc(16px + 0.2vw);
  }

  .actions_on_process {
    margin: 2.5rem 0 1rem;
    height: max-content;
  }
}

@media (min-width: 768px) {
  .unpaid_bonus_content {
    width: 100vw;
    padding: 2rem 5%;
    max-width: 1100px;
  }
}
</style>
