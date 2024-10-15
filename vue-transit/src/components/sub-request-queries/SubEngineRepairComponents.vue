<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import SubTemplateSupply from '../templates_quotation/SubTemplateSupply.vue'

import { playOnClickBtn } from '../snippets-function-ts/playClickButton'
import RequestOrFeedReference from '../mini-tags-components/RequestOrFeedReference.vue'

let isSubmitted: Ref<boolean> = ref(false)

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})

function handleSubmit() {
  playOnClickBtn(13)
  // do some **ACTIONS** submit request
}
</script>
<template>
  <div id="request_engine_copmonents" class="engine_repair_container">
    <div class="engine_repair_content">
      <div class="init_infos p-2">
        <div class="init_info_box">
          <span class="roboto-light">Driving License Car</span>
          <input type="text" id="license" name="license" class="repair_init_input" />
        </div>
        <div class="init_info_box">
          <div>
            <span class="roboto-light">last transportation destination operated by the Car ? </span>
          </div>
          <input
            type="text"
            id="license"
            name="license"
            class="repair_init_input"
            placeholder="e.g: line garoua-ngaoundere"
          />
        </div>
        <div class="subtemplate_wrapper w-full">
          <SubTemplateSupply label="engine" />
        </div>
        <div class="delivery_repair_act my-4">
          <div class="repair_act_box">
            <div class="repair_act_text pt-4 pb-2">
              <span class="roboto-light"> time support without complete failure</span>
            </div>
            <input
              type="text"
              id="time_receival"
              name="time_receival"
              class="repair_act_input"
              placeholder="e.g: 05 days ..."
            />
          </div>

          <div class="repair_act_box">
            <div class="repair_act_text">
              <span class="roboto-light">Estimated Times up to Repairments</span>
            </div>
            <input
              type="text"
              id="time_performance"
              name="time_performance"
              class="repair_act_input"
              placeholder="e.g: 02 days ..."
            />
          </div>

          <div class="req_send_box">
            <div class="req_send_city my-2">
              <button
                id="btn_send"
                class="btn_send btn_gen_green w-full mb-2 mx-auto"
                @click.prevent="handleSubmit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div>
          <RequestOrFeedReference
            element="request"
            label="engine-components"
            :id-fetch="referenceGet"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  /**repair - content **/
  .engine_repair_content {
    --text-size-one: calc(13px + 0.3vw);
    width: 100vw;
    min-height: 100vh;
    margin: 1rem auto;
    font-size: var(--text-size-one);
  }

  .init_info_box {
    @apply w-full flex flex-col justify-start gap-2 leading-tight;
  }

  .repair_init_input,
  .repair_act_input {
    width: 100%;
    height: 3rem;
    padding: 10px 5px;
    margin: 0.25rem 0 1rem;
    border-radius: 5px;
    @apply border border-solid border-gray-300;
  }

  .repair_init_input::placeholder {
    font-size: calc(12px + 0.1vw);
  }
}
</style>
