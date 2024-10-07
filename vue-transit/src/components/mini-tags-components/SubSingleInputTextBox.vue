<script setup lang="ts">
const props = defineProps<{
  question: string
  label: string
  model: string
  isInput: Boolean
  numberRows?: string
  numberColumns?: string
}>()
</script>
<template>
  <div class="layout_item">
    <div class="box_info">
      <div class="box_question">
        <span>{{ props.question }}</span>
      </div>
      <div class="box_input_wrap" v-if="props.isInput">
        <input
          type="text"
          :id="props.label"
          :name="props.label"
          class="box_input"
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
</template>
