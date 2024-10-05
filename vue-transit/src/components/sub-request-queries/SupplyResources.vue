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
  <div id="sup_resources" class="sup_resources_container">
    <div class="sup_resources_content">
      <ul class="sup_rsc_presentation">
        <li class="sup_resc_title">
          <div>Needed Resources</div>
          <div><span>i</span></div>
        </li>
        <li class="sup_resc_activity">
          <div>
            <span>please specify your work activity</span>
          </div>
          <div>
            <input type="text" id="work_activity" class="work_activity" />
          </div>
          <div><button>continue</button></div>
        </li>
      </ul>
    </div>
    <SubTemplateSupply label="resource" />
    <div>
      <RequestOrFeedReference element="request" label="resource" :id-fetch="referenceGet" />
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
</style>
