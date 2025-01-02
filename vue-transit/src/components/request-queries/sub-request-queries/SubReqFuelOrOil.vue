<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

const fuelAsInput: Ref<HTMLInputElement | undefined> = ref()
const oilAsInput: Ref<HTMLInputElement | undefined> = ref()

interface Iliquid {
  status: boolean
  element: string
}

const liquid: Iliquid = reactive({
  status: true,
  element: ''
})

const substance: {
  fuel: boolean
  oil: boolean
} = reactive({
  fuel: false,
  oil: false
})

function chooseFuelOrOIl() {
  if (fuelAsInput.value?.checked) {
    liquid.element = 'fuel'
  } else if (oilAsInput.value?.checked) {
    liquid.element = 'oil'
  }
}

let isSubmitted: Ref<boolean> = ref(false)

const referenceGet: ComputedRef<string> = computed(() => {
  let newRef: string = ''
  if (isSubmitted.value) {
    console.log()
  }
  return newRef
})

function handleSubmit() {
  console.log()
}
</script>
<template>
  <div id="request_fuel_oil" class="fuel_oil_container w-screen">
    <div class="fuel_oil_content">
      <div class="liquid_request my-4 flex justify-center md:justify-end">
        <h3 class="gen_liquid_title py-2 px-4 krub-regular-italic">Liquid Request</h3>
      </div>
      <div>
        <SubSecondaryTitle label="details" />
      </div>
      <form class="details_liquid_demand w-full py-2 mb-4">
        <div class="details_car">
          <div class="liquid_demand_item">
            <label for="driver" class="demand_label">
              <div class="flex flex-col">
                <p>Driver id</p>
                <span class="text-xs">(Do not share with anyone)</span>
              </div>
            </label>
            <input type="text" id="driver" name="driver" class="demand_input" />
          </div>
          <div class="liquid_demand_item">
            <label for="engine" class="demand_label">Engine local Name</label>
            <input type="text" id="engine" name="engine" class="demand_input" />
          </div>
        </div>
        <div class="demand_spec_liquid">
          <p>Which engine liquid do you request ?</p>
          <div class="spec_liquid_wrap w-full" @click="chooseFuelOrOIl">
            <div class="spec_liquid_elt">
              <input
                type="checkbox"
                id="check_fuel"
                class="check_liquid"
                data-liquid="fuel"
                :checked="substance.fuel"
              />
              <span>Fuel(Diesel/Gazoil)</span>
            </div>
            <div class="spec_liquid_elt">
              <input
                type="checkbox"
                id="check_oil"
                class="check_liquid"
                data-liquid="oil"
                :checked="substance.oil"
              />
              <span>Motor Oil</span>
            </div>
          </div>
        </div>
        <div class="liquid_ref_wrap">
          <div id="liquid_type" class="liquid_demand_item" v-if="liquid.status">
            <label :for="liquid.element" class="demand_label"
              >{{ liquid.element.charAt(0).toUpperCase() + liquid.element.slice(1) }} Name</label
            >
            <input type="text" :id="liquid.element" :name="liquid.element" class="demand_input" />
          </div>
          <div id="liquid_qty" class="liquid_demand_item">
            <label for="quantity" class="demand_label">Quantity(liters)</label>
            <input type="number" id="quantity" name="quantity" class="demand_input" />
          </div>
        </div>

        <div class="city_wrap mt-8 mb-6">
          <div class="city_start">
            <span>start city transportation</span>
            <input type="text" id="city_a" name="city_a" class="city_input" />
          </div>
          <div class="city_end">
            <span>end city transportation</span>
            <input type="text" id="city_b" name="city_b" class="city_input" />
          </div>
        </div>
        <div class="fuel_wrap_submittion w-full mx-auto">
          <div class="btn_wrap_submit">
            <button class="btn_submit btn_gen_green" @click="handleSubmit">Submit</button>
          </div>
          <div class="modal_liquid_box my-4 w-full">
            <div class="modal_liquid_ct">
              <p>You will be join in less than a hour</p>
              <p>Click <span class="px-2 mx-2 rounded bg-purple-700 text-white">OK</span> to end</p>
              <div class="w-full mt-2">
                <button class="btn_end_mod w-full py-1 bg-purple-900 text-white rounded">OK</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <RequestOrFeedReference element="request" label="fuel-oil" :id-fetch="referenceGet" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  :root {
    --text-size-one: calc(13px + 0.15vw);
  }

  ul {
    list-style: none;
  }

  label,
  p {
    font-weight: bold;
    color: hsl(0, 5%, 30%);
  }

  .fuel_oil_content {
    width: 100%;
    min-height: 100vh;
    padding: 0.5rem 1rem;
    font-size: var(--text-size-one);
    overflow-x: hidden;
  }

  .liquid_demand_item {
    @apply w-full flex flex-col gap-2 my-4;
  }

  .demand_input {
    width: 100%;
    height: 2.6rem;
    border-radius: 5px;
    @apply border border-solid border-gray-300;
  }

  .demand_spec_liquid {
    height: 8rem;
    @apply w-full flex flex-col justify-start gap-2 mt-8 mb-6;
  }

  .spec_liquid_elt {
    @apply w-full flex justify-start gap-2 my-2;
  }

  .city_input {
    width: 100%;
    height: 2rem;
    margin: 0.5rem 0 1rem;
    border-radius: 5px;
    @apply border border-solid border-gray-300;
  }

  .btn_wrap_submit {
    position: relative;
    width: calc(100%);
    margin: 0.5rem auto 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal_liquid_ct {
    position: relative;
    top: 0;
    width: 100%;
    height: min-content;
    padding: 0.5rem 0.5rem 1rem;
    margin: 1.5rem 0;
    border-radius: 5px;
    @apply flex flex-col justify-center items-center text-center bg-gray-200;
  }

  .modal_liquid_ct * {
    margin: 0.5rem 0;
  }
}

@media (min-width: 460px) {
  :root {
    --text-size-one: calc(14px + 0.25vw);
  }
}

@media (min-width: 600px) {
  .fuel_oil_content {
    max-width: 860px;
    margin: 0 auto;
  }

  .details_liquid_demand {
    width: 100%;
    display: grid;
    grid-template-areas:
      'car'
      'liquid'
      'quantity'
      'city'
      'submit';
    grid-auto-rows: min-content;
  }

  .details_car {
    width: 100%;
    height: 8rem;
    padding-top: 2rem;
    grid-area: car;
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .details_car > .liquid_demand_item,
  .details_car > .liquid_demand_item + .liquid_demand_item {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 40px 80px;
    gap: 0.5rem;
  }

  .demand_spec_liquid {
    width: 100%;
    grid-area: liquid;
    height: 7rem;
    @apply gap-2 my-6;
  }

  .spec_liquid_elt {
    @apply gap-3 my-4;
  }

  .liquid_ref_wrap {
    width: 100%;
    grid-area: quantity;
    display: flex;
    flex-direction: row-reverse;
    gap: 0.75rem;
  }

  .city_wrap {
    width: 100%;
    grid-area: city;
  }

  .fuel_wrap_submittion {
    width: 100%;
    grid-area: submit;
  }

  .modal_liquid_ct {
    height: 12rem;
    margin: 2.5rem 0 1.5rem;
  }
}
</style>
