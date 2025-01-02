<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import SupplyResources from '../request-queries/sub-request-queries/SupplyResources.vue'
import SubEngineRepairComponents from '../request-queries/sub-request-queries/SubEngineRepairComponents.vue'
import SubReqMaintenanceTools from '../request-queries/sub-request-queries/SubReqMaintenanceTools.vue'

const isConfirmed = ref<boolean>(false)

const selectTag: Ref<any> = ref()

const testOff = ref<boolean>(false)

const myCategory: ComputedRef<any> = computed(() => {
  const newValue = selectTag.value.value
  return newValue
})
</script>
<template>
  <main id="general_request">
    <div class="request_container">
      <div class="request_content">
        <div class="gen_req_choice">
          <div class="request_type">
            <ul class="request_lab">
              <li>
                <span>Request</span>
              </li>
              <li>
                <div>&quest;</div>
              </li>
            </ul>
            <div>
              <h3>new request</h3>
            </div>
          </div>
          <div class="remind_matter_wrap">
            <ul class="remind_matter">
              <li>
                <span>matter</span>
              </li>
              <li>
                <input type="text" id="issue_request" class="issue_request" />
              </li>
              <li>
                <button>continue</button>
              </li>
            </ul>
            <div class="matter_input">
              <ul>
                <li>
                  <p>// coming value input</p>
                </li>
                <li>
                  <button>change</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="choose catagory">
            <p>
              Choose a category between the select panel that evenly match with your previous matter
            </p>
            <div class="select_compose_ct">
              <div class="select_composition">
                <select id="select_matter" class="select_matter" ref="selectTag">
                  <option class="select_matter_item" value="engine">
                    supply engine components
                  </option>
                  <option class="select_matter_item" value="fuel">supply fuel/motor oil</option>
                  <option class="select_matter_item" value="oil">emptying/and oil change</option>
                  <option class="select_matter_item" value="tools">supply maintenance tools</option>
                  <option class="select_matter_item" value="revision">car revision</option>
                  <option class="select_matter_item" value="technical">technical assistance</option>
                  <option class="select_matter_item" value="integration">
                    human integration assistance
                  </option>
                  <option class="select_matter_item" value="devices">
                    faulty devices/appliances
                  </option>
                  <option class="select_matter_item" value="construction">
                    concrete material repairment
                  </option>
                  <option class="select_matter_item" value="bonus">unpaid bonus</option>
                  <option class="select_matter_item" value="salary">salary advancements</option>
                </select>
              </div>
              <ul>
                <li><span>selection</span></li>
                <li>
                  <div class="text_selection">// select contain</div>
                </li>
                <li>
                  <div>
                    <button>confirm</button>
                  </div>
                  <div>
                    <button>cancel</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="template_request_target">
            <div class="loading_wrapper" v-if="isConfirmed">
              <div class="loading">
                <div class="loading_circle"></div>
              </div>
            </div>

            <SubEngineRepairComponents label="devices/appliances" />

            <div class="real_sub_game" v-if="testOff">
              <div v-if="myCategory === 'tools'">
                <SupplyResources />
              </div>
              <div v-else-if="myCategory === 'engine'">
                <SubReqMaintenanceTools />
              </div>
              <div v-else-if="myCategory === 'devices'">
                <SubRequestRepairment label="devices/appliances" />
              </div>
              <div v-else-if="myCategory === 'construction'">
                <SubRequestRepairment label="concrete material" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
ul {
  list-style: none;
}
</style>
