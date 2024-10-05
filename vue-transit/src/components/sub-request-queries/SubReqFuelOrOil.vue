<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'

const fuelAsInput: Ref<HTMLInputElement | undefined> = ref()
const oilAsInput: Ref<HTMLInputElement | undefined> = ref()

interface Iliquid {
  status: boolean
  element: string
}

const liquid: Iliquid = reactive({
  status: false,
  element: ''
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
    //after request registering sendback **request id** and affect --newRef-- var
  }
  return newRef
})
</script>
<template>
  <div id="request_fuel_oil" class="fuel_oil_container">
    <div class="fuel_oil_content">
      <form class="details_liquid_demand">
        <div class="liquid_demand_item">
          <label for="driver" class="demand_label">Driver id</label>
          <input type="text" id="driver" name="driver" class="demand_input" />
        </div>
        <div class="liquid_demand_item">
          <label for="engine" class="demand_label">Engine local Name</label>
          <input type="text" id="engine" name="engine" class="demand_input" />
        </div>
        <div class="demand_spec_liquid">
          <span>Which engine liquid do you request ?</span>
          <div class="spec_liquid_wrap" @click="chooseFuelOrOIl">
            <div class="spec_liquid_elt">
              <input type="checkbox" id="check_fuel" class="check_liquid" ref="fuelAsInput" />
              <span>Fuel(Diesel/Gazoil)</span>
            </div>
            <div class="spec_liquid_elt">
              <input type="checkbox" id="check_oil" class="check_liquid" ref="oilAsInput" />
              <span>Motor Oil</span>
            </div>
          </div>
        </div>
        <div class="liquid_demand_item" v-if="liquid.status">
          <label :for="liquid.element" class="demand_label"
            >{{ liquid.element.charAt(0).toUpperCase() + liquid.element.slice(1) }} Name</label
          >
          <input type="text" :id="liquid.element" :name="liquid.element" class="demand_input" />
        </div>
        <div class="liquid_demand_item">
          <label for="quantity" class="demand_label">Quantity(liters)</label>
          <input type="number" id="quantity" name="quantity" class="demand_input" />
        </div>
        <div class="city_wrap">
          <div class="city_start">
            <span>start city transportation</span>
            <input type="text" id="city_a" name="city_a" class="city_input" />
          </div>
          <div class="city_end">
            <span>end city transportation</span>
            <input type="text" id="city_b" name="city_b" class="city_input" />
          </div>
        </div>
        <div class="fuel_wrap_submittion">
          <button class="btn_end_submit">Submit</button>
          <div class="modal_liquid_box">
            <div class="modal_liquid_ct">
              <p>You will be join in less than a hour</p>
              <p>Click <span>OK</span> to end</p>
              <butoon class="btn_end_mod">OK</butoon>
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
ul {
  list-style: none;
}
</style>
