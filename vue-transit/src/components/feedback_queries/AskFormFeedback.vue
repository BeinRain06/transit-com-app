<script setup lang="ts">
import { ref, useTemplateRef, reactive } from 'vue'
import type { Ref } from 'vue'
import { useAskFeedStore } from '@/stores/ask-feed-store'

/* NEXT TO DO ----> LINK IND.STATS , GEN.STATS
   &&
   STYLE REASON-TABLE-CONTENT MEDIA QUERIES
*/

let platformFeed = reactive<{ base: string[] }>({
  base: []
})

const checkboxSubjectRef: Ref<HTMLInputElement[]> = ref([])

const reasonRef = useTemplateRef('reason-echo')

const reasonTableRef = useTemplateRef('subject-feed')

const showcaseSubjectRef = useTemplateRef('reason-yield')

const idCatChoices = reactive<{ domains: string[] }>({ domains: [] })

const reasonPop = reactive<{
  text: string
  lastIndex: number | null
  selectTextOption: string | undefined
}>({
  text: '',
  lastIndex: null,
  selectTextOption: ''
})

async function handleReasonChoice() {
  const reasonVal: string | undefined = reasonRef.value?.value

  const k: number | null = reasonPop.lastIndex

  if (k !== null && reasonVal !== reasonPop.selectTextOption) {
    checkboxSubjectRef.value[k].setAttribute('toggle', 'false')
  }

  if (reasonVal !== 'empty') {
    await reasonFetched(reasonVal)

    reasonRef.value?.parentElement?.parentElement?.classList.add('spot_active')

    reasonTableRef.value?.classList.add('show_subject_panel')
  } else {
    reasonRef.value?.parentElement?.parentElement?.classList.remove('spot_active')
  }
}

function reasonFetched(refElt: string | undefined) {
  idCatChoices.domains = []

  reasonPop.selectTextOption = refElt

  const useAskFeed = useAskFeedStore()

  const fetchReasons = useAskFeed.getReasons

  useAskFeed.$patch({ selectedDomain: refElt })

  platformFeed.base = []

  fetchReasons.map((item) => {
    if (item.domain === refElt) {
      //new elt arr content
      const newArr = item.archive

      //replace arr with new Elt
      platformFeed.base = [...newArr]
    }
    idCatChoices.domains.push(item.domain)
  })
}

