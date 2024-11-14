<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
const props = defineProps<{
  question: string
  label: string
  model: string
  isInput: Boolean
  bgColor?: string
  numberRows?: string
  numberColumns?: string
}>()

const bgInputColor: ComputedRef<string> = computed(() => {
  let newBgColor = props.bgColor ? props.bgColor : 'transparent'
  return newBgColor
})
</script>
<template>
  <div class="layout_item">
    <div class="box_info w-full">
      <div class="box_question">
        <span class="roboto-light">{{ props.question }}</span>
      </div>
      <div class="area_submit_request w-full">
        <div class="box_input_wrap w-full h-6 mt-1 mb-2" v-if="props.isInput">
          <input
            type="text"
            :id="props.label"
            :name="props.label"
            class="box_input w-full h-full border border-solid border-gray-300 rounded"
            :style="{ 'background-color': `${bgInputColor}` }"
            :v-model="props.model"
          />
        </div>
        <div class="box_textarea_wrap" v-if="!props.isInput">
          <textarea
            :id="props.label"
            class="box_multi_text"
            :rows="props.numberRows"
            :columns="props.numberColumns"
            :v-model="props.model"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
