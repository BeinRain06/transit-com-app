<script setup lang="ts">
import { computed } from 'vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

const dataGetPurchaseOrder = computed(() => {
  let dataFetchInRequest = {
    dpt: 'maintenance',
    arrRscInside: [
      { id: 'material_1', label: 'resource_A', quantity: '3', approxUnitPrice: '25' },
      { id: 'material_2', label: 'resource_B', quantity: '5', approxUnitPrice: '14' },
      { id: 'material_3', label: 'resource_C', quantity: '7', approxUnitPrice: '18' },
      { id: 'material_4', label: 'resource_D', quantity: '2', approxUnitPrice: '49' }
    ],
    referenGet: '0956479496003'
  }
  return dataFetchInRequest
})

const totalPrice = computed(() => {
  let arrRsc = dataGetPurchaseOrder.value.arrRscInside
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
  <!--SubTemplateSupply Response-->
  <div class="subtemplate_supply">
    <div class="resources_template_content">
      <div class="rsc_main_question">
        <h2 class="text_query_label roboto-light">Purchase Order</h2>
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
              <span class="mx-2">{{ dataGetPurchaseOrder.dpt }}</span>
            </div>
            <div class="minitab_result_view w-full">
              <div class="table_content w-full my-2">
                <ul class="mini_tab_infos">
                  <li
                    :key="item.id"
                    class="resource_item"
                    v-for="item in dataGetPurchaseOrder.arrRscInside"
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
              <span class="mx-2">{{ dataGetPurchaseOrder.dpt }}</span>
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
                  v-for="item in dataGetPurchaseOrder.arrRscInside"
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
        <!--request id-->
        <div class="mt-10 mb-2 md:mb-6">
          <RequestOrFeedReference
            element="request"
            label="purchase_order"
            :id-fetch="dataGetPurchaseOrder.referenGet"
          />
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
}

@media (min-width: 640px) {
  .rsc_desc_title {
    @apply w-4/5 flex justify-between items-center;
  }

  .rsc_sweet_add {
    @apply w-1/5 h-full flex justify-center items-center px-2;
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
}
</style>
