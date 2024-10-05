<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { playOnClickBtn, grabElementStyleButton } from '../snippets-function-ts/playOnclickButton'
import ModalPromptButton from '../modals/ModalPromptButton.vue'

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
          <div class="btn_wrapper">
            <ShortModalButtonA
              :style-infos="
                grabElementStyleButton('proposal_validation', 'APPLY', '3.2rem', 'green')
              "
              :onClick="handleApplication(true)"
            />
            <ShortModalButtonA
              :style-infos="grabElementStyleButton('proposal_rejection', 'EDIT', '3.2rem', '#ddd')"
              :onClick="handleApplication(false)"
            />
          </div>
        </div>
        <div class="table_result_view">
          <div>
            <span>Service Demands</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Resources</th>
                <th>Quantity</th>
                <th>approximate price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Resource A</td>
                <td>Qty A</td>
                <td>Price A</td>
              </tr>
              <tr>
                <td>Resource B</td>
                <td>Qty B</td>
                <td>Price B</td>
              </tr>
              <tr>
                <td>Resource C</td>
                <td>Qty C</td>
                <td>Price C</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total Price</td>
                <td></td>
                <td>Price D</td>
              </tr>
            </tfoot>
          </table>
          <div class="valid_btn_wrapper">
            <button class="valid_btn">validate</button>
            <ShortModalButtonA
              :style-infos="
                grabElementStyleButton('process_validation', 'Validate', '3.2rem', 'green')
              "
              :onClick="handleValidation"
            />
          </div>
          <ModalPromptButton
            typeMod="send"
            :list-paragraph="arrParagraphs"
            :on-deeper-click="handleEndModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
