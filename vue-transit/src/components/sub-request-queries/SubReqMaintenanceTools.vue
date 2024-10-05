<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import RequestOrFeedReference from '../../mini-tags-components/RequestOrFeedReference.vue'
import SubSecondaryTitle from '../../mini-tags-components/SubSecondaryTitle.vue'
import SubTemplateSupply from '../templates_quotation/SubTemplateSupply.vue'

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
  <div id="request_tools" class="maintenance_tools_container">
    <div class="main_title">
      <div class="main_title_ct">
        <h2>Maintenance Tools</h2>
      </div>
    </div>
    <div>
      <SubSecondaryTitle label="request" />
    </div>
    <div class="tools_necessity">
      <div>
        <span>Describe Tools Necessity</span>
      </div>
      <textarea class="tools_text_need" rows="5" columns="2"> </textarea>
    </div>
    <div>
      <SubTemplateSupply label="tools" />
    </div>
    <form class="employee_details">
      <div class="employee_info">
        <span>Agent Id</span>
        <input type="text" id="agent_id" name="agent_id" class="employee_input" />
      </div>
      <div class="employee_info">
        <span>Department</span>
        <input type="text" id="agent_dpt" name="agent_dpt" class="employee_input" />
      </div>
      <div class="send_req_box">
        <div class="text_info">
          <p>Your Demand will be studied. It can Take A while. Please Be Patient ...</p>
        </div>
        <div class="send_wrap_button">
          <button class="btn_send_req">Send</button>
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
<style scoped></style>
