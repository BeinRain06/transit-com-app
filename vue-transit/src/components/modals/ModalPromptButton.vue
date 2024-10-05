<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import ShortModalButtonA from '../buttons/ShortModalButtonA.vue'
import { grabElementStyleButton } from '../snippets-function-ts/playOnclickButton'

const props = defineProps<{
  typeMod: string
  listParagraph: string[]
  onDeeperClick: (isBtnValid: boolean) => any
}>()

const archiveParagraph: ComputedRef<string[]> = computed(() => {
  const allParagraph = props.listParagraph
  return allParagraph
})

const styleConfirm = computed(() => {
  let newStyleConfirm

  switch (props.typeMod) {
    case 'yes':
      newStyleConfirm = grabElementStyleButton('valid_yes', 'YES', '3.2rem', 'green')
      break
    case 'send':
      newStyleConfirm = grabElementStyleButton('send_request', 'send', '3.2rem', 'green')
      break
    default:
      throw Error('styleConfirm Error validation in --ModalPromptButton--')
  }

  return newStyleConfirm
})

const styleReject = computed(() => {
  let newStyleConfirm

  switch (props.typeMod) {
    case 'yes':
      newStyleConfirm = grabElementStyleButton('valid_no', 'NO', '3.2rem', '#ddd')
      break
    case 'send':
      newStyleConfirm = grabElementStyleButton('reject_request', 'reject', '3.2rem', 'green')
      break
    default:
      throw Error('styleConfirm Error rejection in --ModalPromptButton--')
  }

  return newStyleConfirm
})
</script>
<template>
  <div class="prompt_wrapper">
    <div class="prompt_content">
      <ul class="prompt_list">
        <li :key="i" v-for="(elt, i) in archiveParagraph">{{ elt }}</li>
      </ul>
      <div class="btn_wrapper">
        <ShortModalButtonA :style-infos="styleConfirm" :onClick="() => props.onDeeperClick(true)" />
        <ShortModalButtonA :style-infos="styleReject" :onClick="() => props.onDeeperClick(false)" />
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
</style>
