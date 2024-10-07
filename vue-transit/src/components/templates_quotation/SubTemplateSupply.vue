<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import ShortModalButtonA from '../buttons/ShortModalButtonA.vue'

import ModalPromptButton from '../modals/ModalPromptForButton.vue'

import { playOnClickBtn, grabElementStyleButton } from '../snippets-function-ts/playClickButton'

interface ISubText {
  newTitle: string
  textQuotation: string
}

const props = defineProps<{ label: string }>()

const arrParagraphs: Ref<string[]> = ref([
  'Your Performance and Request will be thoroughly analyze before Reply.',
  'Are you sure you want to confirm the request ?'
])

const labelIn: ComputedRef<ISubText> = computed(() => {
  let subText: ISubText = {
    newTitle: '',
    textQuotation: ''
  }

  switch (props.label) {
    case 'resource':
      subText.newTitle = 'What Are Resources To Supply ?'
      subText.textQuotation = 'Resources'
      break
    case 'tools':
      subText.newTitle = 'Which Maintenance Tools Are in Need ?'
      subText.textQuotation = 'Tools'
      break
    case 'engine':
      subText.newTitle = 'Fill Quotation with engine component(s) for repairments'
      subText.textQuotation = 'Components'
      break
    default:
      throw Error('Something went wrong in SubTemplateSupply - labelIn')
  }

  return subText
})

function handleEndModal(isBtnValid: boolean) {
  const baseFtSize = 13

  playOnClickBtn(baseFtSize)

  if (isBtnValid) {
    //do something --OK--
  } else {
    //do something --NO--
  }
}

function handleApplyOrEdit(isBtnValid: boolean): any {
  const baseFtSize = 13

  playOnClickBtn(baseFtSize)

  if (isBtnValid) {
    //do some action --APPLY--
  } else {
    //do something --EDIT--
  }
}
</script>
<template>
  <div class="resources_template_container">
    <div class="resources_template_content">
      <div class="rsc_main_question">
        <h3>{{ labelIn.newTitle }}</h3>
      </div>
      <div class="rsc_main_view">
        <div>
          <span>Template</span>
        </div>
        <div class="rsc_template">
          <div class="rsc_main_header">
            <ul class="rsc_main_title">
              <li>
                <h3>{{ labelIn.textQuotation }}</h3>
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
            <div class="template_btn_wrap">
              <ShortModalButtonA
                :style-infos="grabElementStyleButton('apply_template', 'YES', '3.2rem', 'green')"
                :on-click="() => handleApplyOrEdit(true)"
              />
              <ShortModalButtonA
                :style-infos="grabElementStyleButton('edit_template', 'EDIT', '3.2rem', '#ddd')"
                :on-click="() => handleApplyOrEdit(true)"
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
            </div>
            <ModalPromptButton
              typeMod="yes"
              :list-paragraph="arrParagraphs"
              :on-deeper-click="handleEndModal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
