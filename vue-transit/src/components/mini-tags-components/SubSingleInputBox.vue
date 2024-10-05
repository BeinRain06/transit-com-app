<script setup lang="ts">
const props = defineProps<{
  element: {
    id: string
    question: string
    label: string
    model: string
    isInput: Boolean
    numberRows?: string
    numberColumns?: string
  }
}>()
</script>
<template>
  <div class="layout_item">
    <div class="box_info">
      <div class="box_question">
        <span>{{ props.element.question }}</span>
      </div>
      <div class="box_input_wrap" v-if="props.element.isInput">
        <input
          type="text"
          :id="props.element.label"
          :name="props.element.label"
          class="box_input"
          :v-model="props.element.model"
        />
      </div>
      <div class="box_textarea_wrap" v-if="!props.element.isInput">
        <textarea
          :id="props.element.label"
          class="box_multi_text"
          :rows="props.element.numberRows"
          :columns="props.element.numberColumns"
          :v-model="props.element.model"
        ></textarea>
      </div>
    </div>
  </div>
</template>
