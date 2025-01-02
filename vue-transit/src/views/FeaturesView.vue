<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'

type ModalType = {
  content_1: string
  content_2: string
  content_3?: string | undefined
}

type ModalFeedType = {
  msg_a: string
  msg_b: string
  msg_c: string
}

const modal = reactive<ModalType>({
  content_1: '',
  content_2: '',
  content_3: ''
})

const modalFeed = reactive<ModalFeedType>({
  msg_a: 'work , focus and better communicate with all teams',
  msg_b: 'collaboration, treatment and interconnectivity',
  msg_c: 'monthly feeds'
})

const isFeatureA: Ref<boolean> = ref(true)

const modFeatures = ref()

function selectedFeature(label: string) {
  modFeatures.value.classList.add('modal_active')

  switch (label) {
    case 'request':
      isFeatureA.value = true
      modal.content_1 = 'INTERNAL OPERATION'
      modal.content_2 = 'EXTERNAL OPERATION'
      break
    case 'stat':
      isFeatureA.value = true
      modal.content_1 = 'DIVISION STATS'
      modal.content_2 = 'INDIVIDUAL STATS'
      break
    case 'feedback':
      isFeatureA.value = false
      modal.content_1 = 'SEND A FEEDBACK'
      modal.content_2 = 'ASK FOR FEEDBACK'
      modal.content_3 = 'BROWSE FEEDS'
      break
    default:
      throw Error('something went wrong in selectedFeature')
  }
}

function routingModal(e: Event, id: number, label_1: string | undefined, label_2?: string) {
  console.log(e.target)
  if (id === 1) {
    console.log(label_1)
  } else {
    console.log(label_2)
  }
}

