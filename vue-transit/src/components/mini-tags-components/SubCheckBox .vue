<script setup lang="ts">
const props = defineProps<{
  question: string
  checkInfo: {
    id: string
    label: string
    status: boolean
  }[]
}>()
</script>
<template>
  <div class="layout_item">
    <div class="box_info">
      <div class="box_question">
        <span>{{ props.question }}</span>
      </div>
      <div class="box_check_wrap">
        <ul class="box_check_city">
          <li :key="item.id" v-for="item in props.checkInfo">
            <input
              type="checkbox"
              :id="item.id"
              :name="item.id"
              class="box_check"
              :checked="item.status"
            />
            <div class="check_label_text">{{ item.label }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
