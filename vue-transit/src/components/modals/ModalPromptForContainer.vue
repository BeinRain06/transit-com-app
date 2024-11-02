<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

const props = defineProps<{
  typeMod: string
  listParagraph: string[]
  onDeeperClick: (isBtnValid: boolean) => any
}>()

const archiveParagraph: ComputedRef<string[]> = computed(() => {
  const allParagraph = props.listParagraph
  return allParagraph
})

const labelBtn = computed(() => {
  let labelButton

  switch (props.typeMod) {
    case 'yes':
      labelButton = 'YES'
      break
    case 'send':
      labelButton = 'send'
      break
    case 'ok':
      labelButton = 'OK'
      break
    default:
      throw Error(' Error label validation in --ModalPromptButton--')
  }

  return labelButton
})
</script>
<template>
  <div class="prompt_wrapper w-full">
    <div class="prompt_content w-full text_size_msg">
      <ul class="prompt_list w-full flex flex-col items-center gap-1 text-center my-2">
        <li :key="i" v-for="(elt, i) in archiveParagraph">{{ elt }}</li>
      </ul>
      <div class="btn_wrapper w-4/5 flex justify-center items-center mt-6 mx-auto">
        <button
          class="w-full btn_valid_req btn_gen_green_2 text_size_msg"
          @click="() => props.onDeeperClick(true)"
        >
          {{ labelBtn }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}

.text_size_msg {
  font-size: calc(12px + 0.25vw);
}
</style>
