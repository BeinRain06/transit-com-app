<script setup lang="ts"></script>
<template>
  <main id="ask_feed">
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
              <div class="reason_spotted">shortage resources</div>
            </li>
          </ul>
        </div>
        <div class="details_feed w-full max-w-5xl mt-12 mx-auto">
          <div class="details_paragraph">
            <ul class="w-full flex_col_center gap-2">
              <li class="details_title w-full h-8 inline-flex items-center gap-2">
                <h3 class="title_ask">details issue</h3>
                <div
                  class="w-4 h-4 p-0 text-xs flex_row_center border border-solid border-black bg-gray-200"
                  style="border-radius: 50%"
                >
                  i
                </div>
              </li>
              <li class="box_text_paragraph w-full">
                <div class="box_text_wrap py-1 px-2 w-full h-full rounded">
                  <div
                    class="text_display_wrap w-full h-auto mx-auto my-4 px-1 py-4 bg-gray-200 rounded"
                  >
                    <p class="text_display flex_row_center text-justify leading-relaxed p-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facilis
                      tenetur pariatur modi, architecto, dolore non eveniet corporis omnis aliquid
                      tempora ipsam voluptas? Nam aliquid unde quis quo quas a quod fugiat, sequi
                      vero magni quasi dicta possimus quidem odio!
                    </p>
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
              <div class="div_check_wrap">
                <div id="check_quick" class="div_check w-full h-full">&check;</div>
              </div>
              <h4 class="mx-2">Quick Report</h4>
            </li>
            <li class="further_need_li">
              <div class="div_check_wrap">
                <div id="check_presence" class="div_check w-full h-full"></div>
              </div>
              <h4 class="mx-2">May request your presence</h4>
            </li>
          </ul>
          <ul
            class="btn_validation_wrap relative w-full xl:w-4/5 xl:px-5 h-12 mt-6 mx-auto flex justify-center flex-col-reverse gap-6 sm:justify-between sm: flex-row sm: gap-0 sm: items-center sm:mt-12 lg:mt-6 lg:flex-row"
          >
            <li class="w-auto h-full flex_row_center">
              <div class="h-2 sm:h-6 bg-red-200 rounded-xl">
                <p class="text-red-400 sm:text-red-600 px-8 mt-4 sm:mt-0">initialization</p>
              </div>
            </li>
            <li class="w-auto h-full flex_row_center">
              <div class="h-8 bg-gray-300">
                <p class="text-gray-500 font-bold py-1 px-4">Feedback Request</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
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
    @apply relative w-4 h-4 mx-2 bg-gray-200 grid place-content-center;
  }

  .reason_spotted_wrap {
    position: relative;
    right: calc(5%);
    width: 100%;
    height: 100%;
    margin-left: calc(10%);
    font-size: calc(12px + 0.15vw);
    border-radius: 8px;
    @apply border border-solid border-gray-400;
  }

  .reason_spotted_wrap .reason_spotted {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 0;
    margin: auto;
    border-radius: 8px;
    @apply border-2 border-solid border-gray-200 text-gray-400 flex_row_center;
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

  .div_check_wrap {
    width: 16px;
    height: 100%;
    @apply flex_row_center;
  }

  .div_check {
    width: 12px;
    height: 12px;
    display: grid;
    place-content: center;
    font-size: calc(14px + 0.2vw);
    font-weight: bold;
  }
}

@media (min-width: 1045px) {
  .reason_spotted_wrap {
    width: 50%;
  }
}
</style>
