<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, Reactive, ComputedRef } from 'vue'

import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import SubTemplateSupply from '@/components/templates_quotation/SubTemplateSupply.vue'
import ModalPromptForButton from '@/components/modals/ModalPromptForButton.vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

let infoPage: Reactive<{
  req_id: string
  req_matter: string
  req_dpt_emit: string
  req_dpt_for: string
}> = reactive({
  req_id: '',
  req_matter: '',
  req_dpt_emit: '',
  req_dpt_for: ''
})

let isSubmitted: Ref<boolean> = ref(false)

const paragraphsModal: Ref<string[]> = ref([
  'You are about to send the purchase order',
  'Do you confirm?'
])

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    console.log()
  }
  return newRef
})

function handlePurchaseOrder() {
  console.log()
}
</script>
<template>
  <div id="request_purchase_order" class="purchase_order_container">
    <div class="purchase_order_content">
      <div class="main_title">
        <div class="main_title_ct w-full mb-4 flex justify-center">
          <span class="font-bold md:text-lg">Purchase Order</span>
        </div>
      </div>
      <div class="my-4 md:my-8">
        <SubSecondaryTitle label="purchase" />
      </div>
      <div class="infos_request w-full mt-2 mb-4">
        <div class="info_req_wrap">
          <div class="info_req_item">
            <span>Request Reference</span>

            <input
              type="text"
              id="id_ref"
              class="request_text"
              name="id_ref"
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
              v-model="infoPage.req_dpt_emit"
            />
          </div>
          <div class="info_req_item">
            <span>Departement In Need</span>
            <input
              type="text"
              id="id_dpt"
              class="request_text"
              name="id_dpt"
              v-model="infoPage.req_dpt_for"
            />
          </div>
        </div>
        <div class="proposal_quotation_wrap w-full my-4">
          <SubTemplateSupply label="ordering" />
        </div>
      </div>
      <div class="send_purchase_box md:mt-20">
        <ModalPromptForButton
          typeMod="yes"
          :list-paragraph="paragraphsModal"
          :on-deeper-click="handlePurchaseOrder"
        />
      </div>
      <div class="mt-10 mb-2 md:mb-6">
        <RequestOrFeedReference element="request" label="purchase_order" :id-fetch="referenceGet" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  .purchase_order_container {
    width: 100vw;
    padding: 2rem 1rem 1rem;
    margin: 0 auto;
  }

  .info_req_item {
    @apply w-full py-2 flex flex-col gap-2;
  }

  .info_req_item .request_text {
    border-radius: 3px;
    @apply w-full h-7  border border-solid border-gray-300;
  }
}

@media (min-width: 460px) {
  .purchase_order_container {
    padding: 2.2rem 2rem 1rem;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .purchase_order_container {
    max-width: 1040px;
    padding: 2.2rem 2rem 1rem;
    margin: 0 auto;
  }

  .info_req_wrap {
    margin: 0.5rem auto 1rem;
    display: grid;
    grid-auto-columns: 50%;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .info_req_item .request_text {
    @apply h-9;
  }
}
</style>
