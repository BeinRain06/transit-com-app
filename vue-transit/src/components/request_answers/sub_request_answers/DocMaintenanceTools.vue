<script setup lang="ts">
import { computed } from 'vue'
import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

const dataGetMaintTools = computed(() => {
  let dataFetchInRequest = {
    dptInDemand: 'maintenance',
    toolsNessity: 'for troubleshooting motor misbehavior sounds of the engine bus **kalago CT**',
    arrRscInside: [
      { id: 'material_1', label: 'resource_A', quantity: '3', approxUnitPrice: '25' },
      { id: 'material_2', label: 'resource_B', quantity: '5', approxUnitPrice: '14' },
      { id: 'material_3', label: 'resource_C', quantity: '7', approxUnitPrice: '18' },
      { id: 'material_4', label: 'resource_D', quantity: '2', approxUnitPrice: '49' }
    ],
    agentIdAnalyser: '045552900',
    dptAnalyzer: 'technical assistance',
    referenceGet: '0006542865426',
    date: '12-03-24'
  }
  return dataFetchInRequest
})

const totalPrice = computed(() => {
  let arrRsc = dataGetMaintTools.value.arrRscInside
  const total = arrRsc.reduce(
    (
      acc: number,
      item: { id: string; label: string; quantity: string; approxUnitPrice: string }
    ) => {
      let eltPrice = +item.approxUnitPrice
      return acc + eltPrice
    },
    0
  )

  return total
})
</script>
<template>
  <div id="request_tools" class="maintenance_tools_container">
    <div class="main_title">
      <div class="main_title_ct w-full text-center my-2 font-bold">
        <span class="font-bold md:text-lg">Maintenance Tools</span>
      </div>
    </div>
    <div class="my-4 md:my-8">
      <SubSecondaryTitle label="request" />
    </div>
    <div class="tools_necessity my-2">
      <div class="mb-2">
        <span class="roboto-light">Describe Tools Necessity</span>
      </div>
      <p class="tools_text_need w-full px-2 py-3 border border-gray-300 rounded">
        {{ dataGetMaintTools.toolsNessity }}
      </p>
    </div>
    <!--SubtemplateSupply Response-->
    <div class="subtemplate_supply">
      <div class="resources_template_content">
        <div class="rsc_main_question">
          <h2 class="text_query_label roboto-light">Which Maintenance Tools Are in Need ?</h2>
        </div>
        <div class="rsc_main_view w-full">
          <div class="py-1 sm:py-4 sm:mt-8">
            <span class="font-semibold">Template</span>
          </div>
          <!--HERE WE ARE MOB-->
          <div class="rsc_template_mob block py-2 sm:hidden">
            <div class="table_result_wrap">
              <div class="result_gen_title py-2">
                <span>Service in Demands :</span>
                <span class="mx-2">{{ dataGetMaintTools.dptInDemand }}</span>
              </div>
              <div class="result_gen_title py-2">
                <span>Necessity :</span>
                <span class="mx-2">{{ dataGetMaintTools.toolsNessity }}</span>
              </div>
              <div class="minitab_result_view w-full">
                <div class="table_content w-full my-2">
                  <ul class="mini_tab_infos">
                    <li
                      :key="item.id"
                      class="resource_item w-full grid place-items-center px-4 pt-6 pb-8 my-2 border border-solid border-gray-300 rounded"
                      v-for="item in dataGetMaintTools.arrRscInside"
                    >
                      <div class="mini_tab_box">
                        <div class="min_row_spec"><span>Resource</span></div>
                        <div class="min_row_elt">
                          <p>{{ item.label }}</p>
                        </div>
                      </div>
                      <div class="mini_tab_box">
                        <div class="min_row_spec"><span>Quantity</span></div>
                        <div class="min_row_elt">
                          <p>{{ item.quantity }}</p>
                        </div>
                      </div>
                      <div class="mini_tab_box">
                        <div class="min_row_spec"><span>approx.price</span></div>
                        <div class="min_row_elt">
                          <p>
                            <span>$</span> <span>{{ item.approxUnitPrice }}</span>
                          </p>
                        </div>
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
                        <p>
                          <span>$</span> <span>{{ totalPrice }}</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--HERE WE ARE DESK-->
          <div class="rsc_template_desk w-full hidden sm:block">
            <div class="table_result_wrap my-4">
              <div class="result_gen_title py-2">
                <span>Service Demands :</span>
                <span class="mx-2">{{ dataGetMaintTools.dptInDemand }}</span>
              </div>
              <div class="result_gen_title py-2">
                <span>Necessity :</span>
                <span class="mx-2">{{ dataGetMaintTools.toolsNessity }}</span>
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
                  <ul
                    class="table_element_infos"
                    :key="item.id"
                    v-for="item in dataGetMaintTools.arrRscInside"
                  >
                    <li>{{ item.label }}</li>
                    <li>{{ item.quantity }}</li>
                    <li>{{ item.approxUnitPrice }}</li>
                  </ul>
                </div>
                <div>
                  <ul class="table_element_infos" data-case="total">
                    <li>Total Price</li>
                    <li></li>
                    <li>
                      <span>$</span> <span>{{ totalPrice }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Employee Infos-->
    <hr class="w-full border border-dashed border-gray-300 mb-2" />
    <form class="employee_details my-4 md:my-8">
      <div class="employee_infos_wrap w-full">
        <div class="employee_info">
          <span class="roboto-light">Agent Id</span>
          <p id="agent_id" class="employee_input">{{ dataGetMaintTools.agentIdAnalyser }}</p>
        </div>
        <div class="employee_info">
          <span class="roboto-light">Department</span>
          <p id="agent_dpt" class="employee_input">{{ dataGetMaintTools.dptAnalyzer }}</p>
        </div>
      </div>
    </form>
    <!--Request id-->
    <div>
      <RequestOrFeedReference
        element="request"
        label="maintenance-tools"
        :id-fetch="dataGetMaintTools.referenceGet"
      />
    </div>
    <!--Date-->
    <div class="krub-light-italic mb-2 md:mb-4" style="font-size: calc(12px + 0.15vw)">
      <p>
        <span>Date :</span> <span class="mx-2">{{ dataGetMaintTools.date }}</span>
      </p>
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

  .text_size_one {
    font-size: calc(12px + 0.25vw);
  }

  /**maintenance container **/
  .maintenance_tools_container {
    width: 100vw;
    padding: 2rem 1rem 1rem;
    margin: 0 auto;
  }

  /** template **/
  .rsc_main_question {
    width: 100%;
    font-size: calc(12px + 0.15vw);
    padding: 0.5rem 0;
    @apply flex justify-start items-center;
  }

  /** see template **/

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
    width: 40%;
    min-width: 7rem;
    height: 100%;
    padding: 0 0.5rem;
    box-shadow: 2px 3px 5px #f3ad44;
    @apply text-white bg-blue-800 rounded;
  }

  .mini_tab_box .min_row_total {
    margin: 0 0.5rem;
    box-shadow: 2px 3px 5px #4087f0;
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

  /** employee details **/
  .employee_info {
    @apply w-full mb-4 flex flex-col gap-2;
    font-size: calc(14px + 0.25vw);
  }

  .employee_info .employee_input {
    @apply w-full h-7 p-2 flex justify-start items-center border border-gray-400;
    border-radius: 5px;
  }
}

@media (min-width: 460px) {
  /**maintenance container **/
  .maintenance_tools_container {
    width: 100vw;
    padding: 2.2rem 2rem 1rem;
    margin: 0 auto;
  }

  .mini_tab_box .min_row_elt,
  .mini_tab_box .min_row_price {
    padding-left: 15%;
    text-align: center;
  }
}

@media (min-width: 640px) {
  .rsc_desc_title {
    @apply w-4/5 flex justify-between items-center;
  }

  .rsc_sweet_add {
    @apply w-1/5 h-full flex justify-center items-center px-2;
  }

  /**maintenance container **/
  .maintenance_tools_container {
    width: 100vw;
    max-width: 1045px;
  }

  /** template supply desk**/

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

  /** employee details **/

  .employee_infos_wrap {
    display: flex;
    justify-content: center;
    flex-basis: 50%;
    gap: 1rem;
  }
}
</style>
