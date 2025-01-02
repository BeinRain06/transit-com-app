<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'

import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'

import SubTemplateSupply from '@/components/templates_quotation/SubTemplateSupply.vue'

import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

let isSubmitted: Ref<boolean> = ref(false)

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    console.log()
  }
  return newRef
})
</script>
<template>
  <div id="request_tools" class="maintenance_tools_container">
    <div class="main_title">
      <div class="main_title_ct w-full text-center my-2 font-bold">
        <span class="font-bold md:text-lg">Maintenance Tools</span>
      </div>
    </div>
    <div class="my-4 md:my-8">
      <SubSecondaryTitle label="request" />
    </div>
    <div class="tools_necessity my-2">
      <div class="mb-1">
        <span class="roboto-light">Describe Tools Necessity</span>
      </div>
      <textarea class="tools_text_need w-full border border-gray-300 rounded" rows="5" columns="2">
      </textarea>
    </div>
    <div class="my-4">
      <SubTemplateSupply label="tools" />
    </div>
    <hr class="w-full border border-dashed border-gray-300 mb-2" />
    <form class="employee_details my-4 md:my-8">
      <div class="employee_infos_wrap w-full">
        <div class="employee_info">
          <span class="roboto-light">Agent Id</span>
          <input type="text" id="agent_id" name="agent_id" class="employee_input" />
        </div>
        <div class="employee_info">
          <span class="roboto-light">Department</span>
          <input type="text" id="agent_dpt" name="agent_dpt" class="employee_input" />
        </div>
      </div>
      <div class="send_req_box text_size_one w-full mt-8">
        <div class="text_info roboto-regular">
          <p>Your Demand will be studied. It can Take A while.</p>
          <p>Please Be Patient ...</p>
        </div>
        <div class="send_wrap_button w-full my-4 mx-auto flex justify-center">
          <button class="btn_send_req btn_gen_green_2 w-4/5 text_size_one">Send</button>
        </div>
      </div>
    </form>
    <div>
      <RequestOrFeedReference
        element="request"
        label="maintenance-tools"
        :id-fetch="referenceGet"
      />
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  .text_size_one {
    font-size: calc(12px + 0.25vw);
  }

  .maintenance_tools_container {
    width: 100vw;
    padding: 2rem 1rem 1rem;
    margin: 0 auto;
  }

  .employee_info {
    @apply w-full mb-4 flex flex-col gap-2;
    font-size: calc(14px + 0.25vw);
  }

  .employee_info .employee_input {
    @apply w-full h-7 border border-gray-400;
    border-radius: 5px;
  }

  .send_req_box .text_info {
    @apply w-full flex flex-col justify-center text-center gap-2;
  }
}

@media (min-width: 460px) {
  .maintenance_tools_container {
    width: 100vw;
    padding: 2.2rem 2rem 1rem;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .maintenance_tools_container {
    width: 100vw;
    max-width: 1045px;
  }

  .employee_infos_wrap {
    display: flex;
    justify-content: center;
    flex-basis: 50%;
    gap: 1rem;
  }
}
</style>