function closeModal() {
  setTimeout(() => {
    modal.content_1 = ''
    modal.content_2 = ''
  }, 1500)
  modFeatures.value.classList.remove('modal_active')
}
</script>
<template>
  <main id="features_page">
    <div class="gen_features_wrap">
      <div class="back_features_link w-full h-4 py-1">
        <span class="text-xl relative cursor-pointer"> &#8249; &#8249; &#8592;</span
        ><span class="mx-2">back</span>
      </div>
      <div class="signing_logo">
        <h3 class="text-sm mt-2 py-2 px-1 krub-regular-italic">transi\com</h3>
      </div>
      <div class="features_com_wrap">
        <div class="features_com_content text-white">
          <div
            id="request_ft"
            class="feature_com"
            @click.prevent="() => selectedFeature('request')"
          >
            <h3 class="featute_title">REQUESTS</h3>
          </div>
          <div
            id="feedback_ft"
            class="feature_com"
            @click.prevent="() => selectedFeature('feedback')"
          >
            <h3 class="featute_title">FEEDBACKS</h3>
          </div>
          <div id="stat_ft" class="feature_com" @click.prevent="() => selectedFeature('stat')">
            <h3 class="featute_title">STATS</h3>
          </div>
          <div id="emergency_ft" class="feature_com">
            <h3 class="featute_title">EMERGENCY</h3>
          </div>
        </div>
      </div>
      <div class="lan_wrapper">
        <select class="w-20 h-7 pl-2">
          <option value="english">english</option>
          <option value="french">french</option>
        </select>
      </div>

      <div class="modal_features" ref="modFeatures">
        <div class="modal_features_container">
          <div class="btn_modal_wrapper">
            <button class="btn_close_modal" @click.prevent="closeModal">&#x2715;</button>
          </div>
          <div class="modal_features_content_A" v-if="isFeatureA">
            <div
              id="modal_base_1"
              class="modal_base_A flex_row_center"
              @click.prevent="(e: Event) => routingModal(e, 1, modal.content_1)"
            >
              <h4 class="modal_title text-center">{{ modal.content_1 }}</h4>
            </div>
            <div
              id="modal_base_2"
              class="modal_base_A flex_row_center"
              @click.prevent="(e: Event) => routingModal(e, 2, modal.content_2)"
            >
              <h4 class="modal_title text-center">{{ modal.content_2 }}</h4>
            </div>
          </div>
          <div class="modal_features_content_B" v-else>
            <div
              id="modal_feed_1"
              class="modal_base_B flex_col_center"
              @click.prevent="(e) => routingModal(e, 1, modal.content_1, modalFeed.msg_a)"
            >
              <p
                class="add_message text-center mx-auto mb-2 px-2 py-1 text-yellow-100 hover:text-white"
              >
                {{ modalFeed.msg_a }}
              </p>
              <h4
                class="modal_title w-44 md:w-52 text-lg text-center text-white font-bold mt-4 lg:mt-6 mx-auto bg-gray-600"
              >
                {{ modal.content_1 }}
              </h4>
            </div>
            <div
              id="modal_feed_2"
              class="modal_base_B flex_col_center"
              @click.prevent="(e) => routingModal(e, 2, modal.content_2, modalFeed.msg_b)"
            >
              <p
                class="add_message text-center mx-auto mb-2 px-2 py-1 text-gray-700 hover:text-white"
              >
                {{ modalFeed.msg_b }}
              </p>
              <h4
                class="modal_title w-44 md:w-52 text-lg text-center text-white font-bold mt-4 lg:mt-6 mx-auto bg-gray-600"
              >
                {{ modal.content_2 }}
              </h4>
            </div>
            <div
              id="modal_feed_3"
              class="modal_base_B flex_col_center"
              @click.prevent="(e) => routingModal(e, 2, modal.content_3, modalFeed.msg_c)"
            >
              <p
                class="add_message text-center mx-auto mb-2 px-2 py-1 text-yellow-300 font-bold hover:text-white"
              >
                {{ modalFeed.msg_c }}
              </p>
              <h4
                class="modal_title w-40 text-lg text-center text-white font-bold mt-4 lg:mt-6 mx-auto bg-gray-600"
              >
                {{ modal.content_3 }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
@media (min-width: 180px) {
  .flex_row_center {
    @apply flex justify-center items-center;
  }

  .gen_features_wrap {
    position: relative;
    width: 100vw;
    height: 132vh;
    padding: 0.5rem 1rem;
    z-index: 1;
  }

  .signing_logo {
    position: absolute;
    bottom: 0rem;
    right: 1rem;
  }

  .lan_wrapper {
    position: absolute;
    top: 3.25rem;
    font-size: calc(11px + 0.1vw);
  }

  .features_com_wrap {
    position: relative;
    width: 100%;
    height: 92%;
  }

  .features_com_content {
    width: 90%;
    margin: 1rem auto;
    padding: 1rem 0;
    position: relative;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }

  .feature_com {
    margin: 2.25rem 0;
    width: 100%;
    height: 3rem;
    cursor: pointer;
    border-radius: 5px;
    outline: 3px solid rgb(92, 92, 92);
    transition: all 1s ease-in-out;
    transform: scale(1);
    display: grid;
    place-items: center;
    @apply grid place-items-center bg-gray-400;
  }

  .feature_com:focus {
    transform: scale(0.98);
  }

  .feature_com:hover {
    outline: 3px solid rgb(243, 243, 243);
    @apply bg-green-300;
  }

  #emergency_ft.feature_com {
    outline: 3px dashed rgb(92, 92, 92);
    @apply bg-purple-400;
  }

  #emergency_ft.feature_com:hover {
    outline: 3px solid rgb(243, 243, 243);
    animation: anim-emergency-btn 2s ease reverse infinite;
  }

  .modal_features {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    z-index: -1;
  }

  .modal_features.modal_active {
    perspective: 1000px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    z-index: 3;
  }

  .modal_features .modal_features_container {
    position: relative;
    top: 50%;
    left: 50%;
    width: 20%;
    height: 20%;
    background-color: rgba(0, 0, 0, 0.35);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    visibility: hidden;
    z-index: 0;
    transition: all 820ms ease-in-out 500ms;
  }

  .modal_features.modal_active .modal_features_container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(40, 134, 106, 0.65);
    border-radius: 0;
    visibility: visible;
    z-index: 3;
    transition: all 820ms ease-in-out;
  }

  .btn_modal_wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 1rem;
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 5;
  }

  .btn_close_modal {
    cursor: pointer;
    font-size: calc(22px + 0.25vw);
    padding: 0 0.5rem;
    border-radius: 5px;
    transition: all 1s ease;
  }

  .btn_close_modal:hover {
    @apply bg-gray-800;
  }

  .modal_features_content_A,
  .modal_features_content_B {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    transform: translate(-50%, -50%);
    @apply flex flex-col justify-center items-center;
  }

  .modal_base_A {
    position: relative;
    margin: 1rem 0;
    border-radius: 10px;
    cursor: pointer;
    z-index: 10;
    outline: 2px solid rgba(114, 134, 40, 0.89);
    transition: all 1s ease;
    @apply w-4/5 h-24 bg-gray-300 hover:bg-green-500;
  }

  .modal_base_B {
    position: relative;
    padding-top: 0.75rem;
    margin: 2rem 0 1rem;
    border-radius: 10px;
    cursor: pointer;
    z-index: 10;
    outline: 2px solid rgba(114, 134, 40, 0.89);
    transition: all 1s ease;
    @apply w-11/12 h-28;
  }

  .modal_base_B::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  #modal_feed_1.modal_base_B {
    width: 100%;
    height: 100%;
    background: url('../assets/images/desola-lanre-ologun-unsplash.jpg') no-repeat center
      center/cover;
  }

  #modal_feed_2.modal_base_B {
    width: 100%;
    height: 100%;
    background: url('../assets/images/campaign-creators-unsplash.jpg') no-repeat center center/cover;
  }

  #modal_feed_3.modal_base_B {
    width: 100%;
    height: 100%;
    background: url('../assets/images/andrew-neel-unsplash.jpg') no-repeat center center/cover;
  }

  .modal_features .modal_title {
    position: relative;
    top: 0.5rem;
    transform: scale(0.3);
    visibility: hidden;
    opacity: 0.3;
    transition: all 450ms ease-in-out;
  }

  .modal_features.modal_active .modal_title {
    position: relative;
    top: 0;
    transform: scale(1);
    visibility: visible;
    opacity: 1;
    transition: all 600ms ease-in-out;
  }
}

