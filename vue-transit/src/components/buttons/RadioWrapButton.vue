<script setup lang="ts">
const props = defineProps<{
  question: string
  radioEmit: {
    id: string
    label: string
    classItem: string
    modelRadio: boolean
  }[]
}>()
</script>
<template>
  <div class="radio_wrap">
    <div class="question_tag">
      <span>{{ props.question }}</span>
    </div>

    <ul class="time_assertion">
      <li
        class="radio_broadcast"
        :key="item.id"
        v-for="(item, i) in props.radioEmit"
        @click="$emit('onUpdateRadio', i)"
      >
        <div>
          <span>{{ item.label }}</span>
        </div>
        <div :id="item.id" :class="item.classItem">
          <div class="radio_inner_box"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
