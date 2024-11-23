<script setup lang="ts">
import { computed } from 'vue'
import SubSecondaryTitle from '@/components/mini-tags-components/SubSecondaryTitle.vue'
import RequestOrFeedReference from '@/components/mini-tags-components/RequestOrFeedReference.vue'

const dataGetLiquid = computed(() => {
  let dataFetchInRequest = {
    driverId: 'MC1209890',
    engineLocalName: 'Katango CT',
    liquidInRequest: 'fuel',
    liquidName: 'diezel',
    quantity: '60l',
    startCity: 'melano-factory',
    endCity: 'east farm town',
    referenceGet: '046780233945',
    date: '11-03-24'
  }
  return dataFetchInRequest
})
</script>
<template>
  <div id="request_fuel_oil" class="fuel_oil_container w-screen">
    <div class="fuel_oil_content">
      <div class="liquid_request my-4 flex justify-center md:justify-end">
        <h3 class="gen_liquid_title py-2 px-4 krub-regular-italic">Liquid Request</h3>
      </div>
      <div style="font-size: calc(12px + 0.27vw)">
        <SubSecondaryTitle label="details" />
      </div>
      <!--details liquid-->
      <div class="details_liquid_demand w-full py-2 mb-4">
        <div class="details_car">
          <div class="liquid_demand_item my-2">
            <label for="driver" class="demand_label">
              <div class="flex flex-col">
                <p>Driver id</p>
                <span class="text-xs">(Do not share with anyone)</span>
              </div>
            </label>
            <div class="demand_input flex items-center">
              <p>{{ dataGetLiquid.driverId }}</p>
            </div>
          </div>
        </div>
        <div class="liquid_demand_item mt-4">
          <label for="engine" class="demand_label">Engine local Name</label>
          <div class="demand_input flex items-center">
            <p>{{ dataGetLiquid.engineLocalName }}</p>
          </div>
        </div>
      </div>
      <div class="demand_spec_liquid">
        <p>Which engine liquid do you request ?</p>
        <div class="spec_liquid_wrap w-full">
          <div class="spec_liquid_elt">
            <input
              type="checkbox"
              id="check_fuel"
              class="check_liquid"
              :checked="dataGetLiquid.liquidInRequest === 'fuel' ? true : false"
            />
            <span>Fuel(Diesel/Gazoil)</span>
          </div>
          <div class="spec_liquid_elt">
            <input
              type="checkbox"
              id="check_oil"
              class="check_liquid"
              :checked="dataGetLiquid.liquidInRequest === 'fuel' ? false : true"
            />
            <span>Motor Oil</span>
          </div>
        </div>
      </div>
      <div class="liquid_ref_wrap">
        <div id="liquid_type" class="liquid_demand_item py-2 sm:py-0">
          <label for="quantity" class="demand_label visible sm:invisible">Liquid</label>
          <div class="demand_input">
            <p class="w-full text-center">
              {{
                dataGetLiquid.liquidName.charAt(0).toUpperCase() + dataGetLiquid.liquidName.slice(1)
              }}
            </p>
          </div>
        </div>

        <div id="liquid_qty" class="liquid_demand_item py-3 sm:py-0">
          <label for="quantity" class="demand_label">Quantity(liters)</label>
          <div class="demand_input">
            <p>{{ dataGetLiquid.quantity }}</p>
          </div>
        </div>
      </div>

      <div class="city_wrap h-56 sm:h-60 my-4 grid content-center">
        <div class="city_start my-1">
          <span>start city transportation</span>
          <div id="city_a" class="city_input">
            <p>{{ dataGetLiquid.startCity }}</p>
          </div>
        </div>
        <div class="city_end my-2">
          <span>end city transportation</span>
          <div id="city_b" class="city_input">
            <p>{{ dataGetLiquid.endCity }}</p>
          </div>
        </div>
      </div>
      <!--Request id-->
      <div class="my-2">
        <RequestOrFeedReference
          element="request"
          label="fuel-oil"
          :id-fetch="dataGetLiquid.referenceGet"
        />
      </div>
      <!--Date-->
      <div class="krub-light-italic mb-2 md:mb-4" style="font-size: calc(12px + 0.15vw)">
        <p>
          <span>Date :</span> <span class="mx-2">{{ dataGetLiquid.date }}</span>
        </p>
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
    @apply w-full flex flex-col gap-2;
  }

  .demand_input {
    width: 100%;
    height: 2.2rem;
    padding: 0.5rem;
    border-radius: 5px;
    @apply flex flex-col justify-center items-start  border border-solid border-gray-300;
  }

  /** specs liquid **/

  .demand_spec_liquid {
    height: 6.4rem;
    @apply w-full flex flex-col justify-start gap-2 my-2;
  }

  .spec_liquid_elt {
    @apply w-full flex justify-start gap-2;
  }

  /** city wrap **/

  .city_input {
    width: 100%;
    height: 2rem;
    margin: 0.5rem 0 1rem;
    border-radius: 5px;
    @apply border border-solid border-gray-300;
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
    /*  grid-area: quantity; */
    display: flex;
    grid-auto-columns: 50%;
    grid-template-columns: 1fr;
    grid-auto-rows: 60px;
    gap: 0.75rem;
  }

  .city_wrap {
    width: 100%;
    /*  grid-area: city; */
  }
}
</style>
