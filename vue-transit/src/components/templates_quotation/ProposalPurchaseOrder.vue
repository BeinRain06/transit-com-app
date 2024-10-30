<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { playOnClickBtn, grabElementStyleButton } from '../snippets-function-ts/playClickButton'
import ModalPromptButton from '../modals/ModalPromptForButton.vue'

const props = defineProps<{
  labelDpt: string
}>()

const arrParagraphs: Ref<string[]> = ref([
  'Your Purchase Order is about to be send/registered to accounting service',
  'Do you want to confirm ?'
])

function handleEndModal(isBtnValid: boolean) {
  if (isBtnValid) {
    //do something --OK--
  } else {
    //do something --NO--
  }
}

function handleApplication(isBtnValid: boolean): any {
  const baseFtSize = 13

  playOnClickBtn(baseFtSize)

  if (isBtnValid) {
    //do some action --VALIDATION--
  } else {
    //do something --REJECTION--
  }
}

function handleValidation() {
  //do some action
}
</script>
<template>
  <div class="proposal_container">
    <div class="rsc_main_view">
      <div>
        <span>Purchase Order - {{ props.labelDpt }}</span>
      </div>
      <div class="rsc_template">
        <div class="rsc_main_header">
          <ul class="rsc_main_title">
            <li>
              <h3>purchase</h3>
            </li>
            <li><h3>Quantity</h3></li>
            <li><h3>approximate price</h3></li>
          </ul>
          <button>&plus;</button>
        </div>
        <ul class="rsc_main_template">
          <li class="rsc_row">
            <div class="rsc_column">
              <div class="rsc_column_item">
                <input type="text" id="col_rsc_1" name="resouce_1" />
              </div>
              <div class="rsc_column_item">
                <input type="text" id="col_rsc_2" name="resouce_2" />
              </div>
              <div class="rsc_column_item">
                <input type="text" id="col_rsc_3" name="resouce_3" />
              </div>
            </div>
          </li>
          <li class="rsc_row">
            <div class="rsc_column">
              <div class="rsc_column_item">
                <input type="text" id="col_qty_1" name="quantity_1" />
              </div>
              <div class="rsc_column_item">
                <input type="text" id="col_qty_2" name="quantity_2" />
              </div>
              <div class="rsc_column_item">
                <input type="text" id="col_qty_3" name="quantity_3" />
              </div>
            </div>
          </li>
          <li class="rsc_row">
            <div class="rsc_column">
              <div class="rsc_column_item">
                <input type="text" id="col_price_1" name="price_1" />
              </div>
              <div class="rsc_column_item">
                <input type="text" id="col_price_2" name="price_2" />
              </div>
              <div class="rsc_column_item">
                <input type="text" id="col_price_3" name="price_3" />
              </div>
            </div>
          </li>
        </ul>
        <div class="rsc_template_button">
          <div class="rsc_display_toggle">
            <div class="see_template">
              <span>see template</span>
              <div>&raquo;</div>
            </div>
          </div>
          <div class="subtemplate_wrapper w-full">
            <SubTemplateSupply label="engine" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
