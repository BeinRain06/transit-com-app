<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import SubTemplateSupply from '../templates_quotation/SubTemplateSupply.vue'
import RequestOrFeedReference from '../mini-tags-components/RequestOrFeedReference.vue'
import LoadingBtnContinue from '../loading/LoadingBtnContinue.vue'
import ShortModalButtonA from '../buttons/ShortModalButtonA.vue'
import { playOnClickBtn, grabElementStyleButton } from '../snippets-function-ts/playClickButton'

let isSubmitted: Ref<boolean> = ref(false)

let isLoadingEnd: Ref<boolean> = ref(false)

let isLoadingProcessing: Ref<boolean> = ref(false)

let modelInput: Ref<string | undefined> = ref()

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})

function handleContinue() {
  const baseFtSize = 13
  playOnClickBtn(baseFtSize)

  if (modelInput.value !== '') {
    setTimeout(() => {
      isLoadingProcessing.value = true
    }, 5000)
    isLoadingEnd.value = true

    isLoadingProcessing.value = true
  } else {
    return
  }
}
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
            <input type="text" id="work_activity" class="work_activity" v-model="modelInput" />
          </div>
          <div class="continue_wrap">
            <ShortModalButtonA
              :style-infos="
                grabElementStyleButton('continue_toggler', 'continue', '3.2rem', 'green', '#fff')
              "
              :on-click="() => handleContinue()"
            />
          </div>
        </li>
      </ul>
      <div class="loading_mini_effect w-full" v-if="isLoadingProcessing">
        <LoadingBtnContinue />
      </div>

      <div class="post_loading_container" v-if="isLoadingEnd">
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
