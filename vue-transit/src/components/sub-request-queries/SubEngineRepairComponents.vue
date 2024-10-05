<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import SubTemplateSupply from '../templates_quotation/SubTemplateSupply.vue'
import RequestOrFeedReference from '../../mini-tags-components/RequestOrFeedReference.vue'

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
  <div id="request_engine_copmonents" class="engine_repair_container">
    <div class="engine_repair_content">
      <div class="init_infos">
        <div class="init_info_box">
          <span>Enter the Driving License Car</span>
          <input type="text" id="license" name="license" class="repair_init_input" />
        </div>
        <div class="init_info_box">
          <div>
            <span>What is the last transportation destination operated by the Car ? </span>
            <span>( e.g: line garoua-ngaoundere)</span>
          </div>
          <input type="text" id="license" name="license" class="repair_init_input" />
        </div>
        <div>
          <SubTemplateSupply label="engine" />
        </div>
        <div class="delivery_repair_act">
          <div class="repair_act_box">
            <div class="repair_act_text">
              <span>Time Expected for the components without Engine Activity Disruption</span>
              <span>(e.g: 03 days ...)</span>
            </div>
            <input type="text" id="time_receival" name="time_receival" class="repair_act_input" />
          </div>

          <div class="repair_act_box">
            <div class="repair_act_text">
              <span>Estimated Times to perform the Repairments</span>
              <span>(e.g: 02 days ...)</span>
            </div>
            <input
              type="text"
              id="time_performance"
              name="time_performance"
              class="repair_act_input"
            />
          </div>

          <div class="req_send_box">
            <div class="req_send_city">
              <button class="btn_send">Send</button>
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
<style scoped></style>
