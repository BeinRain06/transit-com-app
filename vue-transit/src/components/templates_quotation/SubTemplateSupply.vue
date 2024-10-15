<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import ShortModalButtonA from '../buttons/ShortModalButtonA.vue'
import ModalPromptButton from '../modals/ModalPromptForButton.vue'
import { playOnClickBtn, grabElementStyleButton } from '../snippets-function-ts/playClickButton'
import { SubTemplateStore } from '@/stores/subtemplate-store'

interface ISubText {
  newTitle: string
  textQuotation: string
}

interface ITemplate {
  mob: {
    id: string
    title: string
    modelInput: string
  }[][]
  desk: {
    id: string
    title: string
    modelInput: string
  }[][]
}

const props = defineProps<{ label: string }>()

const arrParagraphs: Ref<string[]> = ref([
  'Your Performance and Request will be thoroughly analyze before Reply.',
  'Are you sure you want to confirm the request ?'
])

const modelSubmit: Ref<boolean> = ref(false)

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
      subText.newTitle = 'Quotation engine component(s) for repairments'
      subText.textQuotation = 'Components'
      break
    default:
      throw Error('Something went wrong in SubTemplateSupply - labelIn')
  }

  return subText
})

const isMinus: Ref<boolean> = ref(false)

const arrToUseTemplate: ComputedRef<ITemplate> = computed(() => {
  const useSubTemplateStore = SubTemplateStore()

  return {
    mob: useSubTemplateStore.$state.arrInputMob,
    desk: useSubTemplateStore.$state.arrInputDesk
  }
})

function addRowTemplate() {
  // create a new row obj and push into **arrTempMob**
  // add **button minus** when clicked for the first time (v-if --isMinus)
}

function removeRowTemplate() {
  //remove the last item row until the count row remains === 3
  //when count == 3 remove **button minus** (v-if -isMinus)
}

function handleEndModal() {
  const baseFtSize = 13

  playOnClickBtn(baseFtSize)

  if (modelSubmit.value) {
    //do something --OK--
  } else {
    //do something --NO--
  }
}

function handleApplyOrEdit(isBtnApply: boolean) {
  const baseFtSize = 13

  playOnClickBtn(baseFtSize)

  if (isBtnApply) {
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
        <h3 class="roboto-light">{{ labelIn.newTitle }}</h3>
      </div>
      <div class="rsc_main_view w-full">
        <div class="py-1">
          <span class="font-semibold">Template</span>
        </div>
        <!--  HERE WE ARE -->
        <div class="rsc_template_mob block py-2 sm:hidden">
          <ul class="rsc_mob_in">
            <li
              class="mob_template_frame"
              :key="item[i].id"
              v-for="(item, i) in arrToUseTemplate.mob"
            >
              <div>
                <h3 class="roboto-light">{{ item[i].title }}</h3>
                <input class="mob_frame_input" :name="item[i].title" v-model="item[i].modelInput" />
              </div>
              <div>
                <h3 class="roboto-light">{{ item[i].title }}</h3>
                <input class="mob_frame_input" :name="item[i].title" v-model="item[i].modelInput" />
              </div>
              <div>
                <h3 class="roboto-light">{{ item[i].title }}</h3>
                <input class="mob_frame_input" :name="item[i].title" v-model="item[i].modelInput" />
              </div>
            </li>
          </ul>
          <div class="w-full flex justify-end items-center">
            <div v-if="isMinus">
              <button
                class="w-10 py-1 text-white rounded bg-gray-600"
                @click.prevent="removeRowTemplate"
              >
                &minus;
              </button>
            </div>
            <div>
              <button
                class="w-10 py-1 text-white rounded bg-red-600"
                @click.prevent="addRowTemplate"
              >
                &plus;
              </button>
            </div>
          </div>
        </div>
        <div class="rsc_template_desk w-full hidden sm:block">
          <div class="rsc_main_header h-6 w-full flex justify-center gap-1">
            <ul class="rsc_desc_title">
              <li>
                <h3>{{ labelIn.textQuotation }}</h3>
              </li>
              <li><h3>Quantity</h3></li>
              <li><h3>approximate price</h3></li>
            </ul>
            <div class="h-full flex justify-start items-center px-2">
              <div>
                <button class="w-8 py-2 text-white rounded bg-red-600" @click="addRowTemplate">
                  &plus;
                </button>
              </div>
              <div v-if="isMinus">
                <button
                  class="w-8 py-2 text-white rounded bg-red-600"
                  @click.prevent="removeRowTemplate"
                >
                  &minus;
                </button>
              </div>
            </div>
          </div>
          <ul class="rsc_main_template">
            <li class="rsc_column" :key="item[i].id" v-for="(item, i) in arrToUseTemplate.desk">
              <div class="rsc_column_item">
                <input
                  type="text"
                  :id="item[i].title"
                  class="col_rsc"
                  :name="item[i].title"
                  v-model="item[i].modelInput"
                />
              </div>
              <div class="rsc_column_item">
                <input
                  type="text"
                  :id="item[i].title"
                  class="col_rsc"
                  :name="item[i].title"
                  v-model="item[i].modelInput"
                />
              </div>
              <div class="rsc_column_item">
                <input
                  type="text"
                  :id="item[i].title"
                  class="col_rsc"
                  :name="item[i].title"
                  v-model="item[i].modelInput"
                />
              </div>
            </li>
          </ul>
          <!-- Next Step after HERE WE ARE -->
          <div class="rsc_template_button">
            <div class="rsc_display_toggle">
              <div class="see_template">
                <span>see template</span>
                <div>&raquo;</div>
              </div>
            </div>
            <ul class="template_btn_wrap">
              <li class="template_btn">
                <ShortModalButtonA
                  :style-infos="
                    grabElementStyleButton('apply_template', 'APPLY', true, '4rem', 'green', '#fff')
                  "
                  :on-click="() => handleApplyOrEdit(true)"
                />
              </li>

              <li class="template_btn">
                <ShortModalButtonA
                  :style-infos="
                    grabElementStyleButton('edit_template', 'EDIT', false, '4rem', '#ddd', '#444')
                  "
                  :on-click="() => handleApplyOrEdit(false)"
                />
              </li>
            </ul>
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
              v-model="modelSubmit"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  ul {
    list-style: none;
  }

  .resources_template_content {
    width: 100%;
    margin: 0 auto;
  }

  /** template **/
  .rsc_main_question {
    width: 100%;
    font-size: calc(12px + 0.15vw);
    padding: 0.5rem 0;
    @apply flex justify-start items-center;
  }

  .rsc_mob_in .mob_frame_input {
    width: 100%;
    height: 2rem;
    margin: 0.25rem 0 1rem;
    border-radius: 5px;
    @apply border border-solid border-gray-300;
  }
}
</style>
