<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'

import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import SubTemplateSupply from '@/components/templates_quotation/SubTemplateSupply.vue'

import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

import LoadingBtnContinue from '@/components/loading/LoadingBtnContinue.vue'

import { ButtonStore } from '@/stores/button-store'

import { slapLoadingTime } from '@/components/snippets-function-ts/reusable-mini-function'

let isSubmitted: Ref<boolean> = ref(false)

let modelInput: Ref<string | undefined> = ref()

onMounted(() => {
  const useButtonStore = ButtonStore()

  useButtonStore.$patch({ loading: { isProcessing: false, isEnd: false } })
})

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})

const loadingOn: ComputedRef<{
  isProcessing: boolean
  isEnd: boolean
}> = computed(() => {
  const useButtonStore = ButtonStore()
  const btnStage = useButtonStore.loading

  return btnStage
})

function handleContinue() {
  if (modelInput.value !== '') {
    slapLoadingTime()
  } else {
    return
  }
}
</script>
<template>
  <div id="sup_resources" class="sup_resources_container">
    <div class="sup_resources_content p-4 w-full">
      <SubSecondaryTitle label="needs" />
      <ul class="sup_rsc_presentation mt-10">
        <li class="sup_resc_activity">
          <div>
            <span>Please specify your work activity</span>
          </div>
          <div class="sup_box_input">
            <input type="text" id="work_activity" class="work_activity" v-model="modelInput" />
          </div>
          <div class="continue_wrap">
            <button class="btn_continue btn_gen_green_2" @click="handleContinue">continue</button>
          </div>
        </li>
      </ul>
      <div class="loading_mini_effect w-full" v-if="loadingOn.isProcessing">
        <LoadingBtnContinue />
      </div>

      <div class="post_loading_container" v-if="loadingOn.isEnd">
        <div class="post_loading_content w-full" style="transition: all 1s ease-in-out">
          <SubTemplateSupply label="resource" />
          <div>
            <RequestOrFeedReference element="request" label="resource" :id-fetch="referenceGet" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}

.sup_box_input {
  @apply mt-6 mb-6 w-3/5 h-7;
  box-shadow: 0px 0px 5px #9ecfdb;
}

.sup_box_input .work_activity {
  width: 100%;
  height: 100%;
  padding: 3px 10px;
  outline: none;
  border-radius: 5px;
  @apply bg-gray-200 text-gray-500 border border-solid border-gray-400;
}
</style>
