<script setup lang="ts">
import { reactive, computed } from 'vue'
import type { ComputedRef } from 'vue'

const props = defineProps<{
  typeMod: string
  listParagraph: string[]
  onDeeperClick: () => void
}>()

const modelSubmittion = defineModel()

const isBtnValid: { notCase: boolean; case: boolean } = reactive({
  notCase: false,
  case: true
})

const archiveParagraph: ComputedRef<string[]> = computed(() => {
  const allParagraph = props.listParagraph
  return allParagraph
})

function handleSubmitOrNot(isBtnValidCase: boolean) {
  if (isBtnValidCase) {
    modelSubmittion.value = true
  } else {
    modelSubmittion.value = false
  }

  props.onDeeperClick()
}
</script>
<template>
  <div class="prompt_wrapper">
    <div class="prompt_content">
      <ul class="prompt_list">
        <li :key="i" v-for="(elt, i) in archiveParagraph">{{ elt }}</li>
      </ul>
      <div class="btn_wrapper w-4/5 mx-auto my-4 flex justify-center gap-2">
        <button
          class="btn_gen_green w-16 text-center"
          @click="() => handleSubmitOrNot(isBtnValid.case)"
        >
          YES
        </button>

        <button
          class="btn_gen_drop w-16 text-center"
          @click="() => handleSubmitOrNot(isBtnValid.notCase)"
        >
          NO
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
</style>
