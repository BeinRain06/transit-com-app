<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, Reactive, ComputedRef } from 'vue'

import RequestOrFeedReference from '../mini-tags-components/RequestOrFeedReference.vue'

import SubSecondaryTitle from '../mini-tags-components/SubSecondaryTitle.vue'
import ProposalPurchaseOrder from '../templates_quotation/ProposalPurchaseOrder.vue'

let infoPage: Reactive<{
  req_id: string
  req_matter: string
  req_dpt: string
}> = reactive({
  req_id: '',
  req_matter: '',
  req_dpt: ''
})

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
  <div id="request_purchase_order" class="purchase_order_container">
    <div class="purchase_order_content">
      <div class="main_title">
        <div class="main_title_ct">
          <span>Purchase Order</span>
        </div>
      </div>
      <div>
        <SubSecondaryTitle label="purchase" />
      </div>
      <div class="infos_request">
        <div class="info_req_item">
          <span>Request Reference</span>
          <input
            type="text"
            id="id_request"
            class="request_text"
            name="id_request"
            v-model="infoPage.req_id"
          />
        </div>
        <div class="info_req_item">
          <span>Issue Request</span>
          <input
            type="text"
            id="id_issue"
            class="request_text"
            name="id_issue"
            v-model="infoPage.req_matter"
          />
        </div>
        <div class="info_req_item">
          <span>Departement Emitting Order</span>
          <input
            type="text"
            id="id_dpt"
            class="request_text"
            name="id_dpt"
            v-model="infoPage.req_dpt"
          />
        </div>
        <div class="proposal_quotation_wrap">
          <ProposalPurchaseOrder :label-dpt="infoPage.req_dpt" />
        </div>
      </div>
      <div>
        <RequestOrFeedReference element="request" label="purchase order" :id-fetch="referenceGet" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