@media (min-width: 760px) {
  .gen_features_wrap {
    min-height: 112vh;
  }

  .signing_logo {
    position: absolute;
    bottom: unset;
    top: 2.5rem;
    left: 1rem;
    right: 1rem;
  }

  .features_com_content {
    margin: 1.5rem auto 0;
    padding: 0.5rem 1rem;
    max-width: 42rem;
    height: 20rem;
    grid-template-areas:
      ' req_lab req_lab feed_lab feed_lab '
      ' stats_lab stats_lab emer_lab emer_lab ';
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 140px;
    place-items: center;
    gap: 4rem;
  }

  .feature_com {
    margin: 1rem 0;
    height: 4.8rem;
    border-radius: 3px;
  }

  #request_ft.feature_com {
    width: 100%;
    grid-area: req_lab;
  }

  #feedback_ft.feature_com {
    width: 100%;
    grid-area: feed_lab;
  }

  #stat_ft.feature_com {
    width: 100%;
    grid-area: stats_lab;
  }

  #emergency_ft.feature_com {
    width: 100%;
    grid-area: emer_lab;
  }

  .lan_wrapper {
    position: absolute;
    top: unset;
    bottom: 1rem;
    right: 1rem;
  }

  .modal_base_B {
    padding-top: 2.5rem;
    @apply w-4/5 h-28;
  }
}

@media (min-width: 1045px) {
  .gen_features_wrap {
    height: 100vh;
  }
}

@media (min-width: 300px) and (max-width: 960px) and (orientation: landscape) {
  .gen_features_wrap {
    min-height: 250vh;
  }
}

@keyframes anim-modal-in {
  0% {
    opacity: 0;
    transform: scale(0.45);
    background-color: rgba(0, 0, 0, 0.35);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    background-color: rgba(40, 134, 106, 0.75);
  }
}

@keyframes anim-modal-out {
  0% {
    opacity: 1;
    transform: scale(1);
    background-color: rgba(40, 134, 106, 0.35);
  }
  100% {
    opacity: 0;
    transform: scale(0.35);
    background-color: rgba(0, 0, 0, 0.35);
  }
}

@keyframes anim-emergency-btn {
  0% {
    opacity: 0.45;
    visibility: hidden;
    @apply bg-green-700 text-white;
  }
  100% {
    opacity: 0.9;
    visibility: visible;
    @apply bg-red-400 text-gray-100;
  }
}
</style>
