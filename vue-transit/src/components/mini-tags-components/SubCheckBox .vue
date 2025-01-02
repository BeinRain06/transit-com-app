<script setup lang="ts">
const props = defineProps<{
  question: string
  checkInfo: {
    id: string
    label: string
    status: boolean
  }[]
  isDisplay?: boolean
  displayInfos?: { checkedId: string } | undefined
  checkPos?: string | undefined
}>()
</script>
<template>
  <div class="layout_item w-full my-4">
    <div class="box_info md:py-4">
      <div class="box_question mt-1 mb-2 text-center sm:text-left">
        <span class="roboto-light">{{ props.question }}</span>
      </div>
      <div class="box_check_wrap w-full" v-if="!props.isDisplay">
        <ul class="box_check_city w-full flex justify-center items-center gap-1">
          <li
            :key="item.id"
            v-for="item in props.checkInfo"
            class="w-1/2 sm:w-20 grid place-items-center gap-1"
          >
            <div class="check_label_text">{{ item.label }}</div>
            <input
              type="checkbox"
              :id="item.id"
              :name="item.id"
              class="box_check border border-solid border-gray-300"
              :checked="item.status"
            />
          </li>
        </ul>
      </div>

      <div class="box_check_wrap w-full" v-if="props.isDisplay">
        <ul class="box_check_city w-full flex justify-center items-center gap-1">
          <li
            :key="item.id"
            v-for="item in props.checkInfo"
            class="w-1/2 sm:w-20 grid place-items-center gap-1"
          >
            <div class="check_label_text">{{ item.label }}</div>
            <input
              type="checkbox"
              :id="item.id"
              :name="item.id"
              class="box_check border border-solid border-green-300"
              disabled
              :checked="item.id === props.displayInfos?.checkedId ? true : false"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 520px) {
  .box_info {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content;
  }
}
</style>
