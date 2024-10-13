<script setup lang="ts">
import { reactive, computed } from 'vue'
import type { ComputedRef } from 'vue'
import ShortModalButtonB from '../buttons/ShortModalButtonB.vue'
import { grabElementStyleButton } from '../snippets-function-ts/playClickButton'

const props = defineProps<{
  typeMod: string
  listParagraph: string[]
  onDeeperClick: (isBtnValid: boolean) => any
}>()

const isBtnValid: { notCase: boolean; case: boolean } = reactive({
  notCase: false,
  case: true
})

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
    case 'ok':
      newStyleConfirm = grabElementStyleButton('send_request', 'OK', '3.2rem', 'green')
      break
    case 'confirm':
      newStyleConfirm = grabElementStyleButton('record_confirm', 'confirm', '4rem', 'green')
      break
    case 'submit':
      newStyleConfirm = grabElementStyleButton('confirm_request', 'Submit', '4rem', 'green')
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
      newStyleConfirm = grabElementStyleButton('reject_request', 'reject', '3.2rem', '#ddd')
      break
    case 'confirm':
      newStyleConfirm = grabElementStyleButton('record_cancel', 'cancel', '4rem', '#ddd')
      break
    case 'submit':
      newStyleConfirm = grabElementStyleButton('cancel_request', 'cancel', '4rem', '#ddd')
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
        <ShortModalButtonB
          :style-infos="styleConfirm"
          :is-btn-submit="isBtnValid.case"
          :onClick="() => props.onDeeperClick(isBtnValid.case)"
        />
        <ShortModalButtonB
          :style-infos="styleReject"
          :is-btn-submit="isBtnValid.notCase"
          :onClick="() => props.onDeeperClick(isBtnValid.notCase)"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
</style>
