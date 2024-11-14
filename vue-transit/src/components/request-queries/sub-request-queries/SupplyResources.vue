<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'

import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import SubTemplateSupply from '@/components/templates_quotation/SubTemplateSupply.vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'
import LoadingBtnContinue from '@/components/loading/LoadingBtnContinue.vue'
import { playOnClickBtn } from '@/components/snippets-function-ts/playClickButton'
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
  const baseFtSize = 13
  playOnClickBtn(baseFtSize)

  if (modelInput.value !== '') {
    slapLoadingTime()
  } else {
    return
  }
}
</script>
<template>
  <div id="sup_resources" class="sup_resources_container">
    <div class="sup_resources_content">
      <SubSecondaryTitle label="needs" />
      <ul class="sup_rsc_presentation">
        <li class="sup_resc_activity">
          <div>
            <span>please specify your work activity</span>
          </div>
          <div>
            <input type="text" id="work_activity" class="work_activity" v-model="modelInput" />
          </div>
          <div class="continue_wrap">
            <button clas="btn_continue btn_gen_green" @click="handleContinue">continue</button>
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
</style>
