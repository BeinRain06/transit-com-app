<script setup lang="ts">
import { reactive, computed } from 'vue'
import type { ComputedRef } from 'vue'
import ShortModalButtonB from '../buttons/ShortModalButtonB.vue'
import { grabElementStyleButtonPrompt } from '../snippets-function-ts/playClickButton'

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

const styleConfirm = computed(() => {
  let newStyleConfirm

  switch (props.typeMod) {
    case 'yes':
      newStyleConfirm = grabElementStyleButtonPrompt('valid_yes', 'YES', true, '3.2rem', 'green')
      break
    case 'send':
      newStyleConfirm = grabElementStyleButtonPrompt(
        'send_request',
        'send',
        true,
        '3.2rem',
        'green'
      )
      break
    case 'ok':
      newStyleConfirm = grabElementStyleButtonPrompt('send_request', 'OK', true, '3.2rem', 'green')
      break
    case 'confirm':
      newStyleConfirm = grabElementStyleButtonPrompt(
        'record_confirm',
        'confirm',
        true,
        '4rem',
        'green'
      )
      break
    case 'submit':
      newStyleConfirm = grabElementStyleButtonPrompt(
        'confirm_request',
        'Submit',
        true,
        '4rem',
        'green'
      )
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
      newStyleConfirm = grabElementStyleButtonPrompt('valid_no', 'NO', false, '3.2rem', '#ddd')
      break
    case 'send':
      newStyleConfirm = grabElementStyleButtonPrompt(
        'reject_request',
        'reject',
        false,
        '3.2rem',
        '#ddd'
      )
      break
    case 'confirm':
      newStyleConfirm = grabElementStyleButtonPrompt(
        'record_cancel',
        'cancel',
        false,
        '4rem',
        '#ddd'
      )
      break
    case 'submit':
      newStyleConfirm = grabElementStyleButtonPrompt(
        'cancel_request',
        'cancel',
        false,
        '4rem',
        '#ddd'
      )
      break
    default:
      throw Error('styleConfirm Error rejection in --ModalPromptButton--')
  }

  return newStyleConfirm
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
      <div class="btn_wrapper">
        <ShortModalButtonB
          :style-infos="styleConfirm"
          :on-click="() => handleSubmitOrNot(isBtnValid.case)"
        />
        <ShortModalButtonB
          :style-infos="styleReject"
          :on-click="() => handleSubmitOrNot(isBtnValid.notCase)"
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