async function handleSubjectMatter(e: Event, i: number, item: string) {
  const k: number | null = reasonPop.lastIndex

  if (checkboxSubjectRef.value === null) return

  if (k === null) {
    checkboxSubjectRef.value[i].setAttribute('toggle', 'true')
  } else {
    checkboxSubjectRef.value[k].setAttribute('toggle', 'false')
    checkboxSubjectRef.value[i].setAttribute('toggle', 'true')
  }

  reasonPop.text = item
  reasonPop.lastIndex = i

  setTimeout(() => {
    reasonTableRef.value?.classList.remove('show_subject_panel')
    showcaseSubjectRef.value?.setAttribute('data-show', 'true')
  }, 460)
}
</script>
<template>
  <div id="ask_feed">
    <div class="ask_feed_container">
      <div class="ask_feed_content w-full">
        <div
          class="feedback_raise_reason inline-flex justify-center items-center h-10 py-2 mt-8 mb-4"
        >
          <h5 class="w-28 h-full">Feedback issue</h5>
          <div
            class="question_raise_symbol grid place-items-center mx-1 w-5 h-5 border border-solid border-gray-300 bg-gray-200"
            style="border-radius: 50%"
          >
            &quest;
          </div>
        </div>
        <div class="board_reason w-full max-w-5xl my-4 mx-auto">
          <ul class="listen_wrap_reason flex_row_center text-center m-auto">
            <li class="tag_reason h-full flex_row_center">
              <h3 class="title_ask">Reason</h3>
            </li>
            <li class="tag_angle h-full flex_row_center">
              <div class="toggle_selection_reason">&#62;</div>
            </li>
            <li class="reason_spotted_wrap">
              <div class="reason_spotted">
                <select
                  class="w-full cursor-pointer pl-1"
                  ref="reason-echo"
                  @click="async () => handleReasonChoice()"
                >
                  <option name="empty" value="empty">choose one of the reason</option>
                  <option name="tech" class="reason_edge" value="tech">tech</option>
                  <option name="account" class="reason_edge" value="accounting">accounting</option>
                  <option name="management" class="reason_edge" value="management">
                    management
                  </option>
                  <option name="human" class="reason_edge" value="human">human</option>
                  <option name="law" class="reason_edge" value="law">law</option>
                </select>
              </div>
            </li>
          </ul>
          <div class="reason_table_wrap">
            <div class="reason_showcase" ref="reason-yield">
              {{ reasonPop.text }}
            </div>
            <div class="reason_table_content" ref="subject-feed">
              <div class="reason_item_wrap">
                <ul class="flex_col_center w-full pt-2 pb-4">
                  <li
                    class="category_choice"
                    :key="idCatChoices.domains[i]"
                    v-for="(item, i) in platformFeed.base"
                    @click="async (e: Event) => handleSubjectMatter(e, i, item)"
                  >
                    <div class="reason_number w-full p-2 pb-4 font-bold text-red-300">
                      {{ i + 1 }}
                    </div>
                    <div class="reason_fire w-full py-2 px-1 flex_row_center">
                      <p class="reason_item leading-relaxed flex flex-wrap max-w-lg">
                        {{ item }}
                      </p>
                      <div class="input_checkbox_subject" toggle="false" ref="checkboxSubjectRef">
                        <div class="subject_checkbox">&#9745;</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="details_feed w-full max-w-5xl mt-12 mx-auto">
          <div class="details_paragraph">
            <ul class="w-full flex_col_center gap-2">
              <li class="details_title w-full h-8 inline-flex items-center gap-2">
                <h3 class="title_ask">details</h3>
                <div
                  class="w-4 h-4 p-0 text-xs flex_row_center border border-solid border-black bg-gray-200"
                  style="border-radius: 50%"
                >
                  i
                </div>
              </li>
              <li class="box_text_paragraph w-full">
                <div class="box_text_wrap py-1 px-2 w-full h-full rounded">
                  <textarea
                    class="text_paragraph w-full rounded h-full"
                    rows="2"
                    cols="50"
                    autofocus
                  ></textarea>
                  <div
                    class="print_text_paragraph w-full my-2 inline-flex justify-end items-center"
                  >
                    <button class="btn_print_text text-blue-400">
                      see result<span class="symbol_raquo mx-2">&raquo;</span>
                    </button>
                  </div>
                  <div
                    class="text_display_wrap w-full h-auto mx-auto my-4 px-1 py-4 bg-gray-200 rounded"
                  >
                    <p class="text_display flex_row_center text-justify leading-relaxed"></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="optional_file_container w-full max-w-5xl mx-auto">
          <div class="optional_label my-4">
            <h3 class="title_ask">Optional</h3>
          </div>
          <div class="optional_file_content w-full">
            <ul
              class="organizing_files w-full flex_col_center mx-auto border-2 border-dotted border-gray-300 rounded"
            >
              <li class="w-full">
                <div class="organize_to_add">
                  <div
                    id="image_show"
                    class="optional_file border border-solid border-gray-300 rounded"
                  >
                    no image selected
                  </div>
                  <div class="text_spec_wrap">
                    <span class="text_spec">select an image</span>
                  </div>
                  <div class="input_file_wrap">
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      class="input_file my-2 p-1 border-1 border-solid border-gray-400"
                    />
                  </div>
                </div>
              </li>
              <li class="w-full">
                <div class="organize_to_add">
                  <div id="file_show" class="optional_file border border-solid border-gray-300">
                    no image selected
                  </div>
                  <div class="text_spec_wrap">
                    <span class="text_spec">select a file</span>
                  </div>
                  <div class="input_file_wrap">
                    <input
                      type="file"
                      id="fileUpload"
                      accept=".doc,.docx,.xml,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      class="input_file my-2 p-1 border-1 border-solid border-gray-400"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="area_send mt-8 mb-6">
          <ul class="further_need w-full flex_col_center gap-1">
            <li class="further_need_li">
              <div class="input_check_wrap">
                <input type="checkbox" id="check_quick" class="input_check w-full h-full" />
              </div>
              <h4 class="mx-2">Quick Report</h4>
            </li>
            <li class="further_need_li">
              <div class="input_check_wrap">
                <input type="checkbox" id="check_presence" class="input_check w-full h-full" />
              </div>
              <h4 class="mx-2">May request your presence</h4>
            </li>
          </ul>
          <ul class="btn_validation_wrap w-full flex_row_center gap-4 mt-6">
            <li class="w-24 h-8 p-1 bg-green-400 text-white flex_row_center rounded">
              <button>send</button>
            </li>
            <li class="w-24 h-8 p-1 bg-black text-white flex_row_center rounded">
              <button>abort</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 180px) {
  h3 {
    font-size: calc(14px + 0.25vw);
    font-weight: bolder;
  }

  ul {
    list-style: none;
  }

  .flex_row_center {
    @apply flex justify-center items-center;
  }

  .flex_col_center {
    @apply flex flex-col justify-center items-center;
  }

  .ask_feed_container {
    width: 100vw;
    min-height: 100vh;
    padding: 0.5rem 1rem 1rem;
    margin: 0 auto;
  }

  .listen_wrap_reason {
    width: 100%;
    height: 1.8rem;
    max-height: 3rem;
  }

  .toggle_selection_reason {
    @apply relative w-4 h-4 mx-2 bg-gray-400 grid place-content-center;
  }

  .reason_spotted_wrap {
    position: relative;
    right: calc(5%);
    width: 100%;
    height: 100%;
    margin-left: calc(10%);
    font-size: calc(12px + 0.15vw);
    border-radius: 8px;
    transition: all 650ms ease;
    @apply border border-solid border-gray-400 hover:border-2 hover:border-blue-300;
  }

  .reason_spotted_wrap.spot_active {
    @apply border border-solid border-purple-300;
  }

  .reason_spotted_wrap .reason_spotted {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 92%;
    padding: 0;
    margin: auto;
    border-radius: 8px;
    @apply border-2 border-solid border-gray-200 text-gray-400 flex_row_center;
  }

  .reason_spotted_wrap.spot_active .reason_spotted {
    font-weight: medium;
    transition: all 650ms ease 300ms;
    @apply border-2 border-solid border-purple-300 text-blue-400;
  }

  .reason_table_wrap {
    position: relative;
    width: 100%;
    margin: 2.25rem 0 1rem;
  }

  .reason_table_wrap .reason_showcase {
    visibility: hidden;
    opacity: 0;
    width: 100%;
    margin: 0 auto;
    transition: all 1s ease;
    @apply flex justify-center flex-wrap text-center py-2  px-4 font-medium;
  }

  .reason_table_wrap .reason_showcase[data-show='true'] {
    visibility: visible;
    opacity: 1;
  }

  .reason_table_wrap .reason_table_content {
    width: 90%;
    height: 9rem;
    margin: 0 auto;
    display: none;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-auto-columns: 70px;
    animation: anim-reason-appearance 2s ease forwards;
  }

  .reason_table_wrap .reason_table_content.show_subject_panel {
    display: grid;
  }

  .reason_item_wrap {
    position: relative;
    width: 100%;
    max-height: 12rem;
    margin: 0 auto;
    border-radius: 5px;
    overflow-y: scroll;
    @apply border border-solid border-red-200;
  }

  .category_choice {
    position: relative;
    top: 0;
    transition: all 580ms ease-in-out;
    @apply w-full py-1 cursor-pointer hover:text-blue-600 hover:bg-blue-100;
  }

  .input_checkbox_subject[toggle='false'] {
    display: none;
    position: relative;
    left: 1.5rem;
  }
  .input_checkbox_subject[toggle='true'] {
    display: block;
    position: relative;
    left: 1.5rem;
  }

  .input_checkbox_subject[toggle='false'] .subject_checkbox {
    position: relative;
    top: 0;
    width: 12px;
    height: 12px;
    outline: none;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all 650ms ease;
  }

  .input_checkbox_subject[toggle='true'] .subject_checkbox {
    border: 1px solid #a75da0;
  }

  .details_feed .text_paragraph {
    outline: none;
    border: none;
    padding: 10px;
    box-shadow: 0px 0px 6px rgb(150, 190, 149);
  }

  .optional_file_container h3 {
    width: max-content;
    border-bottom: 1px solid #ddd;
  }

  .optional_file_content .organize_to_add {
    width: 100%;
    height: 100%;
    max-width: 500px;
    padding: 0.5rem 1rem;
    margin: 1rem auto;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-rows: 9rem 2rem 2.7rem;
    grid-template-areas:
      'file_show'
      'text_label'
      'input_show';
    place-content: center;
  }

  .optional_file {
    grid-area: file_show;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    display: grid;
    place-items: center;
  }

  .text_spec_wrap {
    grid-area: text_label;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    place-items: center;
  }

  .input_file_wrap {
    grid-area: input_show;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  }

  .area_send .further_need_li {
    width: 100%;
    height: 2rem;
    font-size: calc(12px + 0.15vw);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input_check_wrap {
    width: 16px;
    height: 100%;
    @apply flex_row_center;
  }

  .input_check {
    width: 12px;
    height: 12px;
  }
}

@media (min-width: 1045px) {
  .reason_spotted_wrap {
    width: 50%;
  }

  .reason_table_wrap .reason_table_content {
    width: 56%;
    height: 14rem;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-auto-columns: 200px;
  }
}

@keyframes anim-reason-appearance {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>
