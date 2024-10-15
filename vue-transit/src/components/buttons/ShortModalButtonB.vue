<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  styleInfos: IStyleInfos
  onClick: () => void
}>()

const storeBtn = computed(() => {
  const buttonProps = props.styleInfos
  return buttonProps
})

const styleFn = computed(() => {
  const buttonProps = props.styleInfos

  return {
    width: buttonProps.width,
    padding: buttonProps.padding,
    color: buttonProps.textColor,
    backgroundColor: buttonProps.bgColor,
    borderRadius: buttonProps.borderRadius,
    transition: buttonProps.transition
  }
})

export interface IStyleInfos {
  btnId: string
  btnLab: string
  width: string
  padding: string
  defaultBgColor: string
  bgColor: string
  borderRadius: string
  textColor: string
  fontSize: string
  transition: string
}
</script>
<template>
  <div class="btn_wrapper w-auto h-auto" style="transition: all 1s ease">
    <button
      :id="storeBtn.btnId"
      class="btn_template w-full py-2"
      :style="styleFn"
      @click.prevent="() => props.onClick()"
    >
      {{ storeBtn.btnLab }}
    </button>
  </div>
</template>
<style scoped></style>
