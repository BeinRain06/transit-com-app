<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { playOnClickBtn } from '../snippets-function-ts/playClickButton'
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

const props = defineProps<{ label: string; isDocPage?: boolean }>()

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
    case 'ordering':
      subText.newTitle = 'Purchase Order'
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
  console.log()
}

function removeRowTemplate() {
  console.log()
}

function handleApplyOrEdit(isBtnApply: boolean) {
  if (isBtnApply) {
    console.log()
  } else {
    console.log()
  }
}
</script>
<template>
  <div class="resources_template_container">
    <div class="resources_template_content">
      <div class="rsc_main_question">
        <h2 class="text_query_label roboto-light">{{ labelIn.newTitle }}</h2>
      </div>
      <div class="rsc_main_view w-full">
        <div class="py-1 sm:py-4 sm:mt-8">
          <span class="font-semibold">Template</span>
        </div>

        <div class="rsc_template_mob block py-2 sm:hidden">
          <ul class="rsc_mob_in" v-if="!props.isDocPage">
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

          <div class="rsc_display_toggle my-4">
            <div class="see_template">
              <span>see template</span>
              <div class="inline-block mx-2">&raquo;</div>
            </div>
          </div>

          <div class="table_result_wrap">
            <div class="result_gen_title py-2">
              <span>Service Demands</span>
            </div>
            <div class="minitab_result_view w-full">
              <div class="table_content w-full my-2">
                <ul class="mini_tab_infos">
                  <li>
                    <div class="mini_tab_box">
                      <div class="min_row_spec"><span>Resource</span></div>
                      <div class="min_row_elt"><p>ResourceA</p></div>
                    </div>
                    <div class="mini_tab_box">
                      <div class="min_row_spec"><span>Quantity</span></div>
                      <div class="min_row_elt"><p>QuantityA</p></div>
                    </div>
                    <div class="mini_tab_box">
                      <div class="min_row_spec"><span>approx.price</span></div>
                      <div class="min_row_elt"><p>PriceA</p></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mini_tab_infos" data-case="total">
                <ul class="mini_tab_box">
                  <li>
                    <div class="min_row_total"><span>Total Price</span></div>
                  </li>
                  <li>
                    <div class="min_row_price">
                      <p>Price D</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <ul class="template_btn_wrap">
              <li class="template_btn w-full">
                <button class="btn_gen_green w-full" @click="() => handleApplyOrEdit(true)">
                  APPLY
                </button>
              </li>

              <li class="template_btn w-full">
                <button class="btn_gen_drop w-full" @click="() => handleApplyOrEdit(false)">
                  EDIT
                </button>
              </li>
            </ul>
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
            <div class="rsc_sweet_add">
              <div>
                <button
                  class="w-8 py-2 sm:w-10 sm:py-0 text-white rounded bg-red-600"
                  @click="addRowTemplate"
                >
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
          <ul class="rsc_main_template w-full">
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

          <div class="rsc_template_button">
            <div class="rsc_display_toggle">
              <div class="see_template">
                <span>see template</span>
                <div class="inline-block mx-2">&raquo;</div>
              </div>
            </div>
            <div class="table_result_wrap my-4">
              <div class="result_gen_title py-2">
                <span>Service Demands</span>
              </div>
              <div class="table_result_view w-full">
                <div class="table_head w-full">
                  <ul class="table_head_title">
                    <li>Resources</li>
                    <li>Quantity</li>
                    <li>approximate price</li>
                  </ul>
                </div>
                <div class="table_content w-full my-2">
                  <ul class="table_element_infos">
                    <li>Resource A</li>
                    <li>Qty A</li>
                    <li>Price A</li>
                  </ul>
                  <ul class="table_element_infos">
                    <li>Resource B</li>
                    <li>Qty B</li>
                    <li>Price B</li>
                  </ul>
                  <ul class="table_element_infos">
                    <li>Resource C</li>
                    <li>Qty C</li>
                    <li>Price C</li>
                  </ul>
                </div>
                <div>
                  <ul class="table_element_infos" data-case="total">
                    <li>Total Price</li>
                    <li></li>
                    <li>Price D</li>
                  </ul>
                </div>
              </div>
            </div>
            <ul class="template_btn_wrap">
              <li class="template_btn w-full">
                <button class="btn_gen_green w-full" @click="() => handleApplyOrEdit(true)">
                  APPLY
                </button>
              </li>

              <li class="template_btn w-full">
                <button class="btn_gen_drop w-full" @click="() => handleApplyOrEdit(false)">
                  EDIT
                </button>
              </li>
            </ul>
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

  .text_query_label {
    font-size: calc(14px + 0.15vw);
  }

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

  .mini_tab_infos {
    padding: 1rem 0.75rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    @apply w-full flex flex-col  gap-2 border border-solid border-gray-300;
  }

  .mini_tab_infos[data-case='total'] {
    @apply border-orange-400;
  }

  .mini_tab_infos .mini_tab_box {
    width: 100%;
    height: 3.5rem;
    margin: 0.25rem 0;
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    gap: 0.5rem;
  }

  .mini_tab_box .min_row_spec,
  .mini_tab_box .min_row_total {
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
    @apply text-white bg-gray-500;
  }

  .mini_tab_box .min_row_total {
    @apply text-white bg-orange-700;
  }

  .mini_tab_box .min_row_elt,
  .mini_tab_box .min_row_price {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .mini_tab_box .min_row_price {
    padding: 0.5rem 1rem;
    text-align: right;
  }

  .template_btn_wrap {
    width: 64%;
    padding: 1.25rem 0 1rem;
    margin: 0 auto;
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
}

@media (min-width: 640px) {
  .rsc_desc_title {
    @apply w-4/5 flex justify-between items-center;
  }

  .rsc_sweet_add {
    @apply w-1/5 h-full flex justify-center items-center px-2;
  }

  .rsc_main_template .rsc_column {
    width: 100%;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
    column-gap: 8px;
  }

  .rsc_column_item input {
    width: 100%;
    height: 2.2rem;
    border-radius: 5px;
    @apply border border-solid border-gray-300;
  }

  .table_result_view .table_head_title {
    width: 100%;
    padding: 0.25rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .table_head_title li:nth-of-type(2),
  .table_head_title li:nth-of-type(3) {
    text-align: center;
  }

  .table_element_infos {
    width: 100%;
    padding: 0.5rem 0;
    margin: 0.35rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 3px;
    @apply border border-solid border-gray-300;
  }

  .table_element_infos[data-case='total'] {
    @apply border-blue-300;
  }

  .table_element_infos li:nth-of-type(1) {
    padding-left: 0.5rem;
  }

  .table_element_infos li:nth-of-type(2),
  .table_element_infos li:nth-of-type(3) {
    text-align: center;
  }

  .template_btn_wrap {
    width: 100%;
    gap: 0.5rem;
  }
}
</style>
