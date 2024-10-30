<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

const props = defineProps<{ label: string }>()

const labText: ComputedRef<{ text: string; symbol: string }> = computed(() => {
  let inside: { text: string; symbol: string } = {
    text: '',
    symbol: ''
  }

  switch (props.label) {
    case 'request':
      inside.text = 'Request'
      inside.symbol = '?'
      break
    case 'feedback_one':
      inside.text = 'About feedback'
      inside.symbol = 'i'
      break
    case 'feedback_two':
      inside.text = 'feedback queries'
      inside.symbol = '?'
      break
    case 'response':
      inside.text = 'Response'
      inside.symbol = '&raquo;'
      break
    case 'result':
      inside.text = 'see result'
      inside.symbol = '&raquo;'
      break
    case 'details':
      inside.text = 'details'
      inside.symbol = 'i'
      break
    case 'board':
      inside.text = ' Template'
      inside.symbol = ''
      break
    case 'template':
      inside.text = 'watch template'
      inside.symbol = '&raquo;'
      break
    case 'resouce_one':
      inside.text = 'Needed Resources'
      inside.symbol = 'i'
      break
    case 'needs':
      inside.text = 'items in needs'
      inside.symbol = 'i'
      break
    case 'salary':
      inside.text = 'Salary Advance'
      inside.symbol = 'i'
      break
    case 'bonus':
      inside.text = 'Unpaid Bonus'
      inside.symbol = 'i'
      break
    case 'purchase':
      inside.text = 'Quotation'
      inside.symbol = 'i'
      break
    case 'repairment':
      inside.text = 'Request Repairment'
      inside.symbol = 'i'
      break
    case 'human':
      inside.text = 'Human Integration'
      inside.symbol = 'i'
      break
    default:
      throw Error('Error labText In SubSecondaryTitle')
  }

  return inside
})
</script>
<template>
  <div class="req_lab_container">
    <ul class="request_lab flex gap-1">
      <li>
        <span>{{ labText.text }}</span>
      </li>
      <li>
        <div class="w-5 h-5 bg-gray-300 grid place-items-center" style="border-radius: 50%">
          <span>{{ labText.symbol }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
