<script setup lang="ts">
import { reactive, computed } from 'vue'
import type { ComputedRef } from 'vue'

const props = defineProps<{
  typeMod: string
  listParagraph: any
  onDeeperClick: () => void
}>()

const modelSubmittion = defineModel()

const isBtnValid: { notCase: boolean; case: boolean } = reactive({
  notCase: false,
  case: true
})

const archiveParagraph: ComputedRef<any> = computed(() => {
  const allParagraph = props.listParagraph

  console.log(allParagraph)
  return allParagraph
})

const labelButton: ComputedRef<{ titleConfirm: string; titleCancel: string }> = computed(() => {
  let label = {
    titleConfirm: '',
    titleCancel: ''
  }

  switch (props.typeMod) {
    case 'yes':
      label.titleConfirm = 'Yes'
      label.titleCancel = 'No'
      break
    case 'send':
      label.titleConfirm = 'Send'
      label.titleCancel = 'Cancel'
      break
    case 'submit':
      label.titleConfirm = 'Submit'
      label.titleCancel = 'Reject'
      break
    default:
      throw Error('Something is fishy in ModalPromptButton Component!')
  }

  return label
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
      <ul
        class="prompt_list w-full text-sm md:text-base mx-auto flex flex-col justify-center items-center gap-1 md:gap-2"
      >
        <li :key="i" v-for="(elt, i) in archiveParagraph">{{ elt }}</li>
      </ul>
      <div class="btn_wrapper w-4/5 mx-auto my-4 md:my-8 flex justify-center gap-2">
        <button
          class="btn_gen_green_2 modal_btn_size w-16 md:w-40 text-center"
          @click="() => handleSubmitOrNot(isBtnValid.case)"
        >
          {{ labelButton.titleConfirm }}
        </button>

        <button
          class="btn_gen_drop_2 modal_btn_size w-16 md:w-40 text-center"
          @click="() => handleSubmitOrNot(isBtnValid.notCase)"
        >
          {{ labelButton.titleCancel }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}

.modal_btn_size {
  font-size: calc(12px + 0.25vw);
}
</style>
